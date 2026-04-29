import { cn } from "@/lib/cn";

type Variant = "or" | "encre" | "sceau" | "filled";

const variantClass: Record<Variant, string> = {
  or: "border-or text-or",
  encre: "border-encre text-encre",
  sceau: "border-sceau text-sceau",
  filled: "border-encre bg-encre text-parchemin",
};

export function Badge({
  children,
  variant = "or",
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-3 py-1.5 font-inscr text-[9.5px] uppercase tracking-[0.24em]",
        variantClass[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
