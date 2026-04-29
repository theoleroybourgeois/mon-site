import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Docteur Paule",
  description:
    "Parcours, qualifications et agréments du Docteur Benjamin Paule, médecin expert près la cour d'appel de Douai.",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
        Le Docteur
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
        Docteur Benjamin Paule
      </h1>
      <p className="mt-8 text-zinc-600">{"{{Bio à intégrer}}"}</p>
    </section>
  );
}
