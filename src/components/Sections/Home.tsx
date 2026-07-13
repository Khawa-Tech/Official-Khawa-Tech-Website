import Image from "next/image";
import Link from "next/link";
import Badge from "../units/Badge";
import { navLinks } from "@/src/constants/navLinks";

const SERVICE_CHIPS = [
    {
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        label: "Web Development",
        position: "top-[18%] left-[2%]",
    },
    {
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        label: "Desktop Applications",
        position: "top-[8%] right-[4%]",
    },
    {
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        ),
        label: "Mobile Development",
        position: "bottom-[18%] left-[4%]",
    },
    {
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" /><path d="M12 6v6l4 2" />
            </svg>
        ),
        label: "AI Integration",
        position: "bottom-[12%] right-[2%]",
    },
];

export default function HeroSection() {
    return (
        <section
            id={navLinks.find(link => link.href === "#home")?.href}
            className="relative min-h-[calc(100vh-68px)] flex items-center overflow-hidden bg-background"
        >
            {/* ── Background glow blobs ── */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/8 blur-[140px]" />

                <Image
                    src="/resources/vecteezy-blue-light-particles2.png"
                    alt="Background"
                    fill
                    className="opacity-5 hidden lg:block"
                />
            </div>

            {/* ── Content wrapper ── */}
            <div className="relative z-10 w-full mx-auto px-6 lg:px-12 xl:px-16 py-16 lg:py-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                {/* ── LEFT: Text content ── */}
                <div className="flex-1 flex flex-col items-start gap-6 text-center lg:text-left items-center lg:items-start">

                    {/* Badge */}
                    <Badge title={navLinks.find(link => link.href === "#home")?.label} />

                    {/* Heading */}
                    <h1 className="text-4xl xl:text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground">
                        Nous créons des <br />
                        solutions numériques <br />
                        qui propulsent votre <span className="text-primary">réussite.</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="max-w-md text-foreground/60 text-base sm:text-md leading-relaxed">
                        Nous concevons, développons et livrons des solutions numériques modernes pour le web, le mobile, les applications de bureau et l'intégration de l'IA afin d'aider les entreprises à se développer, à évoluer et à préparer l'avenir.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap gap-4 mt-2">
                        {/* Primary CTA */}
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-foreground font-semibold text-sm no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,73,225,0.5)] active:translate-y-0"
                        >
                            Lançons votre projet
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>

                        {/* Secondary CTA */}
                        <Link
                            href="#services"
                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-white/15 text-foreground/80 font-semibold text-sm no-underline transition-all duration-200 hover:bg-white/5 hover:border-white/30 hover:text-foreground"
                        >
                            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-white/30">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                                    <polygon points="3,1 9,5 3,9" />
                                </svg>
                            </span>
                            Découvrir nos services
                        </Link>
                    </div>
                </div>

                {/* ── RIGHT: Illustration ── */}
                <div className="flex-1 relative w-full lg:max-w-none aspect-square ">

                    {/* Main hero image */}
                    <Image
                        src="/resources/home.png"
                        alt="Khawa Tech — Web, Mobile, Desktop and AI solutions"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                    />

                    {/* Floating service chips */}
                    {/* {SERVICE_CHIPS.map(({ icon, label, position }) => (
                        <div
                            key={label}
                            className={`absolute ${position} hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-background/80 border border-primary/25 backdrop-blur-sm shadow-lg text-xs font-semibold text-foreground/85 whitespace-nowrap`}
                        >
                            <span className="text-primary">{icon}</span>
                            {label}
                        </div>
                    ))} */}
                </div>
            </div>
        </section>
    );
}