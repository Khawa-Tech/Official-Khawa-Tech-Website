import Badge from "../units/Badge";
import Card from "../units/Card";
import { Mail, Phone, MapPin, Send, UploadCloud, Clock, ShieldCheck, UserCheck, CheckCircle, MessageSquare, User, Building2 } from "lucide-react";
import Link from "next/link";
import { about } from "@/src/constants/about";

export default function Contact() {
    return (
        <section id="contact" className="relative bg-background overflow-hidden py-16 lg:py-24">
            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary/8 blur-[120px]" />
            </div>

            <div className="relative z-10 w-full mx-auto px-6 lg:px-12 xl:px-16 flex flex-col gap-16">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">

                    {/* LEFT COLUMN: Contact Info */}
                    <div className="lg:col-span-5 flex flex-col items-start text-left gap-10">
                        <div className="flex flex-col items-start gap-4">
                            <Badge title="CONTACTEZ-NOUS" />
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-foreground">
                                Construisons Quelque Chose <br className="hidden lg:block" /> <span className="text-primary">d'Incroyable</span>
                            </h2>
                            <p className="text-foreground/60 text-base leading-relaxed max-w-md">
                                Vous avez un projet en tête ou besoin de conseils d'experts ? Nous sommes là pour vous aider à transformer vos idées en solutions numériques performantes.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8 w-full">
                            {/* Info Item */}
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-background border border-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(15,73,225,0.15)] relative">
                                    <div className="absolute inset-0 rounded-full bg-primary/10" />
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h4 className="text-base font-bold text-foreground mb-1">Envoyez-nous un Email</h4>
                                    <a href="mailto:hello@khawa-tech.com" className="text-sm text-primary hover:underline leading-relaxed">{about.contact.email}</a>
                                    <p className="text-sm text-foreground/60 leading-relaxed mt-0.5">Nous répondons dans les 24 heures</p>
                                </div>
                            </div>

                            {/* Info Item */}
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-background border border-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(15,73,225,0.15)] relative">
                                    <div className="absolute inset-0 rounded-full bg-primary/10" />
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h4 className="text-base font-bold text-foreground mb-1">Appelez-nous</h4>
                                    <a href={`tel:${about.contact.phoneNumber}`} className="text-sm text-primary hover:underline leading-relaxed">{about.contact.phoneNumber}</a>
                                    <p className="text-sm text-foreground/60 leading-relaxed mt-0.5">Dim - Jeu, 9h - 18h (GMT+1)</p>
                                </div>
                            </div>

                            {/* Info Item */}
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-background border border-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(15,73,225,0.15)] relative">
                                    <div className="absolute inset-0 rounded-full bg-primary/10" />
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h4 className="text-base font-bold text-foreground mb-1">Rendez-nous Visite</h4>
                                    <p className="text-sm text-foreground/60 leading-relaxed">Alger, Algérie</p>
                                    <p className="text-sm text-foreground/60 leading-relaxed mt-0.5">Rencontrons-nous pour discuter de votre projet</p>
                                </div>
                            </div>

                            {/* Info Item */}
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-background border border-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(15,73,225,0.15)] relative">
                                    <div className="absolute inset-0 rounded-full bg-primary/10" />
                                    <Send className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h4 className="text-base font-bold text-foreground mb-3">Suivez-nous</h4>
                                    {/* Social icons */}
                                    <div className="flex items-center gap-3 mt-1">
                                        {about.contact.socialMedias.map(({ label, url, Icon }) => (
                                            <a
                                                key={label}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={label}
                                                className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-foreground/50 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                                            >
                                                {<Icon />}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Contact Form */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <Card className="w-full p-8 lg:p-10 flex flex-col gap-8" hoverEffect={false}>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                    <MessageSquare className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">Envoyez-nous Votre Demande</h3>
                                    <p className="text-sm text-foreground/60 mt-1">Parlez-nous de votre projet et nous vous recontacterons avec la meilleure solution.</p>
                                </div>
                            </div>

                            <form className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm text-foreground/80">Votre Nom</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <User className="w-4 h-4 text-foreground/40" />
                                            </div>
                                            <input type="text" placeholder="Entrez votre nom complet" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm text-foreground/80">Adresse Email</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="w-4 h-4 text-foreground/40" />
                                            </div>
                                            <input type="email" placeholder="Entrez votre email" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-foreground/80">Nom de l'Entreprise (Optionnel)</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Building2 className="w-4 h-4 text-foreground/40" />
                                        </div>
                                        <input type="text" placeholder="Entrez le nom de votre entreprise" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-foreground/80">En quoi pouvons-nous vous aider ?</label>
                                    <select defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm text-foreground/80 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                                        <option value="" disabled>Sélectionnez un service</option>
                                        <option value="web">Développement Web</option>
                                        <option value="mobile">Développement Mobile</option>
                                        <option value="design">UI/UX Design</option>
                                        <option value="other">Autre</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-foreground/80">Parlez-nous de votre projet</label>
                                    <textarea rows={4} placeholder="Décrivez votre projet, vos objectifs, délais, budget (optionnel)..." className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"></textarea>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="w-full border border-dashed border-white/20 rounded-lg py-6 flex flex-col items-center justify-center gap-2 hover:border-primary/50 hover:bg-white/5 transition-all cursor-pointer">
                                        <UploadCloud className="w-6 h-6 text-primary" />
                                        <p className="text-sm text-foreground/80 font-medium">Télécharger des fichiers (optionnel)</p>
                                        <p className="text-xs text-foreground/60">Glissez-déposez ou cliquez pour parcourir</p>
                                    </div>
                                </div>

                                <button type="button" className="w-full sm:w-auto self-start sm:self-end flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg transition-all duration-200 hover:brightness-110 active:scale-[0.98]">
                                    Envoyer le Message
                                    <Send className="w-4 h-4" />
                                </button>

                            </form>
                        </Card>

                        {/* Features Below Form */}
                        {/* <Card className="w-full p-6" hoverEffect={false}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                        <Clock className="w-4 h-4 text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h5 className="text-[13px] font-bold text-foreground leading-tight">Réponse Rapide</h5>
                                        <p className="text-[11px] text-foreground/60 mt-1 leading-snug">Nous répondons dans les 24 heures</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-4 h-4 text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h5 className="text-[13px] font-bold text-foreground leading-tight">Sécurisé & Privé</h5>
                                        <p className="text-[11px] text-foreground/60 mt-1 leading-snug">Vos infos sont 100% sûres</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                        <UserCheck className="w-4 h-4 text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h5 className="text-[13px] font-bold text-foreground leading-tight">Support Dédié</h5>
                                        <p className="text-[11px] text-foreground/60 mt-1 leading-snug">Nous vous accompagnons</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h5 className="text-[13px] font-bold text-foreground leading-tight">Satisfaction Avant Tout</h5>
                                        <p className="text-[11px] text-foreground/60 mt-1 leading-snug">Votre succès est notre priorité</p>
                                    </div>
                                </div>
                            </div>
                        </Card> */}
                    </div>

                </div>
            </div>
        </section>
    );
}
