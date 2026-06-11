"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = ["Services", "Sectors", "Why Us", "Process", "FAQ", "Contact"];

const toHash = (label: string) => `#${label.toLowerCase().replace(/\s+/g, "-")}`;

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-white/60">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-3.5 flex items-center justify-between gap-4">
          <Link href="#" aria-label="Oceannova home" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Oceannova"
              height={52}
              width={183}
              priority
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          <div className="hidden lg:flex gap-8 text-sm font-semibold text-foreground/70">
            {navLinks.map((s) => (
              <Link
                key={s}
                href={toHash(s)}
                className="hover:text-primary transition-colors"
              >
                {s}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+442012345678"
              className="hidden xl:flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              <Phone size={14} aria-hidden />
              <span>+44 20 1234 5678</span>
            </a>
            <a
              href="#contact"
              className="btn-ocean hidden sm:inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold"
            >
              Free Consultation
            </a>
            <button
              className="lg:hidden p-2 -mr-2 text-foreground/70 hover:text-primary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-card z-50 p-8 shadow-2xl transform transition-transform duration-300 lg:hidden",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Image
          src="/logo.png"
          alt="Oceannova"
          height={44}
          width={155}
          className="h-11 w-auto mb-10"
        />
        <nav className="flex flex-col gap-6 text-lg font-semibold text-foreground/80">
          {navLinks.map((s) => (
            <Link
              key={s}
              href={toHash(s)}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2.5 hover:text-primary transition-colors"
            >
              <ChevronRight size={16} className="text-primary/50" aria-hidden />
              {s}
            </Link>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="btn-ocean mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-base font-semibold"
        >
          Free Consultation
        </a>
      </aside>
    </>
  );
}
