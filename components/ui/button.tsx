import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "gold" | "text";

const base =
  "inline-flex items-center justify-center gap-3 font-inscr text-[11px] uppercase tracking-[0.3em] transition-all duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-encre px-[30px] py-3.5 text-parchemin hover:bg-sceau hover:tracking-[0.36em]",
  secondary:
    "border border-encre px-[30px] py-3.5 text-encre hover:bg-encre hover:text-parchemin",
  gold: "bg-or px-[30px] py-3.5 text-albatre hover:bg-or-fonce",
  text: "relative pb-1 text-encre after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-100 after:bg-or after:transition-transform after:duration-[400ms] hover:after:scale-x-[0.6]",
};

type CommonProps = {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
};

type AsLink = CommonProps & { href: string };
type AsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", className, children } = props;
  const cls = cn(base, variantClass[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as AsButton;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
