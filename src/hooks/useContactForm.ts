"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import {
    contactFormSchema,
    ContactFormValues,
} from "../schemas/contact.schema";
import { about } from "../constants/about";

export type SubmissionStatus =
    | "idle"
    | "submitting"
    | "success"
    | "error";

interface UseContactFormReturn {
    form: ReturnType<typeof useForm<ContactFormValues>>;
    status: SubmissionStatus;
    errorMessage: string | null;
    handleFormSubmit: (event?: React.BaseSyntheticEvent) => Promise<void>;
    resetStatus: () => void;
}

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

export function useContactForm(): UseContactFormReturn {
    const [status, setStatus] = useState<SubmissionStatus>("idle");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        mode: "onBlur",
        defaultValues: {
            name: "",
            email: "",
            phoneNumber: "",
            preferredContactMethod: "whatsapp",
            service: "",
            message: "",
        },
    });

    const resetStatus = useCallback(() => {
        setStatus("idle");
        setErrorMessage(null);
    }, []);

    const submitHandler = useCallback(
        async (values: ContactFormValues) => {
            setStatus("submitting");
            setErrorMessage(null);

            try {
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    {
                        name: values.name,
                        email: values.email,
                        phoneNumber: values.phoneNumber,
                        preferredContactMethod: values.preferredContactMethod,
                        service: values.service,
                        message: values.message,
                        recipients: [
                            ...about.team.map((member) => member.email),
                            about.contact.email,
                        ],
                    },
                    EMAILJS_PUBLIC_KEY
                );

                form.reset();
                setStatus("success");
            } catch (error) {
                console.error("EmailJS Error:", error);

                setStatus("error");
                setErrorMessage(
                    `Something went wrong while sending your message. Please contact us directly at ${about.contact.email}.`
                );
            }
        },
        [form]
    );

    return {
        form,
        status,
        errorMessage,
        resetStatus,
        handleFormSubmit: form.handleSubmit(submitHandler),
    };
}