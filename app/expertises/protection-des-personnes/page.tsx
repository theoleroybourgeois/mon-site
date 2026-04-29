import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protection des personnes",
  description:
    "Certificats médicaux circonstanciés pour mesures de curatelle, tutelle et sauvegarde de justice.",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
        Domaine d&apos;expertise
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
        Protection des personnes
      </h1>
      <p className="mt-8 text-zinc-600">{"{{Texte à intégrer}}"}</p>
    </section>
  );
}
