import { z } from "zod";
import { services } from "../constants/services";

/**
 * Accepted "service" options for the contact form.
 * Keep this in sync with the <option> values rendered in ContactForm.
 */

export const contactFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Le nom doit contenir au moins 2 caractères")
        .max(100, "Le nom est trop long"),

    email: z.string().trim().email("Adresse email invalide"),

    phoneNumber: z
        .string()
        .min(8, "Le numéro de téléphone doit contenir au moins 8 caractères")
        .or(z.literal(""))
        .optional(),

    preferredContactMethod: z
        .enum(["whatsapp", "viber", "email", "call"])
        .optional(),

    service: z.enum(services.map((service) => service.title), {
        message: "Veuillez sélectionner un service.",
    }),

    message: z
        .string()
        .min(10, "Le message doit contenir au moins 10 caractères")
        .or(z.literal(""))
        .optional(),

});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactServiceValue = (typeof services)[number];