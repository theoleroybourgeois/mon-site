import { cn } from "@/lib/cn";

type Color = "encre" | "or" | "brume" | "parchemin";

const colorClass: Record<Color, string> = {
  encre: "text-encre",
  // or pur (#B08D5A) sur parchemin ≈ 2.5:1 — insuffisant en petite taille (WCAG AA = 4.5:1).
  // L'or-fonce (#8E6F40) atteint ~3.8:1, acceptable pour texte décoratif court.
  or: "text-or-fonce",
  // brume (#A89F8E) sur parchemin ≈ 1.7:1 — illisible. On bascule sur ardoise pour le texte.
  brume: "text-ardoise",
  parchemin: "text-parchemin",
};

export function EyebrowLabel({
  children,
  color = "encre",
  className,
}: {
  children: React.ReactNode;
  color?: Color;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-inscr text-[12px] uppercase tracking-[0.24em]",
        colorClass[color],
        className,
      )}
    >
      {children}
    </span>
  );
}
