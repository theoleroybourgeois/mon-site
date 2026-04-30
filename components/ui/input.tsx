import { cn } from "@/lib/cn";

const fieldBase =
  "w-full border-0 border-b border-hairline bg-transparent py-2 font-body text-base text-encre placeholder:italic placeholder:text-brume focus:border-or focus:outline-none transition-colors";

export function FormField({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("flex flex-col gap-1.5", className)}
    >
      <span className="font-inscr text-[10px] uppercase tracking-[0.22em] text-brume">
        {label}
      </span>
      {children}
    </label>
  );
}

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(fieldBase, className)} />;
}

export function Textarea({
  className,
  rows = 5,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={rows}
      className={cn(fieldBase, "resize-none", className)}
    />
  );
}

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        {...props}
        className={cn(
          fieldBase,
          "appearance-none pr-8 bg-transparent",
          className,
        )}
      >
        {children}
      </select>
      <span
        aria-hidden
        className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-or"
      >
        ▾
      </span>
    </div>
  );
}

export function Checkbox({
  label,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: React.ReactNode }) {
  return (
    <label className={cn("flex items-start gap-3 cursor-pointer", className)}>
      <input
        type="checkbox"
        {...props}
        className="mt-1 h-4 w-4 flex-shrink-0 appearance-none border border-hairline bg-transparent checked:border-or checked:bg-or focus:outline-none focus:ring-1 focus:ring-or"
      />
      <span className="text-sm leading-[1.55] text-ardoise">{label}</span>
    </label>
  );
}
