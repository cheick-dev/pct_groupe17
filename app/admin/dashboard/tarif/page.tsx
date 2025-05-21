"use client";
import React, { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { getAllAgents } from "@/server/auth/agent";
import RegisterForm from "./tarifForm";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Loader } from "@/components/Loader";
import { getTarif, getTarifByType, getTarifs } from "@/server/admin/tarif/tarif";
import { Eye } from "lucide-react";
import { FraisTimbre } from "@/lib/generated/prisma";

function page() {
    const [tarifs, setTarifs] = useState<any>([]);
    const [tarifSelected, setTarifSelected] = useState<FraisTimbre | undefined>(undefined);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const gettarifs = async () => {
        setLoading(true);
        const res = await getTarifs();
        setTarifs(res);
        setLoading(false);
    };
    useEffect(() => {
        gettarifs();
    }, [refresh]);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <div className="mb-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-6">Tarifs</h1>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger className={buttonVariants()}>
                        Ajouter un tarif
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Ajouter un nouveau tarif</DialogTitle>
                        </DialogHeader>
                        <RegisterForm setIsOpen={setIsOpen} setRefresh={setRefresh} tarif={tarifSelected} />
                    </DialogContent>
                </Dialog>
            </div>

            <div className="overflow-x-auto">
                {tarifs ? (
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-3 px-4 font-medium">Type</th>
                                <th className="text-left py-3 px-4 font-medium">Prix timbre</th>
                                <th className="text-left py-3 px-4 font-medium">Prix expedition</th>
                                <th className="text-right py-3 px-4 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tarifs.map((tarif: any) => (
                                <tr key={tarif.ID_FraisTimbre} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4">{tarif.TypeActe}</td>

                                    <td className="py-3 px-4">
                                        {tarif.PrixTimbre}
                                    </td>
                                    <td className="py-3 px-4">{tarif.FraisDossier} </td>

                                    <td className="py-3 px-4 text-right">
                                        <Button
                                            onClick={async () => {
                                                const res = await getTarif(tarif.ID_FraisTimbre);
                                                setTarifSelected({ ...res, ID_FraisTimbre: tarif.ID_FraisTimbre })
                                                setIsOpen(true);
                                            }}
                                        >
                                            <Eye size={24} />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center text-gray-500 text-xl">
                        Aucun agent enregistré
                    </div>
                )}
            </div>
        </>
    );
}

export default page;