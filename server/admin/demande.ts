"use server";

import { DemandeRepository } from "./repositories/demandeRepository";
import { CitoyenRepository } from "../auth/repositories/citoyenRepository";
import { getSession } from "../sessions/citoyen_session";

import { createDemandeSchema } from "@/validation/validation-demande";
import { DemandePourTier, StatutDemande } from "@/lib/generated/prisma";
import { getDateTimeISOString } from "@/utils";
import { ErrorsMessage } from "@/enums/errors-message";

const demandeRepo = new DemandeRepository();
const citoyenRepo = new CitoyenRepository();

export async function createDemande(formData: FormData) {
    const result = createDemandeSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
            success: false,
        };
    }

    try {
        let session = await getSession();
        console.log(session);
        let user = await citoyenRepo.findById(session?.userId);
        if (!user) {
            const err = new Error("Une erreur est survenue");
            return {
                succes: false,
                errors: err,
            };
        }

        if (result.data.DemandePourTier == DemandePourTier.Moi) {
            result.data.Nom = user.Nom;
            result.data.Prenom = user.Prenom;
            result.data.DateActe = user.DateNaissance.toISOString();
        } else {
            result.data.DateActe = `${result.data.DateActe}T00:00:00.000Z`;
        }
        console.log(result.data);

        // DateAct
        const newDemande = await demandeRepo.create({
            data: {
                ...result.data,
                Citoyen: {
                    connect: { ID_Citoyen: user.ID_Citoyen },
                },
                Statut: StatutDemande.SoumiseEnAttenteDePaiment,
                DateDemande: getDateTimeISOString(),
                DateActe: `${result.data.DateActe}`,
            },
        });

        console.log(newDemande);

        return {
            success: true,
            ID_Demande: newDemande.ID_Demande,
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            errors: [ErrorsMessage.errors],
        };
    }
}

export async function getDemande(ID_Demande: string) {
    return await demandeRepo.findOne({
        where: { ID_Demande: ID_Demande },
        include: {
            Citoyen: true,
        },
    });
}
export async function getDemandes() {
    return await demandeRepo.findAll({
        where: {
            Statut: {
                not: 'SoumiseEnAttenteDePaiment'
            }
        }
    });
}

export async function getSuivieDesDemande() {
    const session = await getSession();
    if (!session) {
        return {
            success: false,
            errors: [ErrorsMessage.errors],
        };
    }

    return await demandeRepo.findAll({
        include: {
            Citoyen: true,
        },
        where: {
            ID_Citoyen: session?.userId,
        },
    });
}

export async function updateDemandeStatus(ID_Demande: string, status: StatutDemande) {
    return await demandeRepo.update({
        where: { ID_Demande: ID_Demande },
        data: {
            Statut: status,
        },
        include: {
            Citoyen: true,
        },
    });

}