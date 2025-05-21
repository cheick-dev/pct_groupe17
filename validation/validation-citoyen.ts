import { z } from "zod";
export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;

export const loginSchema = z.object({
    Email: z.string().email({ message: "Invalid email address" }).trim(),
    Password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .trim(),
});
export const registerSchema = z.object({
    Nom: z
        .string()
        .min(3, { message: "Le nom doit contenir au moins 3 caractères" })
        .trim(),
    Prenom: z
        .string()
        .min(3, { message: "Le prénom doit contenir au moins 3 caractères" })
        .trim(),
    Email: z.string().email({ message: "Invalid email address" }).trim(),
    DateNaissance: z.string({ message: "Date de naissance invalide" }).trim(),
    LieuNaissance: z
        .string()
        .min(3, { message: "Lieu de naissance invalide" })
        .trim(),
    Telephone: z
        .string()
        .min(10, { message: "Numéro de téléphone invalide" })
        .trim(),
    Adresse: z.string().min(3, { message: "Adresse invalide" }).trim(),
    Password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .trim(),
});
