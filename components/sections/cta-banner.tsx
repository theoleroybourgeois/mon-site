import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";
import { Hairline } from "@/components/ui/hairline";
import { Button } from "@/components/ui/button";

type Cta = { label: string; href: string };

export function CTABanner({
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  primaryCta: Cta;
  secondaryCta?: Cta;
  className?: string;
}) {
  return (
    <section className={cn("relative bg-encre py-24 md:py-28", className)}>
      <Container>
        <div className="grid items-end gap-14 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            {eyebrow && <EyebrowLabel color="or">{eyebrow}</EyebrowLabel>}
            <h2 className="mt-5 font-display text-[clamp(36px,5vw,60px)] italic leading-[1.05] text-parchemin">
              {title}
            </h2>
            <Hairline className="mt-7" />
            {body && (
              <p className="mt-7 max-w-xl text-base leading-[1.65] text-parchemin/80">
                {body}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:col-span-5 md:justify-end">
            <Button variant="gold" href={primaryCta.href}>
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                variant="text"
                href={secondaryCta.href}
                className="text-parchemin"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
