"use client";

import { useEffect, useState } from "react";

type NavLink = {
    title: string;
    href: string;
};

export function useActiveSection(navLinks: NavLink[]) {
    const [activeSection, setActiveSection] = useState(navLinks[0]?.title ?? "");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 200) {
                setActiveSection("Accueil");
            }
        };

        window.addEventListener("scroll", handleScroll);

        const sections = navLinks
            .map((link) => ({
                id: link.href.replace("#", ""),
                title: link.title,
            }))
            .filter(({ id }) => document.getElementById(id));

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);

                if (!visible) return;

                const section = sections.find((s) => s.id === visible.target.id);

                if (section) {
                    setActiveSection(section.title);
                }
            },
            {
                root: null,
                rootMargin: "-40% 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);

            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [navLinks]);

    return activeSection;
}