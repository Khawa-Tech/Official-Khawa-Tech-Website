"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import {
    contactFormSchema,
    ContactFormValues,
} from "../schemas/contact.schema";

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
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

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
                        service: values.service,
                        message: values.message,
                    },
                    EMAILJS_PUBLIC_KEY
                );

                form.reset();
                setStatus("success");
            } catch (error) {
                console.error("EmailJS Error:", error);

                setStatus("error");
                setErrorMessage(
                    "Something went wrong while sending your message. Please contact us directly at mohamedlouahchi9@gmail.com."
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