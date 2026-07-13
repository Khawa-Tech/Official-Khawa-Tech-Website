import Image from "next/image";
import Link from "next/link";
import Card from "../units/Card";
import Badge from "../units/Badge";
import { ArrowRight } from "lucide-react";
import { services } from "@/src/constants/services";
import { navLinks } from "@/src/constants/navLinks";
import { GlowLine } from "../units/GlowLine";

export default function Services() {
    return (
        <section
            id="services"
            className="relative bg-background overflow-hidden flex items-center border-b border-white/[0.06] scroll-mt-16"
        >
            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/8 blur-[140px]" />
            </div>

            <div className="relative z-10 w-full mx-auto px-6 lg:px-12 xl:px-16 flex flex-col gap-8">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                    {/* LEFT: Text Content */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                        <Badge title={navLinks.find(link => link.href === "#services")?.label} />
                        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight text-foreground">
                            Nous Construisons Des Solutions Avec Un{" "}
                            <span className="relative inline-flex flex-col items-center text-primary">
                                Impact Réel
                                <GlowLine className="mt-2 w-full" />
                            </span>
                        </h2>
                        <p className="max-w-xl text-foreground/60 text-base leading-relaxed">
                            De l'idéation au lancement, nous fournissons des solutions numériques de haute qualité adaptées à vos objectifs commerciaux.
                        </p>
                    </div>

                    {/* RIGHT: Illustration */}
                    <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none aspect-square lg:aspect-auto lg:h-[400px]" >
                        <Image
                            src="/resources/services.png"
                            alt="Services Khawa Tech"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map(({ id, title, desc, Icon }) => (
                        <Card key={id} className="flex flex-col gap-4 p-6 h-full bg-primary/10" hoverEffect={true}>
                            <div className="flex justify-between items-start">
                                <span className="text-4xl font-extrabold text-primary/60">{id}</span>
                                <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>
                            </div>
                            <div className="mt-2 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
                                <p className="text-sm text-foreground/60 leading-relaxed mb-4">{desc}</p>

                                <Link
                                    href="#contact"
                                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                                >
                                    En savoir plus <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section >
    );
}
