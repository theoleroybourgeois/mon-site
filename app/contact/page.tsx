import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter le cabinet du Docteur Benjamin Paule à Arras pour une demande d'expertise.",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
        Contact
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
        Prendre contact avec le cabinet
      </h1>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Cabinet
          </p>
          <p className="mt-2 text-zinc-700">
            {"{{Adresse à compléter}}"}
            <br />
            Arras
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Téléphone
          </p>
          <p className="mt-2 text-zinc-700">
            {"{{Téléphone à compléter}}"}
          </p>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-zinc-600">{"{{Formulaire de contact à intégrer}}"}</p>
      </div>
    </section>
  );
}
