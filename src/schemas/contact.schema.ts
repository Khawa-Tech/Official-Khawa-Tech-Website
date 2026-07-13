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
        .optional(),

    service: z.enum(services.map((service) => service.title), {
        message: "Veuillez sélectionner un service.",
    }),

    message: z
        .string()
        .trim()
        .min(10, "Le message doit contenir au moins 10 caractères")
        .max(2000, "Le message est trop long (2000 caractères max)"),

    // File input is optional; validated client-side only (size/type), never required.
    attachments: z
        .instanceof(FileList)
        .optional()
        .refine(
            (files) => !files || files.length <= 5,
            "Vous pouvez joindre 5 fichiers maximum"
        )
        .refine(
            (files) =>
                !files ||
                Array.from(files).every((file) => file.size <= 10 * 1024 * 1024),
            "Chaque fichier doit faire moins de 10 Mo"
        ),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactServiceValue = (typeof services)[number];