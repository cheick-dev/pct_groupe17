"use client";
import { FC, useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useReactToPrint } from "react-to-print";

import { DemandeResquest } from "@/types";
import { TypeActe } from "@/lib/generated/prisma";
import { getDemandePayer } from "@/server/demande/demande";
import { formatDate, getRequestTypeName, getStatusDemande } from "@/utils";

import { ActeNaissance } from "@/components/ActeNaissance";
import { ActeMariage } from "@/components/ActeMariage";
import { ActeDeces } from "@/components/ActeDeces";
import { Loader } from "@/components/Loader";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, FileText, Download } from "lucide-react";

const ConfirmationPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [request, setRequest] = useState<DemandeResquest | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const componentRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: request
            ? `${request.Nom}-${request.Prenom}-${request.TypeActe}`
            : "document",
    });

    useEffect(() => {
        const fetchRequest = async () => {
            setLoading(true);
            try {
                const foundRequest = await getDemandePayer(id);
                setRequest(foundRequest);
                renderActeComponent();
            } catch (error) {
                console.error("Erreur lors de la récupération de la demande:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRequest();
    }, [id]);

    const renderActeComponent = () => {
        if (!request) return null;

        switch (request.TypeActe) {
            case "Naissance":
                return (
                    <ActeNaissance ref={componentRef} ID_Demande={request.ID_Demande} />
                );
            case "Mariage":
                return (
                    <ActeMariage ref={componentRef} ID_Demande={request.ID_Demande} />
                );
            case "Décès":
                return <ActeDeces ref={componentRef} ID_Demande={request.ID_Demande} />;
            default:
                return null;
        }
    };

    if (loading) return <Loader />;

    if (!request) {
        return (
            <Card className="max-w-md mx-auto">
                <CardHeader>
                    <CardTitle className="text-red-500">Demande introuvable</CardTitle>
                    <CardDescription>
                        Nous n'avons pas pu trouver votre demande. Veuillez vérifier l'URL
                        ou essayer à nouveau.
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
        <div className="max-w-2xl mx-auto">
            <Card className="border-green-100 shadow-lg">
                <CardHeader className="bg-green-50 border-b border-green-100">
                    <div className="flex items-center justify-center mb-4">
                        <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <CardTitle className="text-center text-2xl text-green-700">
                        Demande enregistrée avec succès !
                    </CardTitle>
                    <CardDescription className="text-center text-green-600">
                        Votre demande a été enregistrée dans notre système.
                    </CardDescription>
                </CardHeader>

                <CardContent className="pt-6">
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h3 className="font-medium text-gray-800 mb-2">
                            Récapitulatif de votre demande
                        </h3>
                        <div className="space-y-3 text-sm">
                            <p>
                                <span className="font-medium">Référence :</span>{" "}
                                {request.ID_Demande}
                            </p>
                            <p>
                                <span className="font-medium">Type de document :</span>{" "}
                                {getRequestTypeName(request.TypeActe)}
                            </p>
                            <p>
                                <span className="font-medium">Nom :</span> {request.Nom}
                            </p>
                            <p>
                                <span className="font-medium">Prénom :</span> {request.Prenom}
                            </p>
                            <p>
                                <span className="font-medium">Date :</span>{" "}
                                {request.DateActe?.toDateString()}
                            </p>
                            <p>
                                <span className="font-medium">Email :</span>{" "}
                                {request.Citoyen.Email}
                            </p>
                            <p>
                                <span className="font-medium">Date de soumission :</span>{" "}
                                {formatDate(request.DateDemande.toDateString())}
                            </p>
                            <p>
                                <span className="font-medium">Statut actuel :</span>{" "}
                                <span className="text-yellow-600 font-medium">
                                    {getStatusDemande(request.Statut)}
                                </span>
                            </p>
                        </div>
                    </div>

                    {request.Statut !== "Livrée" && (
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                            <h3 className="font-medium text-blue-800 mb-2">
                                Que se passe-t-il maintenant ?
                            </h3>
                            <ul className="space-y-2 text-blue-700 text-sm">
                                <li className="flex items-start">
                                    <ArrowRight className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Notre équipe va traiter votre demande dans un délai de 24 à
                                        48 heures.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <ArrowRight className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Vous recevrez un email de confirmation à l'adresse{" "}
                                        {request.Citoyen.Email}.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <ArrowRight className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Vous pourrez suivre l'état de votre demande en utilisant la
                                        référence indiquée ci-dessus.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    )}
                </CardContent>

                <CardFooter className="flex justify-between flex-wrap gap-3">
                    <Button onClick={() => router.back()} variant="outline">
                        Retour
                    </Button>
                    {request.Statut === "Livrée" ? (
                        <>
                            <Button onClick={handlePrint}>
                                <Download className="mr-2 h-4 w-4" />
                                Télécharger le document
                            </Button>
                            <div className="hidden">
                                {renderActeComponent()}
                            </div>
                        </>
                    ) : (
                        <Link href="/suivi-demande">
                            <Button>
                                <FileText className="mr-2 h-4 w-4" />
                                Suivre ma demande
                            </Button>
                        </Link>
                    )}
                </CardFooter>
            </Card>


        </div>
    );
};

export default ConfirmationPage;
