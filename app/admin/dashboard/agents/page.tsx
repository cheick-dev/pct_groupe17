"use client";
import React, { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { getAllAgents } from "@/server/auth/agent";
import RegisterForm from "./registerForm";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Loader } from "@/components/Loader";

function page() {
    const [agents, setAgents] = useState<any>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const getAgents = async () => {
        setLoading(true);
        const res = await getAllAgents();
        setAgents(res);
        setLoading(false);
    };
    useEffect(() => {
        getAgents();
    }, [refresh]);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <div className="mb-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-6">Agents</h1>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger className={buttonVariants()}>
                        Ajouter un agent
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Ajouter un nouvel agent</DialogTitle>
                        </DialogHeader>
                        <RegisterForm setIsOpen={setIsOpen} setRefresh={setRefresh} refresh={refresh} />
                    </DialogContent>
                </Dialog>
            </div>

            <div className="overflow-x-auto">
                {agents ? (
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-3 px-4 font-medium">Type</th>
                                <th className="text-left py-3 px-4 font-medium">Nom</th>
                                <th className="text-left py-3 px-4 font-medium">Email</th>
                                <th className="text-right py-3 px-4 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {agents.map((agent: any) => (
                                <tr key={agent.ID_Agent} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4">{agent.Role}</td>

                                    <td className="py-3 px-4">
                                        {agent.Nom} - {agent.Prenom}
                                    </td>
                                    <td className="py-3 px-4">{agent.Email} </td>

                                    <td className="py-3 px-4 text-right">
                                        <Link
                                            href={`/admin/dashboard/agents/${agent.ID_Agent}`}
                                            className={buttonVariants({ variant: "link" })}
                                        >
                                            Voir
                                        </Link>
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