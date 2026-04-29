import { cn } from "@/lib/cn";

type Color = "encre" | "or" | "brume" | "parchemin";

const colorClass: Record<Color, string> = {
  encre: "text-encre",
  or: "text-or",
  brume: "text-brume",
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
        "font-inscr text-[10px] uppercase tracking-[0.32em]",
        colorClass[color],
        className,
      )}
    >
      {children}
    </span>
  );
}
