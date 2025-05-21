"use client";
import { FC, useEffect, useState } from "react";

import { DemandeResquest, Request } from "@/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
    Search,
    FileText,
    Clock,
    Check,
    X,
    ArrowUp,
    Filter,
    RefreshCw,
} from "lucide-react";

import { StatutDemande, TypeActe } from "@/lib/generated/prisma";
import { getSuivieDesDemande } from "@/server/demande/demande";
import { getRequestTypeName, getStatusDemande } from "@/utils";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/Loader";

const SuiviPage = () => {
    const router = useRouter();
    const [requests, setRequests] = useState<DemandeResquest[]>([]);
    const [filteredRequests, setFilteredRequests] = useState<DemandeResquest[]>([]);
    const [loading, setLoading] = useState(true);

    // Filtres
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<StatutDemande | "all">(
        "all"
    );
    const [typeFilter, setTypeFilter] = useState<TypeActe | "all">("all");

    // Charger les demandes
    useEffect(() => {
        const fetchRequests = async () => {
            setLoading(true);
            try {
                // Simuler une requête Supabase
                const storedRequests = await getSuivieDesDemande();

                // Trier par date de création (plus récent d'abord)
                const sortedRequests = [...storedRequests].sort(
                    (a, b) =>
                        new Date(b.DateDemande).getTime() -
                        new Date(a.DateDemande).getTime()
                );

                setRequests(sortedRequests);
                setFilteredRequests(sortedRequests);
            } catch (error) {
                console.error("Erreur lors du chargement des demandes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, []);

    // Appliquer les filtres
    useEffect(() => {
        let result = [...requests];

        // Filtre par terme de recherche
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(
                (req) =>
                    req.ID_Demande.toLowerCase().includes(term) ||
                    req.Nom.toLowerCase().includes(term) ||
                    req.Prenom.toLowerCase().includes(term) ||
                    req.Citoyen.Email.toLowerCase().includes(term)
            );
        }

        // Filtre par statut
        if (statusFilter !== "all") {
            result = result.filter((req) => req.Statut === statusFilter);
        }

        // Filtre par type
        if (typeFilter !== "all") {
            result = result.filter((req) => req.TypeActe === typeFilter);
        }

        setFilteredRequests(result);
    }, [requests, searchTerm, statusFilter, typeFilter]);

    // Réinitialiser les filtres
    const resetFilters = () => {
        setSearchTerm("");
        setStatusFilter("all");
        setTypeFilter("all");
    };

    // Formater les dates
    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return new Intl.DateTimeFormat("fr-FR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        }).format(date);
    };



    // Obtenir l'icône et la couleur selon le statut
    const getStatusInfo = (status: string) => {
        switch (status) {
            case StatutDemande.SoumisePayee:
                return {
                    icon: <Clock className="h-4 w-4" />,
                    color: "text-yellow-500",
                    badge: "bg-yellow-50 text-yellow-700 border-yellow-200",
                };
            case StatutDemande.Validée:
                return {
                    icon: <Check className="h-4 w-4" />,
                    color: "text-green-500",
                    badge: "bg-green-50 text-green-700 border-green-200",
                };
            case StatutDemande.Livrée:
                return {
                    icon: <Check className="h-4 w-4" />,
                    color: "text-green-500",
                    badge: "bg-green-50 text-green-700 border-green-200",
                };
            case StatutDemande.Refusée:
                return {
                    icon: <X className="h-4 w-4" />,
                    color: "text-red-500",
                    badge: "bg-red-50 text-red-700 border-red-200",
                };
            case StatutDemande.EnTraitement:
                return {
                    icon: <ArrowUp className="h-4 w-4" />,
                    color: "text-blue-500",
                    badge: "bg-blue-50 text-blue-700 border-blue-200",
                };
            default:
                return {
                    icon: <FileText className="h-4 w-4" />,
                    color: "text-gray-500",
                    badge: "bg-gray-50 text-gray-700 border-gray-200",
                };
        }
    };


    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Liste de mes demandes</h1>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={resetFilters}
                        className="flex items-center"
                    >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Actualiser
                    </Button>
                </div>
            </div>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="text-lg">Filtres</CardTitle>
                    <CardDescription>
                        Filtrez les demandes selon différents critères
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label
                                htmlFor="search"
                                className="text-sm font-medium block mb-1"
                            >
                                Recherche
                            </label>
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                                <Input
                                    id="search"
                                    placeholder="Nom, email, référence..."
                                    className="pl-9"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="status-filter"
                                className="text-sm font-medium block mb-1"
                            >
                                Statut
                            </label>
                            <Select
                                value={statusFilter}
                                onValueChange={(value) =>
                                    setStatusFilter(
                                        value as StatutDemande | "all"
                                    )
                                }
                            >
                                <SelectTrigger id="status-filter">
                                    <SelectValue placeholder="Tous les statuts" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        Tous les statuts
                                    </SelectItem>
                                    {Object.values(StatutDemande).map((type) => (
                                        <SelectItem key={type} value={type}>
                                            {getStatusDemande(type)}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <label
                                htmlFor="type-filter"
                                className="text-sm font-medium block mb-1"
                            >
                                Type de document
                            </label>
                            <Select
                                value={typeFilter}
                                onValueChange={(value) =>
                                    setTypeFilter(value as TypeActe | "all")
                                }
                            >
                                <SelectTrigger id="type-filter">
                                    <SelectValue placeholder="Tous les types" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        Tous les types
                                    </SelectItem>
                                    {Object.values(TypeActe).map((type) => (
                                        <SelectItem key={type} value={type}>
                                            {getRequestTypeName(type)}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-0">
                    {filteredRequests.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 px-4">
                            <Filter className="h-12 w-12 text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-1">
                                Aucune demande trouvée
                            </h3>
                            <p className="text-gray-500 text-center max-w-md">
                                Aucune demande ne correspond à vos critères de
                                filtrage. Essayez de modifier vos filtres ou de
                                créer une nouvelle demande.
                            </p>
                            <Button
                                variant="outline"
                                className="mt-4"
                                onClick={resetFilters}
                            >
                                Réinitialiser les filtres
                            </Button>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b bg-gray-50">
                                        <th className="text-left py-3 px-4 font-medium">
                                            Référence
                                        </th>
                                        <th className="text-left py-3 px-4 font-medium">
                                            Type
                                        </th>
                                        <th className="text-left py-3 px-4 font-medium">
                                            Nom & prénom
                                        </th>
                                        <th className="text-left py-3 px-4 font-medium">
                                            Email
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
                                    {filteredRequests.map((request) => {
                                        const statusInfo = getStatusInfo(
                                            request.Statut
                                        );
                                        return (
                                            <tr
                                                key={request.ID_Demande}
                                                className="border-b hover:bg-gray-50"
                                            >
                                                <td className="py-3 px-4 font-medium">
                                                    {request.ID_Demande
                                                        .substring(0, 8)
                                                        .toUpperCase()}
                                                </td>
                                                <td className="py-3 px-4">
                                                    {getRequestTypeName(
                                                        request.TypeActe
                                                    )}
                                                </td>
                                                <td className="py-3 px-4">{`${request.Nom} ${request.Prenom}`}</td>
                                                <td className="py-3 px-4">
                                                    <span className="max-w-[150px] truncate inline-block">
                                                        {request.Citoyen.Email}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4">
                                                    {formatDate(
                                                        request.DateDemande.toDateString()
                                                    )}
                                                </td>
                                                <td className="py-3 px-4">
                                                    <Badge
                                                        variant="outline"
                                                        className={
                                                            statusInfo.badge
                                                        }
                                                    >
                                                        <span className="flex items-center">
                                                            {statusInfo.icon}
                                                            <span className="ml-1">
                                                                {getStatusDemande(
                                                                    request.Statut
                                                                )}
                                                            </span>
                                                        </span>
                                                    </Badge>
                                                </td>
                                                <td className="py-3 px-4 text-right">
                                                    {
                                                        request.Statut == StatutDemande.SoumiseEnAttenteDePaiment
                                                            ?
                                                            <Button
                                                                size="sm"
                                                                className="bg-ci-orange hover:bg-ci-orange/90"
                                                                onClick={() => {


                                                                    router.push(`/paiement/${request.ID_Demande}`);
                                                                }}
                                                            >
                                                                Payer
                                                            </Button>
                                                            :
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={() => {


                                                                    router.push(`/confirmation/${request.ID_Demande}`);
                                                                }}
                                                            >
                                                                Détails
                                                            </Button>
                                                    }
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

export default SuiviPage;
