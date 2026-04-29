export default function HomePage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
        Médecin expert près la cour d&apos;appel de Douai
      </p>
      <h1 className="mt-6 font-serif text-5xl leading-tight tracking-tight text-zinc-900 md:text-6xl">
        L&apos;expertise médicale au service de la vérité juridique.
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
        Le Docteur Benjamin Paule, médecin urgentiste, intervient comme expert
        en matière judiciaire, dommage corporel, expertise assurance et
        protection des personnes — au cabinet d&apos;Arras et dans tout le
        ressort de la cour d&apos;appel de Douai.
      </p>
      {/* TODO: blocs domaines d'expertise + parcours condensé + CTA contact */}
    </section>
  );
}
