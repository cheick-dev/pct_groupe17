"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { ArrowUp, FileText, Clock, Check, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { formatDate, getRequestTypeName, getStatusDemande } from "@/utils";
import { useEffect, useState } from "react";
import { Demande } from "@/lib/generated/prisma";
import { getDemandes } from "@/server/admin/demande";
import { Loader } from "@/components/Loader";
import Link from "next/link";

const DashboardIndexPage = () => {
    const [demandes, setDemandes] = useState<Demande[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const fetchDemandes = async () => {
        setIsLoading(true)
        const res = await getDemandes();
        setDemandes(res);
        setIsLoading(false)
    }
    const demandesNaissance = demandes.filter(demande => demande.TypeActe === "Naissance")
    const demandesMariage = demandes.filter(demande => demande.TypeActe === "Mariage")
    const demandesDeces = demandes.filter(demande => demande.TypeActe === "Décès")

    const enAttente = demandes.filter(demande => demande.Statut === "SoumisePayee")
    const enTraitement = demandes.filter(demande => demande.Statut === "EnTraitement")
    const valide = demandes.filter(demande => demande.Statut === "Validée")
    const refuse = demandes.filter(demande => demande.Statut === "Refusée")

    // Les 5 dernières demandes reçues
    const recentDemandes = [...demandes].sort((a, b) => {
        return new Date(b.DateDemande).getTime() - new Date(a.DateDemande).getTime();
    }).slice(0, 5)

    useEffect(() => {
        fetchDemandes();
    }, []);
    const pieChartData = [
        { name: "Naissance", value: demandesNaissance.length, color: "#2563EB" },
        { name: "Mariage", value: demandesMariage.length, color: "#F59E0B" },
        { name: "Décès", value: demandesDeces.length, color: "#6B7280" },
    ];

    const statusChartData = [
        { name: "En attente", value: enAttente.length, color: "#F59E0B" },
        { name: "En traitement", value: enTraitement.length, color: "#3B82F6" },
        { name: "Approuvées", value: valide.length, color: "#10B981" },
        { name: "Rejetées", value: refuse.length, color: "#EF4444" },
    ];

    const generalStats = [
        {
            title: "Total demandes",
            value: demandes.length,
            Icon: FileText,
            color: "bg-gray-100",
        },
        {
            title: "En traitement",
            value: enTraitement.length,
            Icon: ArrowUp,
            color: "bg-blue-100",
        },
        {
            title: "En attente",
            value: enAttente.length,
            Icon: Clock,
            color: "bg-yellow-100",
        },
        {
            title: "Validées",
            value: valide.length,
            Icon: Check,
            color: "bg-green-100",
        },
        {
            title: "Refusées",
            value: refuse.length,
            Icon: X,
            color: "bg-red-100",
        },
    ]

    // Obtenir l'icône et la couleur selon le statut
    const getStatusInfo = (status: string) => {
        switch (status) {
            case "SoumisePayee":
                return {
                    icon: <Clock className="h-4 w-4" />,
                    color: "text-yellow-500",
                };
            case "Validée":
                return {
                    icon: <Check className="h-4 w-4" />,
                    color: "text-green-500",
                };
            case "Refusée":
                return {
                    icon: <X className="h-4 w-4" />,
                    color: "text-red-500",
                };
            case "EnTraitement":
                return {
                    icon: <ArrowUp className="h-4 w-4" />,
                    color: "text-blue-500",
                };
            default:
                return {
                    icon: <FileText className="h-4 w-4" />,
                    color: "text-gray-500",
                };
        }
    };


    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <div>
                <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
                {generalStats.map((card, idx) => (
                    <Card key={idx}>
                        <CardContent className="p-6">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        {card.title}
                                    </p>
                                    <h3 className="text-3xl font-bold">
                                        {card.value}
                                    </h3>
                                </div>
                                <div
                                    className={`${card.color} p-3 rounded-full`}
                                >
                                    <card.Icon className="h-6 w-6" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Répartition par type</CardTitle>
                        <CardDescription>
                            Distribution des demandes par type de document
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={pieChartData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) =>
                                            `${name}: ${(percent * 100).toFixed(
                                                0
                                            )}%`
                                        }
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {pieChartData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={entry.color}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Statut des demandes</CardTitle>
                        <CardDescription>
                            Répartition des demandes par statut
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={statusChartData}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar
                                        dataKey="value"
                                        name="Nombre"
                                        radius={[4, 4, 0, 0]}
                                    >
                                        {statusChartData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={entry.color}
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Demandes récentes</CardTitle>
                    <CardDescription>
                        Les 5 dernières demandes reçues
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {recentDemandes.length === 0 ? (
                        <p className="text-center py-8 text-gray-500">
                            Aucune demande n'a encore été enregistrée.
                        </p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-3 px-4 font-medium">
                                            Référence
                                        </th>
                                        <th className="text-left py-3 px-4 font-medium">
                                            Type
                                        </th>
                                        <th className="text-left py-3 px-4 font-medium">
                                            Nom
                                        </th>
                                        <th className="text-left py-3 px-4 font-medium">
                                            Date
                                        </th>
                                        <th className="text-left py-3 px-4 font-medium">
                                            Statut
                                        </th>
                                        <th className="text-right py-3 px-4 font-medium">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentDemandes.map((request) => {
                                        const statusInfo = getStatusInfo(
                                            request.Statut
                                        );
                                        return (
                                            <tr
                                                key={request.ID_Demande}
                                                className="border-b hover:bg-gray-50"
                                            >
                                                <td className="py-3 px-4">
                                                    {request.ID_Demande
                                                        .substring(0, 8)
                                                        .toUpperCase()}
                                                </td>
                                                <td className="py-3 px-4">
                                                    {getRequestTypeName(
                                                        request.TypeActe
                                                    )}
                                                </td>
                                                <td className="py-3 px-4">
                                                    {request.Nom}
                                                </td>
                                                <td className="py-3 px-4">
                                                    {formatDate(
                                                        request.DateDemande.toDateString()
                                                    )}
                                                </td>
                                                <td className="py-3 px-4">
                                                    <span
                                                        className={`flex items-center ${statusInfo.color}`}
                                                    >
                                                        {statusInfo.icon}
                                                        <span className="ml-2 text-sm">
                                                            {getStatusDemande(request.Statut)}
                                                        </span>
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4 text-right">
                                                    <Link
                                                        href={`/admin/dashboard/details-demande/${request.ID_Demande}`}
                                                        className={buttonVariants({ variant: "link" })}
                                                    >
                                                        Voir
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </>
    );
};

export default DashboardIndexPage;