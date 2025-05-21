import { TypeActe } from "@/lib/generated/prisma";
import { z } from "zod";

export const tarifSchema = z.object({
    PrixTimbre: z.string(),
    TypeActe: z.nativeEnum(TypeActe),
    FraisDossier: z.string().optional(),
})


export type TarifFormData = z.infer<typeof tarifSchema>;
