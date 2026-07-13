import { Globe, Smartphone, Monitor, Bot, LucideIcon } from "lucide-react";

type Service = {
    id: string;
    title: string;
    desc: string;
    Icon: LucideIcon;
    href: string;
}

export const services: Service[] = [
    {
        id: "01",
        title: "Développement Web",
        desc: "Sites vitrines, e-commerce, applications SaaS, plateformes sur mesure.",
        Icon: Globe,
        href: "#WebDev",
    },
    {
        id: "02",
        title: "Développement Mobile",
        desc: "Applications natives, cross-platform (iOS & Android), solutions mobiles d'entreprise.",
        Icon: Smartphone,
        href: "#MobileDev"
    },
    {
        id: "03",
        title: "Applications Bureau",
        desc: "Logiciels de gestion, outils internes, systèmes de point de vente (POS).",
        Icon: Monitor,
        href: "#DesktopDev"
    },
    {
        id: "04",
        title: "Intégration IA et Automatisation",
        desc: "Chatbots intelligents, analyse prédictive, automatisation des processus (RPA), traitement du langage naturel.",
        Icon: Bot,
        href: "#AiDev",
    },
];

export const servicesLabel = services.map((service) => service.title);