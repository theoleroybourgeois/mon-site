import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

const expertises = [
  { href: "/expertises/protection-des-personnes", label: "Protection des personnes" },
  { href: "/expertises/dommage-corporel", label: "Dommage corporel" },
  { href: "/expertises/responsabilite-medicale", label: "Responsabilité médicale" },
];

const liensSite = [
  { href: "/presentation", label: "Présentation" },
  { href: "/honoraires", label: "Honoraires" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const { adresse, nom: cabinetNom } = site.cabinet;
  const { telephone, email } = site.coordonnees;

  return (
    <footer className="bg-encre text-parchemin">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-8">
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
                className="h-48 w-auto"
              />
            </Link>
            <p className="mt-8 font-display text-2xl italic text-parchemin">
              {site.identite.nom}
            </p>
            <p className="mt-2 font-inscr text-[12px] uppercase tracking-[0.24em] text-or">
              {site.identite.agrement.long}
            </p>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-brume-pale">
              {site.description}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-inscr text-[12px] uppercase tracking-[0.24em] text-or">
              Cabinet
            </p>
            <address className="mt-5 space-y-4 text-[15px] not-italic text-brume-pale">
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
            <p className="font-inscr text-[12px] uppercase tracking-[0.24em] text-or">
              Expertises
            </p>
            <ul className="mt-5 space-y-3 text-[15px]">
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
            <p className="font-inscr text-[12px] uppercase tracking-[0.24em] text-or">
              Site
            </p>
            <ul className="mt-5 space-y-3 text-[15px]">
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

        <div className="mt-12 border-t border-hairline-or pt-7">
          <dl className="grid gap-x-10 gap-y-4 text-[13px] leading-relaxed text-brume-pale sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="font-inscr text-[11px] uppercase tracking-[0.24em] text-or">
                Identification ordinale
              </dt>
              <dd className="mt-2">
                RPPS {site.identifiants.rpps}
                <br />
                Inscrit au CDOM {site.identifiants.ordre.conseil} (Pas-de-Calais)
                <br />
                Médecin spécialiste en médecine d&apos;urgence
              </dd>
            </div>
            <div>
              <dt className="font-inscr text-[11px] uppercase tracking-[0.24em] text-or">
                Expert judiciaire
              </dt>
              <dd className="mt-2">
                Expert près la cour d&apos;appel de Douai
                <br />
                Inscription depuis {site.identifiants.expert.anneeInscription}, rubrique {site.identifiants.expert.rubrique}
                <br />
                Membre de la CECAD
              </dd>
            </div>
            <div>
              <dt className="font-inscr text-[11px] uppercase tracking-[0.24em] text-or">
                Ressort de la cour d&apos;appel
              </dt>
              <dd className="mt-2 font-inscr text-[11px] uppercase tracking-[0.18em]">
                {site.ressort.join(" · ")}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-parchemin/15">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-5 sm:flex-row sm:items-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-brume-pale">
            © {new Date().getFullYear()} {site.identite.nomLong}
            <span className="mx-3 text-brume/60">·</span>
            <Link href="/mentions-legales" className="transition-colors hover:text-parchemin">
              Mentions légales
            </Link>
            <span className="mx-3 text-brume/60">·</span>
            <Link href="/confidentialite" className="transition-colors hover:text-parchemin">
              Confidentialité
            </Link>
          </p>
          <p className="font-inscr text-[12px] uppercase tracking-[0.24em] text-or">
            {site.bandeauAutorite.droite}
          </p>
        </div>
      </div>
    </footer>
  );
}
