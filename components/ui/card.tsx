import { cn } from "@/lib/cn";
import { EyebrowLabel } from "./eyebrow-label";

type Variant = "simple" | "elegant";

export function Card({
  children,
  tag,
  variant = "simple",
  className,
}: {
  children: React.ReactNode;
  tag?: string;
  variant?: Variant;
  className?: string;
}) {
  const isElegant = variant === "elegant";
  return (
    <div
      className={cn(
        "relative bg-albatre-pure px-7 py-8",
        "border border-hairline",
        isElegant &&
          "before:absolute before:left-2 before:top-2 before:h-[18px] before:w-[18px] before:border-l before:border-t before:border-or after:absolute after:bottom-2 after:right-2 after:h-[18px] after:w-[18px] after:border-b after:border-r after:border-or",
        className,
      )}
    >
      {tag && (
        <EyebrowLabel color="or" className="mb-3 block">
          {tag}
        </EyebrowLabel>
      )}
      {children}
    </div>
  );
}
