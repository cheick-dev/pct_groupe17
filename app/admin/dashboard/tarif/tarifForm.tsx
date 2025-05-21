"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Info } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
    RegisterFormData,
    registerSchema,
} from "@/validation/validation-agent";
import { register } from "@/server/auth/agent";
import { useForm } from "react-hook-form";
import { TarifFormData, tarifSchema } from "@/validation/validation-tarif";
import { getRequestTypeName } from "@/utils";
import { FraisTimbre, TypeActe } from "@/lib/generated/prisma";
import { createTarif, updateTarif } from "@/server/admin/tarif/tarif";


function TarifForm({ setIsOpen, setRefresh, tarif = undefined }: { setIsOpen: any, setRefresh: any, tarif: FraisTimbre | undefined }) {

    const [isPending, setIsPending] = useState(false);
    const [err, setErr] = useState<string | undefined>("");

    const form = useForm<TarifFormData>({
        resolver: zodResolver(tarifSchema),
        defaultValues: {
            PrixTimbre: tarif ? tarif.PrixTimbre.toString() : "500",
            FraisDossier: tarif && tarif.FraisDossier ? tarif.FraisDossier.toString() : "0",
            TypeActe: tarif && tarif.TypeActe
        },
    });

    const onSubmit = async (data: TarifFormData) => {
        setErr("");
        setIsPending(true);
        console.log("test")
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });
        try {
            const res = tarif && tarif.ID_FraisTimbre ? await updateTarif(formData, tarif.ID_FraisTimbre) : await createTarif(formData);

            if (!res.success) {
                const errMessage = res.error;
                setErr(errMessage);
            } else {
                setIsOpen(false);
                setRefresh(!refresh);
            }
        } catch (error) {
            setErr(error as string);
        } finally {
            setIsPending(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="TypeActe"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type de demande</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(e) => {
                                            //setDemandePourTier(e as DemandePourTier)
                                            field.onChange(e)
                                        }}
                                        {...field}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Sélectionnez un type de demande" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent >
                                            {Object.values(TypeActe).map((type) => (
                                                <SelectItem key={type} value={type}>
                                                    {getRequestTypeName(type)}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="PrixTimbre"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Frais de timbre</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="500"
                                    {...field}
                                    disabled={isPending}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="FraisDossier"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Frais d'expedition</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="5000"
                                    {...field}
                                    disabled={isPending}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full" isLoading={isPending}>
                    Enregistrer
                </Button>
            </form>
        </Form>
    );
}

export default TarifForm;