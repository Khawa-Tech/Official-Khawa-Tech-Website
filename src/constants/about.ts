import { IconType } from "react-icons";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa";
import {
    SiReact,
    SiShadcnui,
    SiFlutter,
    SiPython,
    SiPytorch,
    SiFirebase,
    SiNestjs,
    SiNextdotjs,
    SiTypescript,
    SiPostgresql,
    SiTailwindcss,
} from "react-icons/si";

type SocialMedia = {
    label: string;
    url: string;
    Icon: IconType;
}

type Team = {
    name: string;
    role: string;
    bio: string;
    Photo: string;
    PhotoStyle?: string;
    initials: string;
    techs: {
        Icon: IconType;
        color: string;
    }[];
}

type AboutInfo = {
    name: string;
    contact: {
        phoneNumber: string;
        email: string;
        socialMedias: SocialMedia[];
    };
    team: Team[];
}

export const about: AboutInfo = {
    name: "Khawa Tech",
    contact: {
        phoneNumber: "0782 72 24 36",
        email: "khawatechnology@gmail.com",
        socialMedias: [
            {
                label: "Instagram",
                url: "https://www.instagram.com/khawa.tech/",
                Icon: FaInstagram,
            },
            {
                label: "Facebook",
                url: "https://www.facebook.com/profile.php?id=61592001952285",
                Icon: FaFacebook,
            }
            // ,
            // {
            //     label: "LinkedIn",
            //     url: "https://linkedin.com",
            //     Icon: FaLinkedin,
            // },
            // {
            //     label: "GitHub",
            //     url: "https://github.com",
            //     Icon: FaGithub,
            // }
        ]
    },
    team: [
        {
            name: "Tamer N.",
            role: "Développeur Mobile & IA",
            bio: "Développe des applications mobiles modernes avec Flutter et conçoit des solutions d'intelligence artificielle performantes.",
            Photo: "/resources/Team/tamer2.png",
            PhotoStyle: "object-top",
            initials: "TN",
            techs: [
                { Icon: SiFlutter, color: "#02569B" },
                { Icon: SiPython, color: "#3776AB" },
                { Icon: SiPytorch, color: "#EE4C2C" },
                { Icon: SiFirebase, color: "#FFCA28" },
            ],
        },
        {
            name: "Mohamed L.",
            role: "Développeur Full Stack",
            bio: "Développe des applications web évolutives en utilisant des architectures modernes côté frontend et backend.",
            Photo: "/resources/Team/mohamed.png",

            initials: "ML",
            techs: [
                { Icon: SiNestjs, color: "#E0234E" },
                { Icon: SiPostgresql, color: "#4169E1" },
                { Icon: SiTypescript, color: "#3178C6" },
                { Icon: SiNextdotjs, color: "#ffffff" },
                { Icon: SiReact, color: "#61DAFB" },
                { Icon: SiTailwindcss, color: "#06B6D4" },
                { Icon: SiShadcnui, color: "#ffffff" },
            ],
        },
        {
            name: "Nazim B.",
            role: "Développeur Frontend",
            bio: "Conçoit des interfaces utilisateur modernes, performantes et intuitives avec les dernières technologies du web.",
            Photo: "/resources/Team/nazim.png",
            PhotoStyle: "scale-105 object-top",
            initials: "NB",
            techs: [
                { Icon: SiReact, color: "#61DAFB" },
                { Icon: SiNextdotjs, color: "#ffffff" },
                { Icon: SiTypescript, color: "#3178C6" },
                { Icon: SiTailwindcss, color: "#06B6D4" },
                { Icon: SiShadcnui, color: "#ffffff" },
            ],
        },
    ],
}