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
    <header className={cn("pt-14 pb-10 md:pt-20 md:pb-14", className)}>
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
              "mt-4 font-display text-[clamp(40px,6vw,72px)] italic leading-[1.05] text-encre",
            )}
          >
            {title}
          </h1>
          <Hairline className={cn("mt-6", isCenter && "mx-auto")} />
          {lede && (
            <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-ardoise">
              {lede}
            </p>
          )}
        </div>
      </Container>
    </header>
  );
}
