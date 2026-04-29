import { cn } from "@/lib/cn";

export function PullQuote({
  children,
  attribution,
  className,
}: {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
}) {
  return (
    <blockquote
      className={cn(
        "my-20 max-w-[760px] border-l border-or pl-[30px] font-display italic text-encre-soft text-[clamp(22px,2.6vw,30px)] leading-[1.45]",
        className,
      )}
    >
      {children}
      {attribution && (
        <footer className="mt-5 font-inscr text-[11px] not-italic uppercase tracking-[0.28em] text-brume">
          {attribution}
        </footer>
      )}
    </blockquote>
  );
}
