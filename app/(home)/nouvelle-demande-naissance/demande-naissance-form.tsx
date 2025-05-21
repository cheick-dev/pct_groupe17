"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { getRequestDemandePourTier, getRequestTypeName } from "@/utils";
import { createDemande } from "@/server/demande/demande";
import { createDemandeSchema, CreateDemandeFormData } from "@/validation/validation-demande";
import { Info } from "lucide-react";
import { DemandePourTier, TypeActe } from "@/lib/generated/prisma";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ErrorsMessage } from "@/enums/errors-message";
import { getTarifByType } from "@/server/admin/tarif/tarif";

const DemandeNaissanceForm = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [demandePourTier, setDemandePourTier] = useState<DemandePourTier>(DemandePourTier.Moi);
    const [err, setErr] = useState<string | undefined>("");
    const [isLoading, setIsLoading] = useState(false);
    const [montant, setMontant] = useState(0);

    const typeFromUrl = searchParams.get("type") as TypeActe;

    const form = useForm({
        resolver: zodResolver(createDemandeSchema),
        defaultValues: {
            TypeActe: TypeActe.Naissance,
        },
    });

    const getTarif = async (typeActe: TypeActe) => {
        const tarif = await getTarifByType(typeActe);
        if (tarif) {
            setMontant(tarif.PrixTimbre);
        } else {
            setErr("Le tarif n'est pas encore parametrer pour ce type d'acte");
        }
    }

    useEffect(() => {
        if (typeFromUrl) {
            form.setValue("TypeActe", typeFromUrl);
            getTarif(typeFromUrl);
        }
    }, [typeFromUrl, form]);

    const onSubmit = async (data: CreateDemandeFormData) => {
        try {
            setIsLoading(true)
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const newRequest = await createDemande(formData);

            if (!newRequest.success) {
                setErr(newRequest.error);
                setIsLoading(false);
                return
            }

            router.push(`/paiement/${newRequest.data}`);
        } catch (error) {
            toast.error("Erreur lors de l'envoi de la demande", {
                description: error as string,
            });
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Demande d'acte de naissance</CardTitle>
                    <CardDescription>
                        Remplissez ce formulaire pour demander votre document
                        officiel.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
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
                            <FormField
                                control={form.control}
                                name="DemandePourTier"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel>Pour qui faite vous la demande ?</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={(e) => {
                                                    setDemandePourTier(e as DemandePourTier)
                                                    field.onChange(e)
                                                }}
                                                {...field}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Sélectionnez un type de document" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent >
                                                    {Object.values(DemandePourTier).map((type) => (
                                                        <SelectItem key={type} value={type}>
                                                            {getRequestDemandePourTier(type)}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="NumeroActe"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Numéro d'acte</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Numéro d'acte"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {demandePourTier != DemandePourTier.Moi && <FormField
                                    control={form.control}
                                    name="DateActe"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Date de naissance</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="date de naissance"
                                                    {...field}
                                                    type="date"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />}
                            </div>


                            {demandePourTier != DemandePourTier.Moi && <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="Nom"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nom du tier</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Numéro d'acte"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="Prenom"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Prenom du tier </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Prénom"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>}

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
                                <Button
                                    type="submit"
                                    isLoading={isLoading}
                                >
                                    Soumettre ma demande
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default DemandeNaissanceForm;
