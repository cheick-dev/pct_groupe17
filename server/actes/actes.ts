"use server";

import { ActeRepository } from './repositories/actesRepository'
import { CitoyenRepository } from '../auth/repositories/citoyenRepository';
import { getSession } from "../sessions/citoyen_session";
import { createDemandeSchema } from '@/validation/validation-demande';
import { DemandePourTier, StatutDemande } from '@/lib/generated/prisma';
import { getDateTimeISOString } from '@/utils';
import { ErrorsMessage } from '@/enums/errors-message';
import { ResultData } from '@/types';
import { AgentRepository } from '../auth/repositories/agentRepository';


const acteRepo = new ActeRepository()
const agentRepo = new AgentRepository()

export async function createActe(ID_Demande: string): Promise<ResultData> {
    // const result = createDemandeSchema.safeParse(Object.fromEntries(formData));

    if (!ID_Demande || ID_Demande.length === 0 || typeof ID_Demande !== 'string') {
        return { error: ErrorsMessage.errors };
    }

    try {
        const session = await getSession();
        const user = await agentRepo.findById(session?.userId);

        if (!user) {
            return { error: ErrorsMessage.errors };
        }

        const newDemande = await acteRepo.create({
            data: {
                // ID_Agent: user.ID_Agent,
                DateDelivrance: getDateTimeISOString(),
                Fichier_PDF: "",
                SignatureNumerique: "Signée",
                EstArchive: false,
                DateArchivage: new Date(),
                Demande: {
                    connect: {
                        ID_Demande: ID_Demande
                    }
                },
                Agent: {
                    connect: {
                        ID_Agent: user.ID_Agent
                    }
                }
            }
        });

        return {
            success: true,
            data: newDemande.SignatureNumerique,
        };
    } catch (error) {
        console.error('Erreur lors de la création de la demande:', error);
        return { error: ErrorsMessage.errors };
    }
}

export async function getActe(ID_Demande: string) {
    try {
        return await acteRepo.findOne({
            where: { ID_Demande },
            include: {
                Agent: true,
                Demande: {
                    include: {
                        Citoyen: true
                    }
                }
            }
        });

    } catch (error) {
        console.error("Erreur lors de la récupération de l'acte:", error);
        return null;
    }
}

// export async function archiverActe(ID_Document_Acte: string) {
//     try {
//         const acteArchive = await acteRepo.update({
//             where: { ID_Document_Acte },
//             data: {
//                 EstArchive: true,
//                 DateArchivage: getDateTimeISOString()
//             }
//         });

//         return {
//             success: true,
//             data: acteArchive
//         };
//     } catch (error) {
//         console.error('Erreur lors de l\'archivage de l\'acte:', error);
//         return { error: ErrorsMessage.errors };
//     }
// }

// export async function getActesArchives() {
//     try {
//         return await acteRepo.findAll({
//             where: { EstArchive: true },
//             include: {
//                 Agent: true,
//                 Demande: {
//                     include: {
//                         Citoyen: true
//                     }
//                 }
//             }
//         });
//     } catch (error) {
//         console.error('Erreur lors de la récupération des actes archivés:', error);
//         return [];
//     }
// }