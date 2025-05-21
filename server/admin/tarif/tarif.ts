"use server";

import { getSession } from "@/server/sessions/agent_session";
import { TarifRepository } from './repositories/tarifRepository';
import { tarifSchema } from "@/validation/validation-tarif";
import { DemandePourTier, StatutDemande, TypeActe } from "@/lib/generated/prisma";
import { getDateTimeISOString } from "@/utils";
import { ErrorsMessage } from "@/enums/errors-message";
import { ResultData } from "@/types";
import { AgentRepository } from "@/server/auth/repositories/agentRepository";

const tarifRepos = new TarifRepository();
const agentRepos = new AgentRepository();

export async function createTarif(formData: FormData): Promise<ResultData> {
    const result = tarifSchema.safeParse(Object.fromEntries(formData));
    console.log(result);

    if (!result.success) {
        return {
            error: ErrorsMessage.errors,
        };
    }

    try {
        let session = await getSession();
        console.log(session);
        let user = await agentRepos.findById(session?.userId);
        if (!user) {
            return {
                error: ErrorsMessage.errors,
            };
        }


        console.log(result.data);

        const tarifByType = await getTarifByType(result.data.TypeActe);

        if (tarifByType)
            return {
                error: `Le tarif de type ${result.data.TypeActe} existe déjà`,
            };

        // DateAct
        const newDemande = await tarifRepos.create({
            data: {
                ...result.data,
                PrixTimbre: parseInt(result.data.PrixTimbre),
                FraisDossier: result.data.FraisDossier ? parseInt(result.data.FraisDossier) : result.data.FraisDossier
            },
        });

        console.log(newDemande);

        return {
            success: true
        };
    } catch (error) {
        console.log(error);
        return {
            error: ErrorsMessage.errors,
        };
    }
}


export async function updateTarif(formData: FormData, id: number): Promise<ResultData> {
    const result = tarifSchema.safeParse(Object.fromEntries(formData));
    console.log(result);

    if (!result.success) {
        return {
            error: ErrorsMessage.errors,
        };
    }

    try {
        let session = await getSession();
        console.log(session);
        let user = await agentRepos.findById(session?.userId);
        if (!user) {
            return {
                error: ErrorsMessage.errors,
            };
        }


        console.log(result.data);

        // DateAct
        const newDemande = await tarifRepos.update({
            where: { ID_FraisTimbre: id },
            data: {
                ...result.data,
                PrixTimbre: parseInt(result.data.PrixTimbre),
                FraisDossier: result.data.FraisDossier ? parseInt(result.data.FraisDossier) : result.data.FraisDossier
            },
        });

        console.log(newDemande);

        return {
            success: true
        };
    } catch (error) {
        console.log(error);
        return {
            error: ErrorsMessage.errors,
        };
    }
}

export async function getTarifs() {
    return await tarifRepos.findAll();
}


export async function getTarif(ID_FraisTimbre: Number) {
    return await tarifRepos.findOne({
        where: { ID_FraisTimbre: ID_FraisTimbre }
    });
}

export async function getTarifByType(TypeActe: TypeActe) {
    return await tarifRepos.findOne({
        where: { TypeActe: TypeActe }
    });
}