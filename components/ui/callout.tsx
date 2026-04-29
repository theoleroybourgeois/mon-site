import { cn } from "@/lib/cn";

export function Callout({
  title,
  children,
  icon,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-6 border-l border-or bg-or/[0.07] px-7 py-6",
        className,
      )}
    >
      {icon && (
        <div className="mt-1 h-7 w-7 flex-shrink-0 text-or">{icon}</div>
      )}
      <div>
        {title && (
          <p className="font-display text-lg italic text-encre">{title}</p>
        )}
        <div className="mt-1 text-sm text-ardoise">{children}</div>
      </div>
    </div>
  );
}
