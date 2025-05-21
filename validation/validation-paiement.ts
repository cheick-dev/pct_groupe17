import {  ModePaiement } from "@/lib/generated/prisma";
import { z } from "zod";

export const paiementSchema = z.object({
    Montant: z.number(),
    ModePaiement: z.nativeEnum(ModePaiement),
    Transaction_ID: z.string(),
})
  
  
export type PaiementFormData = z.infer<typeof paiementSchema>;
