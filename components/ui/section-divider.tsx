import { cn } from "@/lib/cn";

export function SectionDivider({
  ornament = "·",
  className,
}: {
  ornament?: string;
  className?: string;
}) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={cn("mt-20 mb-[50px] flex items-center gap-5", className)}
    >
      <span className="h-px flex-1 bg-hairline" />
      <span className="font-display text-2xl italic text-or">{ornament}</span>
      <span className="h-px flex-1 bg-hairline" />
    </div>
  );
}
