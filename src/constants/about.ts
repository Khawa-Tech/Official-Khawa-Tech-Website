import { IconType } from "react-icons";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa";

export type SocialMedia = {
    label: string;
    url: string;
    Icon: IconType;
}

export const about = {
    name: "Khawa Tech",
    contact: {
        phoneNumber: "0782 72 24 36",
        email: "khawatechnology@gmail.com",
        socialMedias: [
            {
                label: "Instagram",
                url: "https://instagram.com",
                Icon: FaInstagram,
            },
            {
                label: "Facebook",
                url: "https://facebook.com",
                Icon: FaFacebook,
            },
            {
                label: "LinkedIn",
                url: "https://linkedin.com",
                Icon: FaLinkedin,
            },
            {
                label: "GitHub",
                url: "https://github.com",
                Icon: FaGithub,
            }
        ]
    }
}