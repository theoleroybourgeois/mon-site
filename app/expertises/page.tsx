import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domaines d'expertise",
  description:
    "Expertise judiciaire, dommage corporel, expertise assurance et protection des personnes.",
};

const domaines = [
  {
    href: "/expertises/judiciaire",
    title: "Expertise judiciaire",
    description:
      "Missions ordonnées par les juridictions civiles et pénales du ressort de la cour d'appel de Douai.",
  },
  {
    href: "/expertises/dommage-corporel",
    title: "Dommage corporel",
    description:
      "Évaluation médico-légale des préjudices subis par les victimes d'accidents et d'agressions.",
  },
  {
    href: "/expertises/assurance",
    title: "Expertise assurance",
    description:
      "Expertises pour compagnies d'assurance, mutuelles et organismes de prévoyance.",
  },
  {
    href: "/expertises/protection-des-personnes",
    title: "Protection des personnes",
    description:
      "Certificats médicaux circonstanciés pour mesures de curatelle, tutelle et sauvegarde de justice.",
  },
];

export default function Page() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
        Domaines d&apos;expertise
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
        Quatre champs d&apos;intervention
      </h1>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {domaines.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className="group block border-t border-zinc-200 pt-6 transition hover:border-zinc-900"
          >
            <h2 className="font-serif text-2xl tracking-tight">{d.title}</h2>
            <p className="mt-3 text-zinc-600">{d.description}</p>
            <span className="mt-4 inline-block text-sm text-zinc-900 underline underline-offset-4">
              En savoir plus
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
