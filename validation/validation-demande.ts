import { DemandePourTier, TypeActe } from "@/lib/generated/prisma";
import { z } from "zod";

export const createDemandeSchema = z.object({
    TypeActe: z.nativeEnum(TypeActe),
    NumeroActe: z.string(),
    DemandePourTier: z.nativeEnum(DemandePourTier),
    Prenom: z.string().optional().transform((val, ctx: any) => {
        const demandePourTier = ctx.contextualData?.DemandePourTier;
        return demandePourTier === DemandePourTier.Moi ? '' : val;
    }),
    Nom: z.string().optional().transform((val, ctx: any) => {
        const demandePourTier = ctx.contextualData?.DemandePourTier;
        return demandePourTier === DemandePourTier.Moi ? '' : val;
    }),
    DateActe: z.string().optional().transform((val, ctx: any) => {
        const demandePourTier = ctx.contextualData?.DemandePourTier;
        return demandePourTier === DemandePourTier.Moi ? '' : `${val}`;
    }),
})


export const createDemandeMariageSchema = z.object({
    TypeActe: z.nativeEnum(TypeActe),
    NumeroActe: z.string(),
    DemandePourTier: z.nativeEnum(DemandePourTier).optional().transform((val, ctx: any) => {
        return DemandePourTier.Autre;
    }),
    Prenom: z.string(),
    Nom: z.string(),
    DateActe: z.string(),
})

export type CreateDemandeFormData = z.infer<typeof createDemandeSchema>;
export type CreateDemandeMariageFormData = z.infer<typeof createDemandeMariageSchema>;
