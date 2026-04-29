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
