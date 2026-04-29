import Link from "next/link";

const navLinks = [
  { href: "/le-docteur-paule", label: "Le Docteur" },
  { href: "/expertises", label: "Domaines d'expertise" },
  { href: "/honoraires", label: "Honoraires" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="bg-zinc-50">
        <p className="mx-auto max-w-6xl px-6 py-2 text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
          Médecin expert près la cour d&apos;appel de Douai
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-xl tracking-tight">
          Dr Benjamin Paule
        </Link>
        <nav className="hidden gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-600 transition hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
