"use client";
import { useEffect, useState } from "react";

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
    LineChart,
    Line,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDemandes } from "@/server/admin/demande";
import { Demande } from "@/lib/generated/prisma";
import { Loader } from "@/components/Loader";

const Page = () => {
    const [requests, setRequests] = useState<Demande[]>([]);
    const [loading, setLoading] = useState(true);

    // Charger les demandes
    useEffect(() => {
        const fetchRequests = async () => {
            setLoading(true);
            try {
                const storedRequests = await getDemandes();
                setRequests(storedRequests);
            } catch (error) {
                console.error("Erreur lors du chargement des demandes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, []);

    // Générer les données pour les graphiques
    const getChartData = () => {
        // Statistiques par type
        const byType = [
            {
                name: "Naissance",
                value: requests.filter((r) => r.TypeActe === "Naissance").length,
                color: "#2563EB",
            },
            {
                name: "Mariage",
                value: requests.filter((r) => r.TypeActe === "Mariage").length,
                color: "#F59E0B",
            },
            {
                name: "Décès",
                value: requests.filter((r) => r.TypeActe === "Décès").length,
                color: "#6B7280",
            },
        ];

        // Statistiques par statut
        const byStatus = [
            {
                name: "En attente",
                value: requests.filter((r) => r.Statut === "SoumisePayee").length,
                color: "#F59E0B",
            },
            {
                name: "En traitement",
                value: requests.filter((r) => r.Statut === "EnTraitement").length,
                color: "#3B82F6",
            },
            {
                name: "Validées",
                value: requests.filter((r) => r.Statut === "Validée").length,
                color: "#10B981",
            },
            {
                name: "Refusées",
                value: requests.filter((r) => r.Statut === "Refusée").length,
                color: "#EF4444",
            },
        ];

        // Statistiques temporelles (par mois)
        const byMonth: Record<string, Record<string, number>> = {};

        requests.forEach((req) => {
            const date = new Date(req.DateDemande);
            const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;

            if (!byMonth[monthYear]) {
                byMonth[monthYear] = {
                    naissance: 0,
                    mariage: 0,
                    deces: 0,
                    total: 0,
                };
            }

            byMonth[monthYear][req.TypeActe]++;
            byMonth[monthYear].total++;
        });

        const timeData = Object.entries(byMonth).map(([month, data]) => ({
            month,
            ...data,
        }));

        timeData.sort((a, b) => {
            const [aMonth, aYear] = a.month.split("/").map(Number);
            const [bMonth, bYear] = b.month.split("/").map(Number);

            if (aYear !== bYear) return aYear - bYear;
            return aMonth - bMonth;
        });

        return { byType, byStatus, timeData };
    };

    const chartData = getChartData();

    // Formatage des données pour l'affichage
    const formatPercentage = (value: number) => {
        return value === 0
            ? "0%"
            : `${((value / requests.length) * 100).toFixed(1)}%`;
    };

    // Gestionnaire pour le survol des éléments du graphique
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
        name,
    }: any) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return percent > 0 ? (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor="middle"
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        ) : null;
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <h1 className="text-2xl font-bold mb-6">Statistiques</h1>

            {requests.length === 0 ? (
                <Card>
                    <CardContent className="p-8 text-center">
                        <h3 className="text-lg font-medium text-gray-800 mb-2">
                            Aucune donnée disponible
                        </h3>
                        <p className="text-gray-500 max-w-md mx-auto mb-4">
                            Il n'y a pas encore de demandes enregistrées dans le
                            système. Les statistiques seront disponibles une
                            fois que des demandes auront été soumises.
                        </p>
                    </CardContent>
                </Card>
            ) : (
                <>
                    {/* Statistiques de base */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-medium text-gray-800 mb-1">
                                    Total des demandes
                                </h3>
                                <p className="text-3xl font-bold">
                                    {requests.length}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-medium text-gray-800 mb-1">
                                    Naissances
                                </h3>
                                <div className="flex items-baseline">
                                    <p className="text-3xl font-bold mr-2">
                                        {chartData.byType[0].value}
                                    </p>
                                    <p className="text-gray-500">
                                        {formatPercentage(
                                            chartData.byType[0].value
                                        )}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-medium text-gray-800 mb-1">
                                    Mariages
                                </h3>
                                <div className="flex items-baseline">
                                    <p className="text-3xl font-bold mr-2">
                                        {chartData.byType[1].value}
                                    </p>
                                    <p className="text-gray-500">
                                        {formatPercentage(
                                            chartData.byType[1].value
                                        )}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-medium text-gray-800 mb-1">
                                    Décès
                                </h3>
                                <div className="flex items-baseline">
                                    <p className="text-3xl font-bold mr-2">
                                        {chartData.byType[2].value}
                                    </p>
                                    <p className="text-gray-500">
                                        {formatPercentage(
                                            chartData.byType[2].value
                                        )}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Graphiques détaillés */}
                    <Tabs defaultValue="type" className="mb-8">
                        <TabsList className="grid w-full grid-cols-3 mb-6">
                            <TabsTrigger value="type">Par type</TabsTrigger>
                            <TabsTrigger value="status">Par statut</TabsTrigger>
                            <TabsTrigger value="time">
                                Évolution temporelle
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="type">
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Répartition par type de document
                                    </CardTitle>
                                    <CardDescription>
                                        Distribution des demandes selon le type
                                        d'acte d'état civil
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-96">
                                        <ResponsiveContainer
                                            width="100%"
                                            height="100%"
                                        >
                                            <PieChart>
                                                <Pie
                                                    data={chartData.byType}
                                                    cx="50%"
                                                    cy="50%"
                                                    labelLine={false}
                                                    label={
                                                        renderCustomizedLabel
                                                    }
                                                    outerRadius={130}
                                                    innerRadius={60}
                                                    fill="#8884d8"
                                                    dataKey="value"
                                                >
                                                    {chartData.byType.map(
                                                        (entry, index) => (
                                                            <Cell
                                                                key={`cell-${index}`}
                                                                fill={
                                                                    entry.color
                                                                }
                                                            />
                                                        )
                                                    )}
                                                </Pie>
                                                <Tooltip />
                                                <Legend
                                                    layout="horizontal"
                                                    verticalAlign="bottom"
                                                    align="center"
                                                />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="status">
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Répartition par statut
                                    </CardTitle>
                                    <CardDescription>
                                        Distribution des demandes selon leur
                                        statut de traitement
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-96">
                                        <ResponsiveContainer
                                            width="100%"
                                            height="100%"
                                        >
                                            <BarChart
                                                data={chartData.byStatus}
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
                                                    {chartData.byStatus.map(
                                                        (entry, index) => (
                                                            <Cell
                                                                key={`cell-${index}`}
                                                                fill={
                                                                    entry.color
                                                                }
                                                            />
                                                        )
                                                    )}
                                                </Bar>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="time">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Évolution temporelle</CardTitle>
                                    <CardDescription>
                                        Évolution du nombre de demandes au fil
                                        du temps
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-96">
                                        <ResponsiveContainer
                                            width="100%"
                                            height="100%"
                                        >
                                            <LineChart
                                                data={chartData.timeData}
                                                margin={{
                                                    top: 20,
                                                    right: 30,
                                                    left: 20,
                                                    bottom: 5,
                                                }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="month" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Line
                                                    type="monotone"
                                                    dataKey="total"
                                                    name="Total"
                                                    stroke="#6B7280"
                                                    activeDot={{ r: 8 }}
                                                    strokeWidth={2}
                                                />
                                                <Line
                                                    type="monotone"
                                                    dataKey="naissance"
                                                    name="Naissance"
                                                    stroke="#2563EB"
                                                />
                                                <Line
                                                    type="monotone"
                                                    dataKey="mariage"
                                                    name="Mariage"
                                                    stroke="#F59E0B"
                                                />
                                                <Line
                                                    type="monotone"
                                                    dataKey="deces"
                                                    name="Décès"
                                                    stroke="#6B7280"
                                                />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </>
            )}
        </>
    );
};

export default Page;