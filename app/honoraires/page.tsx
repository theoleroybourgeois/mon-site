import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honoraires",
  description:
    "Modalités, tarifs et déroulé d'une mission d'expertise médicale.",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
        Modalités
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
        Honoraires
      </h1>
      <p className="mt-8 text-zinc-600">{"{{Tarifs et modalités à intégrer}}"}</p>
    </section>
  );
}
