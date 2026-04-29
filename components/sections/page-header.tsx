import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";
import { Hairline } from "@/components/ui/hairline";

export function PageHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <header className={cn("pt-20 pb-16 md:pt-28 md:pb-20", className)}>
      <Container>
        <div
          className={cn(
            "max-w-3xl",
            isCenter && "mx-auto text-center",
          )}
        >
          {eyebrow && <EyebrowLabel color="or">{eyebrow}</EyebrowLabel>}
          <h1
            className={cn(
              "mt-5 font-display text-[clamp(40px,6vw,72px)] italic leading-[1.05] text-encre",
            )}
          >
            {title}
          </h1>
          <Hairline className={cn("mt-7", isCenter && "mx-auto")} />
          {lede && (
            <p className="mt-7 max-w-2xl text-lg leading-[1.6] text-ardoise">
              {lede}
            </p>
          )}
        </div>
      </Container>
    </header>
  );
}
