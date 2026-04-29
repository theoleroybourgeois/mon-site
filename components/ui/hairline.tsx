import { cn } from "@/lib/cn";

export function Hairline({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("block h-px w-[60px] bg-or", className)}
    />
  );
}
