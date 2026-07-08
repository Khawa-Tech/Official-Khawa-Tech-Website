import Image from "next/image";
import Link from "next/link";
import Card from "../units/Card";
import Badge from "../units/Badge";
import { User, Code2, Zap, Lightbulb, Users, Rocket, RefreshCw, ShieldCheck, Code, Smile, CalendarDays, Target, ArrowRight } from "lucide-react";
import { navLinks } from "@/src/constants/navLinks";

const FEATURES = [
    {
        title: "Approche Centrée sur le Client",
        desc: "Nous écoutons, comprenons et collaborons étroitement pour donner vie à votre vision.",
        icon: <User className="w-5 h-5 text-primary" />
    },
    {
        title: "Code Propre et Évolutif",
        desc: "Nous suivons les meilleures pratiques pour construire des solutions maintenables et prêtes pour l'avenir.",
        icon: <Code2 className="w-5 h-5 text-primary" />
    },
    {
        title: "Livraison Rapide et Fiable",
        desc: "Nous respectons les délais et livrons des résultats de haute qualité à temps, à chaque fois.",
        icon: <Zap className="w-5 h-5 text-primary" />
    },
    {
        title: "L'Innovation au Cœur",
        desc: "Nous restons à la pointe des dernières technologies pour créer des solutions intelligentes et impactantes.",
        icon: <Lightbulb className="w-5 h-5 text-primary" />
    }
];

// const DIFFERENCE = [
//     {
//         title: "Équipe et Culture",
//         desc: "Une équipe jeune et passionnée qui se soucie de votre réussite.",
//         icon: <Users className="w-4 h-4 text-primary" />,
//         position: "top-[-10%] left-1/2 -translate-x-1/2",
//         align: "",
//         layout: "flex"
//     },
//     {
//         title: "Axé sur les Résultats",
//         desc: "Concentré sur la création de solutions offrant un impact mesurable.",
//         icon: <Rocket className="w-4 h-4 text-primary" />,
//         position: "top-[15%] right-[-8%]",
//         align: "items-start text-left",
//         layout: "flex-col"
//     },
//     {
//         title: "Partenariat à Long Terme",
//         desc: "Nous construisons des relations durables, pas seulement des projets ponctuels.",
//         icon: <RefreshCw className="w-4 h-4 text-primary" />,
//         position: "bottom-[33%] right-[3%]",
//         align: "items-start text-left",
//         layout: "flex-col"
//     },
//     {
//         title: "La Qualité Avant Tout",
//         desc: "Nous ne nous contentons pas de livrer du code, nous livrons l'excellence.",
//         icon: <ShieldCheck className="w-4 h-4 text-primary" />,
//         position: "bottom-[35%] left-[5%]",
//         align: "items-end text-right",
//         layout: "flex-col"
//     },
//     {
//         title: "Expertise Technique",
//         desc: "De solides compétences sur les technologies et frameworks modernes.",
//         icon: <Code className="w-4 h-4 text-primary" />,
//         position: "top-[15%] left-[-8%]",
//         align: "items-end text-right",
//         layout: "flex-col"
//     }
// ];

// const STATS = [
//     { icon: <Smile className="w-8 h-8 text-primary" />, value: "8+", label: "Clients Satisfaits" },
//     { icon: <Code2 className="w-8 h-8 text-primary" />, value: "50K+", label: "Lignes de Code" },
//     { icon: <CalendarDays className="w-8 h-8 text-primary" />, value: "10+", label: "Projets Réalisés" },
//     { icon: <Target className="w-8 h-8 text-primary" />, value: "100%", label: "Engagement" },
// ];

export default function WhyUs() {
    return (
        <section
            id="whyUs"
            className="relative bg-background overflow-hidden py-16 lg:py-24 border-b border-white/[0.06]"
        >
            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[140px]" />
            </div>

            <div className="relative z-10 w-full mx-auto px-6 lg:px-12 xl:px-16 flex flex-col gap-16">

                {/* Top Section: Features and Difference */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">

                    {/* LEFT COLUMN: Features */}
                    <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left gap-8">
                        <div className="flex flex-col items-center lg:items-start gap-4">
                            <Badge title={navLinks.find(link => link.href === "#whyUs")?.label} />
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-foreground">
                                Ce Qui Nous <br className="hidden lg:block" /> <span className="text-primary">Distingue</span>
                            </h2>
                            <p className="text-foreground/60 text-base leading-relaxed max-w-md">
                                Nous allons au-delà du code. Nous nous concentrons sur ce qui compte le plus pour livrer des solutions qui créent une réelle valeur pour votre entreprise.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8 relative mt-4 w-full">
                            {/* Vertical Line */}
                            <div className="absolute left-6 top-6 bottom-6 w-px bg-primary/20 hidden sm:block" />

                            {FEATURES.map((feat, i) => (
                                <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-5 relative z-10 text-center sm:text-left">
                                    <div className="w-12 h-12 rounded-full bg-background border border-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(15,73,225,0.15)] relative">
                                        {/* Inner glow */}
                                        <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
                                        {feat.icon}
                                    </div>
                                    <div className="flex flex-col pt-1">
                                        <h4 className="text-base font-bold text-foreground mb-1">{feat.title}</h4>
                                        <p className="text-sm text-foreground/60 leading-relaxed max-w-sm">{feat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Difference Pentagon */}
                    <div className="lg:col-span-7 flex items-center justify-center">
                        <Card className="w-full p-8 lg:p-12 h-[250px] md:h-[550px] flex flex-col items-center" hoverEffect={false}>
                            {/* Desktop/Tablet Pentagon Diagram */}
                            <Image
                                src="/resources/why_us2.png"
                                alt="Notre Différence"
                                fill
                                sizes="100vw"
                                className="object-contain mx-auto"
                            />

                            {/* <Image
                                    src="/resources/whyUs.png"
                                    alt="Notre Différence"
                                    width={400}
                                    height={400}
                                    className="object-contain mx-auto"
                                />

                                {DIFFERENCE.map((item, i) => (
                                    <div key={i} className={`absolute flex gap-3 w-[200px] ${item.position} ${item.align} ${item.layout}`}>
                                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className={`flex flex-col gap-1`}>
                                            <h5 className="text-sm font-bold text-foreground leading-tight">{item.title}</h5>
                                            <p className="text-[11px] text-foreground/60 leading-snug">{item.desc}</p>
                                        </div>
                                    </div>
                                ))} */}

                            {/* Mobile List View for Difference */}
                            {/* <div className="flex flex-col gap-6 md:hidden">
                                <div className="relative w-full max-w-[250px] aspect-square mx-auto mb-4">
                                    <Image
                                        src="/resources/why_us.png"
                                        alt="Notre Différence"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                {DIFFERENCE.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="flex flex-col pt-1">
                                            <h5 className="text-sm font-bold text-foreground">{item.title}</h5>
                                            <p className="text-xs text-foreground/60 leading-relaxed mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div> */}
                        </Card>
                    </div>
                </div>

            </div >
        </section >
    );
}
