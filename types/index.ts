import { RoleAgent, StatutDemande, TypeActe } from "@/lib/generated/prisma";

export interface Request {
    id: string;
    type: TypeActe;
    nom: string;
    prenom: string;
    parents?: string;
    date: string;
    lieu: string;
    email: string;
    statut: StatutDemande;
    created_at: string;
    paymentConfirmed: boolean;
}

export interface User {
    id: string;
    email: string;
    role: RoleAgent;
}

export interface RequestFormData {
    type: TypeActe;
    nom: string;
    prenom: string;
    parents?: string;
    date: string;
    lieu: string;
    email: string;
    paymentConfirmed: boolean;
}

export interface RequestStats {
    total: number;
    pending: number;
    approved: number;
    rejected: number;
    inProgress: number;
    byType: {
        naissance: number;
        mariage: number;
        deces: number;
    };
}

export interface CitoyenResquest {
    ID_Citoyen: string;
    Email: string;
}

export interface DemandeResquest {
    DateActe: Date;
    DateDemande: Date;
    ID_Demande: string;
    TypeActe: TypeActe;
    Nom: string;
    Prenom: string;
    Citoyen: CitoyenResquest;
    Statut: StatutDemande
}

export interface ResultData {
    success?: boolean;
    error?: string;
    data?: any;
}
