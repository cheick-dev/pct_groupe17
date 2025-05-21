"use client";
import { Agent, Demande, Citoyen } from "@/lib/generated/prisma";
import { getActe } from "@/server/actes/actes";
import { dateEnLettres } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ActeMariage({ ID_Demande, ref }: { ID_Demande: string, ref: any }) {
    const [acteInfos, setActeInfos] = useState<(Demande & { Citoyen: Citoyen }) | null>(null);
    const [agent, setAgent] = useState<Agent | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const getDocumentInfo = async () => {
        try {
            const res = await getActe(ID_Demande);
            setActeInfos(res?.Demande);
            setAgent(res?.Agent);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getDocumentInfo();
    }, [ID_Demande]);

    if (isLoading) {
        return null;
    }

    return (
        <div ref={ref} className="max-w-3xl h-screen mx-auto p-10 border border-black text-sm leading-relaxed bg-white text-black font-serif">
            <div className="text-center mb-4">
                <p className="uppercase font-bold">République de Côte d'Ivoire</p>
                <p className="font-semibold">------</p>
                <p className="uppercase font-bold">Acte de Mariage</p>
                <p>Du registre des actes de l'État Civil</p>
                <p>Pour l'année {acteInfos?.DateActe?.toLocaleDateString()}</p>
            </div>

            <div className="flex justify-between mb-6">
                <div className="text-left">
                    <p className="uppercase font-bold">Département de {acteInfos?.Citoyen.LieuNaissance}</p>
                    <p>Commune de {acteInfos?.Citoyen.LieuNaissance}</p>
                    <p className="uppercase font-bold">État civil</p>
                    <p>Centre principal {acteInfos?.Citoyen.LieuNaissance}</p>
                    <p className="mt-2">N° {acteInfos?.NumeroActe} du {acteInfos?.DateDemande?.toLocaleDateString()} du registre</p>
                </div>
                <div className="text-right font-bold">
                    <p>MARIAGE DE</p>
                    <p className="text-lg">{acteInfos?.Nom}</p>
                    <p>{acteInfos?.Prenom} .</p>
                </div>
            </div>

            <div className="mb-6">
                <p>
                    {acteInfos?.DateActe && <span>Le {dateEnLettres(acteInfos.DateActe)}</span>} ./ <br />
                    à vingt heures zéro minute ./ <br />
                    ont été unis par les liens du mariage <strong>{acteInfos?.Prenom} ./</strong>
                </p>
                <p>
                    à {acteInfos?.Citoyen.LieuNaissance} ./ <br />
                    fils/fille de{" "} <strong>{acteInfos?.Citoyen.Nom} ./</strong>
                </p>
            </div>

            <hr className="my-4 border-t border-black" />
            <div className="text-center font-bold">MENTIONS (éventuellement)</div>
            <div className="mt-2 space-y-1">
                <p>Divorce prononcé le ..................................................... Néant ............................. à ................. Néant ......................</p>
                <p>par jugement du tribunal de ..................................... Néant .......................................................</p>
            </div>
            <p>
                Certifié le présent extrait conforme aux indications portées au
                registre.
            </p>
            <div className="flex justify-between items-start mt-6">
                <div className="text-center font-bold">Timbre</div>
                <div className="text-sm">
                    <p className="mt-2">
                        Délivré à {acteInfos?.Citoyen.LieuNaissance}, le <strong>{acteInfos?.DateDemande?.toLocaleDateString()}</strong>
                    </p>
                    <p className="mt-4 font-semibold">L'Officier de l'État Civil,</p>
                    <Image
                        src="/signature1.png"
                        alt="signature"
                        width={300}
                        height={100}
                        priority
                    />
                    <p className="italic text-md">{agent?.Nom} {agent?.Prenom}</p>
                </div>
            </div>
        </div>
    );
}
