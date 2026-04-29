"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const navLinks = [
  { href: "/le-docteur-paule", label: "Présentation" },
  { href: "/expertises", label: "Expertises" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-encre">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2.5">
          <p className="font-inscr text-[12px] uppercase tracking-[0.24em] text-parchemin">
            {site.bandeauAutorite.gauche}
          </p>
          <p className="font-inscr text-[12px] uppercase tracking-[0.24em] text-or">
            {site.bandeauAutorite.droite}
          </p>
        </div>
      </div>

      <div className="border-b border-hairline-or bg-parchemin/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-1">
          <Link href="/" className="flex items-center" aria-label={`Accueil — ${site.identite.nom}`}>
            <Image
              src="/images/logos/logo-color.png"
              alt={site.identite.nom}
              width={1023}
              height={729}
              priority
              className="h-28 w-auto md:h-36"
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative font-inscr text-[12px] uppercase tracking-[0.24em] transition-colors ${
                    active ? "text-encre" : "text-encre/70 hover:text-encre"
                  }`}
                >
                  {link.label}
                  <span
                    className={`pointer-events-none absolute -bottom-1.5 left-0 h-px w-full origin-left bg-or transition-transform duration-300 ease-out ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center bg-encre px-6 py-3 font-inscr text-[12px] uppercase tracking-[0.24em] text-parchemin transition-all duration-300 ease-out hover:bg-sceau hover:tracking-[0.3em]"
            >
              Prendre contact
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-encre lg:hidden"
          >
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              aria-hidden="true"
            >
              <line x1="0" y1="1" x2="24" y2="1" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="13" x2="24" y2="13" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-parchemin lg:hidden">
          <div className="flex items-center justify-between border-b border-hairline-or px-6 py-3">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              aria-label="Accueil"
            >
              <Image
                src="/images/logos/logo-color.png"
                alt=""
                width={1023}
                height={729}
                className="h-24 w-auto"
              />
            </Link>
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
              className="font-inscr text-[12px] uppercase tracking-[0.24em] text-encre"
            >
              Fermer
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-10 px-10">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-display text-4xl italic ${
                    active ? "text-encre" : "text-encre/80"
                  }`}
                >
                  <span className="mr-3 align-middle font-mono text-[12px] not-italic tracking-[0.18em] text-or-fonce">
                    {String(navLinks.indexOf(link) + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-fit items-center bg-encre px-7 py-4 font-inscr text-[12px] uppercase tracking-[0.24em] text-parchemin"
            >
              Prendre contact
            </Link>
          </nav>
          <div className="border-t border-hairline-or px-6 py-4">
            <p className="font-inscr text-[12px] uppercase tracking-[0.24em] text-ardoise">
              {site.bandeauAutorite.gauche}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
