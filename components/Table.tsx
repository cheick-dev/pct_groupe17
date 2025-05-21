"use client";

import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

type Request = {
    id: string;
    type: string;
    nom: string;
    created_at: string;
    statut: string;
};

type RecentRequestsTableProps = {
    recentRequests: Request[];
    getStatusInfo: (status: string) => { color: string; icon: React.ReactNode };
    getRequestTypeName: (type: string) => string;
    formatDate: (date: string) => string;
};

export function RecentRequestsTable({
    recentRequests,
    getStatusInfo,
    getRequestTypeName,
    formatDate,
}: RecentRequestsTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Référence</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {recentRequests.map((request) => {
                    const statusInfo = getStatusInfo(request.statut);
                    return (
                        <TableRow key={request.id} className="hover:bg-muted">
                            <TableCell>
                                {request.id.substring(0, 8).toUpperCase()}
                            </TableCell>
                            <TableCell>
                                {getRequestTypeName(request.type)}
                            </TableCell>
                            <TableCell>{request.nom}</TableCell>
                            <TableCell>
                                {formatDate(request.created_at)}
                            </TableCell>
                            <TableCell>
                                <div
                                    className={`flex items-center ${statusInfo.color}`}
                                >
                                    {statusInfo.icon}
                                    <span className="ml-2">
                                        {request.statut}
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button size="sm" variant="link">
                                    Voir
                                </Button>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
