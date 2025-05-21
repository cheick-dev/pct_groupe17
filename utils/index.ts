import n2words from "n2words";
import { DemandePourTier, StatutDemande, TypeActe } from "@/lib/generated/prisma";





export function dateEnLettres(d: Date) {
    const parts = new Intl.DateTimeFormat("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).formatToParts(d);

    const jour = +parts.find(p => p.type === "day")!.value;
    const mois = parts.find(p => p.type === "month")!.value; // déjà « mai », « juin », …
    const annee = +parts.find(p => p.type === "year")!.value;

    const jourEnLettres = jour === 1 ? "premier" : n2words(jour, { lang: "fr" });

    return `${jourEnLettres} ${mois} ${n2words(annee, { lang: "fr" })}`;
}

// Formater les dates
export const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(date);
};

// Obtenir le nom du type de demande
export const getRequestTypeName = (type: string) => {
    switch (type) {
        case TypeActe.Naissance:
            return "Acte de naissance";
        case TypeActe.Mariage:
            return "Acte de mariage";
        case TypeActe.Décès:
            return "Acte de décès";
        default:
            return type;
    }
};


export const getStatusDemande = (status: string) => {
    switch (status) {
        case StatutDemande.SoumiseEnAttenteDePaiment:
            return "En attente de paiement";
        case StatutDemande.SoumisePayee:
            return "En attente de traitement";
        case StatutDemande.EnTraitement:
            return "En cours de traitement";
        case StatutDemande.Validée:
            return "En attente de signature";
        case StatutDemande.Livrée:
            return "Livrée";
        case StatutDemande.Refusée:
            return "Refusée";
        default:
            return status;
    }
};




export const getRequestDemandePourTier = (type: string) => {
    switch (type) {
        case DemandePourTier.Moi:
            return "Moi même";
        case DemandePourTier.MonEnfant:
            return "Mon enfant";
        case DemandePourTier.UnMenbreFamile:
            return "Un mebre de la famille";
        default:
            return type;
    }
};

export const getDateTimeISOString = () => {
    const todayAtMidnight = new Date();
    todayAtMidnight.setHours(0, 0, 0, 0);
    const formattedDate = todayAtMidnight.toISOString();
    return formattedDate;
};

