import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expertise assurance",
  description:
    "Expertises pour compagnies d'assurance, mutuelles et organismes de prévoyance.",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
        Domaine d&apos;expertise
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
        Expertise assurance
      </h1>
      <p className="mt-8 text-zinc-600">{"{{Texte à intégrer}}"}</p>
    </section>
  );
}
