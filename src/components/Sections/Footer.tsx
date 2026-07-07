import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/src/constants/navLinks";
import { about } from "@/src/constants/about";

const SERVICES = [
  { label: "Développement Web", href: "#services" },
  { label: "Applications Mobile", href: "#services" },
  { label: "Applications Desktop", href: "#services" },
  { label: "Intégration IA", href: "#services" },
  { label: "Conseil & Stratégie", href: "#services" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-white/[0.07] overflow-hidden">

      {/* ── Background glow ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />

      {/* ── CTA banner ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 xl:px-16 pt-16 pb-12">
        <div className="rounded-2xl bg-primary/10 border border-primary/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Prêt à démarrer ?</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
              Transformons votre idée en <br className="hidden sm:block" />
              <span className="text-primary">produit digital.</span>
            </h2>
          </div>
          <Link
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-foreground font-semibold text-sm no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(15,73,225,0.5)] active:translate-y-0"
          >
            Devis gratuit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center gap-2.5 no-underline">
              <Image src="/favicon.svg" alt="Khawa Tech Logo" width={32} height={32} />
              <span className="text-lg font-bold text-foreground tracking-tight">
                Khawa <span className="text-primary">Tech /</span>
              </span>
            </Link>
            <p className="text-sm text-foreground/55 leading-relaxed max-w-[260px]">
              Agence de développement digital spécialisée en web, mobile, desktop et intelligence artificielle.
            </p>
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

          {/* Navigation column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/40">Navigation</h3>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-foreground/60 no-underline hover:text-primary transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-primary">→</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/40">Services</h3>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
              {SERVICES.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-foreground/60 no-underline hover:text-primary transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-primary">→</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/40">Contact</h3>
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              <li className="flex items-start gap-3 text-sm text-foreground/60">
                <span className="mt-0.5 text-primary shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a href="mailto:contact@khawa-tech.com" className="text-foreground/60 no-underline hover:text-primary transition-colors duration-200">
                  {about.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/60">
                <span className="mt-0.5 text-primary shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.85 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.09a16 16 0 0 0 6 6l1.15-1.15a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15z" />
                  </svg>
                </span>
                <a href={`tel:${about.contact.phoneNumber}`} className="text-foreground/60 no-underline hover:text-primary transition-colors duration-200">
                  {about.contact.phoneNumber}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-white/[0.07] mb-8" />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/35">
          <p>© {year} Khawa Tech. Tous droits réservés.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="no-underline hover:text-primary transition-colors duration-200">Mentions légales</Link>
            <Link href="#" className="no-underline hover:text-primary transition-colors duration-200">Politique de confidentialité</Link>
            <Link href="#" className="no-underline hover:text-primary transition-colors duration-200">CGU</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}