"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/src/constants/navLinks";
import Image from "next/image";
import { useActiveSection } from "@/src/hooks/useActiveSection";

export default function Header() {

  const activeLink = useActiveSection(navLinks);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Header bar ── */}
      <header className="sticky top-0 z-[100] flex items-center justify-between gap-8 px-8 h-[68px] bg-background border-b border-white/[0.06] backdrop-blur-md">

        {/* Logo */}
        <Link
          href="/"
          aria-label="Khawa Tech Home"
          className="flex items-center gap-2.5 shrink-0 no-underline group"
        >
          <Image src="/favicon.svg" alt="Khawa Tech Logo" width={30} height={30} />
          <span className="text-[1.1rem] font-bold text-foreground whitespace-nowrap tracking-tight">
            Khawa <span className="text-primary">Tech /</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center" aria-label="Main navigation">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map(({ title, href }) => {
              const isActive = activeLink === title;
              return (
                <li key={title}>
                  <Link
                    href={href}
                    className={[
                      "relative inline-block px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap no-underline transition-colors duration-200",
                      isActive
                        ? "text-primary after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-[60%] after:h-[2px] after:bg-primary after:rounded-full"
                        : "text-foreground/60 hover:text-foreground hover:bg-white/5",
                    ].join(" ")}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA — hidden on mobile */}
        <Link
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 shrink-0 px-5 py-2 text-sm font-semibold text-foreground bg-primary rounded-lg no-underline whitespace-nowrap transition-all duration-200 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(15,73,225,0.45)] active:translate-y-0"
        >
          Devis gratuit
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        {/* Hamburger — visible on < lg */}
        <button
          className="lg:hidden flex flex-col justify-center gap-[5px] w-9 h-9 bg-transparent border-none cursor-pointer p-1 shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-full h-0.5 bg-foreground rounded-full transition-transform duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block w-full h-0.5 bg-foreground rounded-full transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block w-full h-0.5 bg-foreground rounded-full transition-transform duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        aria-hidden={!menuOpen}
        className={`lg:hidden fixed top-[68px] left-0 right-0 z-[99] bg-background border-b border-white/[0.08] px-6 py-6 transition-all duration-300 ease-in-out ${menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1 list-none m-0 p-0 mb-6">
            {navLinks.map(({ label, title, href }) => {
              const isActive = activeLink === title;
              return (
                <li key={label}>
                  <Link
                    href={href}
                    className={`block px-3 py-2.5 text-base font-medium rounded-lg no-underline transition-colors duration-200 ${isActive
                      ? "text-primary bg-white/5"
                      : "text-foreground/60 hover:text-foreground hover:bg-white/5"
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile CTA */}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-5 py-2.5 text-sm font-semibold text-foreground bg-primary rounded-lg no-underline transition-all duration-200 hover:brightness-110"
          >
            Get a Quote
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </nav>
      </div>

      {/* ── Backdrop ── */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[68px] z-[98] bg-[#01030F]/70 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}