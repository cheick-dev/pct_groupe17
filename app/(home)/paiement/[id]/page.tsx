"use client";
import { FC, useEffect, useState } from "react";
import { toast } from "sonner";
import { DemandeResquest, Request } from "@/types";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, FileText, Info } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { formatDate, getRequestTypeName, getStatusDemande } from "@/utils";
import { createPaimentDemande, getDemande, getDemandeEnAttenteDePaiement } from "@/server/demande/demande";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaiementFormData, paiementSchema } from "@/validation/validation-paiement";
import { ModePaiement } from "@/lib/generated/prisma";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import dynamic from "next/dynamic";
import { ErrorsMessage } from "@/enums/errors-message";
import { useRouter } from "next/navigation";
import { PaystackConsumer } from "react-paystack";
import { getTarifByType, getTarifs } from "@/server/admin/tarif/tarif";



interface PaystackConfig {
    reference: string;
    email: string;
    amount: number;
    publicKey: string;
}

interface PaystackResponse {
    reference: string;
    status: string;
    trans: string;
    transaction: string;
    message: string;
    [key: string]: any;
}


const PaiementPage: FC = () => {

    const router = useRouter();

    const { id } = useParams<{ id: string }>();
    const [request, setRequest] = useState<DemandeResquest | null>(null);
    const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [montant, setMontant] = useState(0);
    const [err, setErr] = useState<string | undefined>("");

    const form = useForm({
        resolver: zodResolver(paiementSchema),
        defaultValues: {
            Montant: montant,
            ModePaiement: ModePaiement.Carte_Bancaire,
            Transaction_ID: id
        },
    });

    useEffect(() => {
        if (id) {
            form.setValue("Transaction_ID", id);
            form.setValue("Montant", montant);
        }
    }, [id, form]);


    const config = {
        reference: (new Date()).getTime().toString(),
        email: request?.Citoyen.Email,
        amount: montant * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: process.env.NEXT_PUBLIC_KEY,
        currency: "XOF" // CFA Franc BCEAO
    };

    const handlePaystackSuccessAction = async (reference: any) => {
        // Implementation for whatever you want to do with reference and after success call.

        const paiement = {
            Montant: montant,
            ModePaiement: ModePaiement.Carte_Bancaire,
            Transaction_ID: config.reference,
        };
        const newRequest = await createPaimentDemande(paiement, id);
        if (!newRequest.success) {
            setErr(ErrorsMessage.errors);
            setIsLoading(false);
            return
        }

        router.push(`/confirmation/${newRequest.ID_Demande}`);
    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.        
        setIsLoading(false);

    }

    const componentProps: any = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference: PaystackResponse) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };



    useEffect(() => {
        const fetchRequest = async () => {
            setLoading(true);
            try {
                const foundRequest = await getDemandeEnAttenteDePaiement(id);
                if (foundRequest) {
                    setRequest(foundRequest);

                    const tarif = await getTarifByType(foundRequest.TypeActe);
                    if (tarif) {
                        setMontant(tarif.PrixTimbre);
                    } else {
                        setErr("Le tarif n'est pas encore parametrer pour ce type d'acte");
                    }
                }
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération de la demande:",
                    error
                );
            } finally {
                setLoading(false);
            }
        };

        fetchRequest();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-pulse text-ci-orange">
                    Chargement...
                </div>
            </div>
        );
    }

    if (!request) {
        return (
            <Card className="max-w-md mx-auto">
                <CardHeader>
                    <CardTitle className="text-red-500">
                        Demande introuvable
                    </CardTitle>
                    <CardDescription>
                        Nous n'avons pas pu trouver votre demande. Veuillez
                        vérifier l'URL ou essayer à nouveau.
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Link href="/demande">
                        <Button>Faire une nouvelle demande</Button>
                    </Link>
                </CardFooter>
            </Card>
        );
    }


    return (
        <div className="max-w-3xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Paiement</CardTitle>
                    <CardDescription>
                        Faite le paiement de votre demande {getRequestTypeName(request.TypeActe)}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {err && (
                        <Alert
                            variant="destructive"
                            className="flex items-center border-red-500"
                        >
                            <Info className="h-4 w-4" color="red" />
                            <div>
                                <AlertTitle>Erreur</AlertTitle>
                                <AlertDescription>{err}</AlertDescription>
                            </div>
                        </Alert>
                    )}


                    <div className="border-t pt-4">
                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                            <h3 className="font-medium text-gray-900 mb-2">
                                Frais de timbre
                            </h3>
                            <p className="text-gray-600 mb-2">
                                Les frais de timbre s'élèvent à {montant} FCFA pour ce document.
                            </p>
                            <p className="text-sm text-gray-500">
                                Vous devez régler ces frais pour que
                                votre demande soit traitée.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-end">

                        <PaystackConsumer {...componentProps} >
                            {({ initializePayment }) => <Button
                                isLoading={isLoading}
                                onClick={() => {
                                    setIsLoading(true);
                                    initializePayment(handlePaystackSuccessAction, handlePaystackCloseAction)
                                }}
                            >
                                Payer
                            </Button>}
                        </PaystackConsumer>
                        {/* <PaystackButtonNoSSR {...componentProps} className="bg-ci-orange hover:bg-ci-orange/90" /> */}

                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PaiementPage;
