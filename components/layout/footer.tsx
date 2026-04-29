import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg">Dr Benjamin Paule</p>
          <p className="mt-1 text-sm text-zinc-600">
            Médecin expert près la cour d&apos;appel de Douai
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Cabinet
          </p>
          <p className="mt-2 text-sm text-zinc-700">
            {"{{Adresse à compléter}}"}
            <br />
            Arras
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Contact
          </p>
          <p className="mt-2 text-sm text-zinc-700">
            {"{{Téléphone à compléter}}"}
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-block text-sm text-zinc-900 underline underline-offset-4"
          >
            Formulaire de contact
          </Link>
        </div>
      </div>
      <div className="border-t border-zinc-200">
        <p className="mx-auto max-w-6xl px-6 py-4 text-xs text-zinc-500">
          © {new Date().getFullYear()} Docteur Benjamin Paule — Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}
