import Image from "next/image";
import Card from "../units/Card";
import Badge from "../units/Badge";
import {
    LuBrainCircuit,
    LuTrendingUp,
    LuCodeXml,
} from "react-icons/lu";
import { Users } from 'lucide-react';
import { about } from "@/src/constants/about";
import { navLinks } from "@/src/constants/navLinks";
import { GlowLine } from "../units/GlowLine";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */

const VALUE_PILLARS = [
    {
        icon: <LuCodeXml />,
        title: "Code Propre",
        desc: "Nous écrivons du code évolutif, efficace et maintenable.",
    },
    {
        icon: <LuBrainCircuit />,
        title: "Solutions Intelligentes",
        desc: "Nous concevons des solutions innovantes qui résolvent de vrais problèmes.",
    },
    {
        icon: <LuTrendingUp />,
        title: "Impact Réel",
        desc: "Notre objectif est de livrer une valeur qui aide les entreprises à grandir.",
    },
];

const STATS = [
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
        ),
        label: "Projets Réalisés",
        value: "10+",
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        label: "Clients Satisfaits",
        value: "8+",
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        label: "Lignes de Code",
        value: "50K+",
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        label: "Idées Concrétisées",
        value: "100%",
    },
];

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */

export default function About() {
    return (
        <section
            id="about"
            className="relative bg-background overflow-hidden flex items-center border-b border-white/[0.06] mb-24 scroll-mt-16"
        >
            {/* ── Background glows ── */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-[15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[130px]" />
                <div className="absolute bottom-[10%] left-[-8%] w-[450px] h-[450px] rounded-full bg-primary/6 blur-[120px]" />
                <Image
                    src="/resources/vecteezy-blue-light-particles.png"
                    alt="Background"
                    fill
                    className="opacity-20 hidden lg:block"
                />
            </div>

            <div className="relative z-10 w-full mx-auto px-6 lg:px-12 xl:px-16 flex flex-col h-full gap-2">

                {/* ═══════════════════════════════════════
                    Part 1 — À Propos de Nous
                ═══════════════════════════════════════ */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* LEFT — Info & Pillars */}
                    <div className="lg:col-span-7 flex flex-col gap-4 items-start">
                        {/* Badge */}
                        <Badge title={navLinks.find(link => link.href === "#about")?.label} />

                        {/* Title */}
                        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight text-foreground">
                            Nous Sommes{" "}
                            <span className="relative inline-flex flex-col items-center text-primary">
                                Khawa Tech
                                <GlowLine className="mt-2 w-full" />
                            </span>
                        </h2>

                        {/* Description */}
                        <div className="flex flex-col gap-3 text-foreground/60 text-sm leading-relaxed max-w-2xl">
                            <p className="max-w-2xl leading-5 text-justify">
                                Khawa Tech est une agence de développement fondée par trois ingénieurs en informatique et en intelligence artificielle, passionnés par la technologie et la résolution de problèmes. Nous combinons créativité, expertise technique et innovation pour concevoir des solutions numériques modernes qui répondent aux besoins réels des entreprises et génèrent un impact durable.
                            </p>
                        </div>

                        {/* Pillars Row using Card Component */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full mt-4">
                            {VALUE_PILLARS.map(({ icon, title, desc }) => (
                                <Card
                                    key={title}
                                    className="flex gap-3 items-start p-4"
                                    hoverEffect={true}
                                >
                                    <span className="flex items-center justify-center bg-primary/10 w-12 h-12 rounded-lg text-white text-3xl border border-white/30 shrink-0">
                                        {icon}
                                    </span>
                                    <div className="flex flex-col">
                                        <h4 className="text-xs font-bold text-foreground leading-snug">{title}</h4>
                                        <p className="text-[10px] text-foreground/50 leading-relaxed mt-0.5">{desc}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — Laptop Image */}
                    <div className="lg:col-span-5 relative w-full aspect-[4/3]  flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <Image
                                src="/resources/about_us.png"
                                alt="À propos de Khawa Tech — illustration technologique"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* ═══════════════════════════════════════
                    Part 2 — Équipe
                ═══════════════════════════════════════ */}
                <div className="flex flex-col gap-4">

                    {/* Header */}
                    <div className="flex flex-col items-center gap-1 text-center">
                        <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest text-primary uppercase">
                            <Users size={16} />
                            <span className="mt-1">
                                Notre Équipe
                            </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-extrabold text-foreground tracking-tight">
                            Les Esprits Derrière Khawa Tech
                        </h3>
                        <p className="text-foreground/45 text-xs">
                            Trois étudiants. Une vision. Des possibilités infinies.
                        </p>
                    </div>

                    {/* Horizontal Team Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                        {about.team.map(({ name, role, bio, Photo, PhotoStyle, initials, techs }) => (
                            <Card
                                key={name}
                                className="flex gap-4 p-4 items-start"
                                hoverEffect={true}
                            >
                                {/* Glowing Photo */}
                                <div className="relative w-24 aspect-square rounded-full border-2 border-primary/80 shrink-0">
                                    <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-tr from-primary to-background">
                                        <Image fill src={Photo} alt={name} className={PhotoStyle ? `${PhotoStyle} w-full h-full object-cover` : `w-full h-full object-cover`} />
                                    </div>

                                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary/60 select-none -z-10">
                                        {initials}
                                    </span>
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                                    <div>
                                        <h4 className="text-sm font-bold text-foreground leading-tight">{name}</h4>
                                        <p className="text-[11px] font-semibold text-primary">{role}</p>
                                    </div>

                                    <p className="text-[11px] text-foreground/50 leading-relaxed line-clamp-3">{bio}</p>

                                    {/* Tech Icons */}
                                    <div className="flex flex-wrap gap-4 mt-auto pt-1">
                                        {techs.map(({ Icon, color }, index) => (
                                            <Icon
                                                key={index}
                                                size={24}
                                                style={{ color }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* ═══════════════════════════════════════
                    Part 3 — Statistiques (Bandeau unique)
                ═══════════════════════════════════════ */}
                {/* <Card hoverEffect={false} className="w-full p-0 overflow-hidden">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 md:divide-x divide-white/10">
                        {STATS.map(({ icon, label, value }) => (
                            <div
                                key={label}
                                className="flex items-center justify-center md:justify-start gap-3.5 px-6 py-4.5 hover:bg-primary/[0.02] transition-colors duration-300"
                            >
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary border border-primary/20 shrink-0">
                                    {icon}
                                </span>
                                <div className="flex flex-col">
                                    <p className="text-[9px] sm:text-[10px] text-foreground/45 font-medium leading-none mb-1">{label}</p>
                                    <p className="text-base sm:text-lg font-extrabold text-primary tracking-tight leading-none">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card> */}

            </div>
        </section>
    );
}
