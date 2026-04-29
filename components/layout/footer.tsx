import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

const expertises = [
  { href: "/expertises/protection-des-personnes", label: "Protection des personnes" },
  { href: "/expertises/dommage-corporel", label: "Dommage corporel" },
  { href: "/expertises/responsabilite-medicale", label: "Responsabilité médicale" },
];

const liensSite = [
  { href: "/le-docteur-paule", label: "Présentation" },
  { href: "/honoraires", label: "Honoraires" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const { adresse, nom: cabinetNom } = site.cabinet;
  const { telephone, email } = site.coordonnees;

  return (
    <footer className="bg-encre text-parchemin">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              href="/"
              aria-label={`Accueil — ${site.identite.nom}`}
              className="inline-block"
            >
              <Image
                src="/images/logos/logo-cream.png"
                alt={site.identite.nom}
                width={1024}
                height={758}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-8 font-display text-2xl italic text-parchemin">
              {site.identite.nom}
            </p>
            <p className="mt-2 font-inscr text-[10px] uppercase tracking-[0.32em] text-or">
              {site.identite.agrement.long}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brume-pale">
              {site.description}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-inscr text-[10px] uppercase tracking-[0.32em] text-or">
              Cabinet
            </p>
            <address className="mt-5 space-y-4 text-sm not-italic text-brume-pale">
              <p className="leading-relaxed">
                <span className="block text-parchemin">{cabinetNom}</span>
                {adresse.rue}
                <br />
                {adresse.codePostal} {adresse.ville}
              </p>
              <p className="space-y-1">
                <a
                  href={`tel:${telephone.tel}`}
                  className="block transition-colors hover:text-parchemin"
                >
                  {telephone.affichage}
                </a>
                <a
                  href={`mailto:${email}`}
                  className="block transition-colors hover:text-parchemin"
                >
                  {email}
                </a>
              </p>
              <Link
                href="/contact"
                className="inline-block border-b border-or pb-0.5 text-parchemin transition-colors hover:text-or"
              >
                Formulaire de contact
              </Link>
            </address>
          </div>

          <div className="md:col-span-3">
            <p className="font-inscr text-[10px] uppercase tracking-[0.32em] text-or">
              Expertises
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {expertises.map((e) => (
                <li key={e.href}>
                  <Link
                    href={e.href}
                    className="text-brume-pale transition-colors hover:text-parchemin"
                  >
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-inscr text-[10px] uppercase tracking-[0.32em] text-or">
              Site
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {liensSite.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-brume-pale transition-colors hover:text-parchemin"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-hairline-or pt-8">
          <p className="text-center font-inscr text-[10px] uppercase tracking-[0.32em] text-brume">
            {site.ressort.join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-parchemin/15">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-5 sm:flex-row sm:items-center">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-brume">
            © {new Date().getFullYear()} {site.identite.nomLong}
            <span className="mx-3 text-brume/50">·</span>
            <Link href="/mentions-legales" className="transition-colors hover:text-parchemin">
              Mentions légales
            </Link>
            <span className="mx-3 text-brume/50">·</span>
            <Link href="/confidentialite" className="transition-colors hover:text-parchemin">
              Confidentialité
            </Link>
          </p>
          <p className="font-inscr text-[10px] uppercase tracking-[0.32em] text-or">
            {site.bandeauAutorite.droite}
          </p>
        </div>
      </div>
    </footer>
  );
}
