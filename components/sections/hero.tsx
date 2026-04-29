import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";
import { Hairline } from "@/components/ui/hairline";
import { Button } from "@/components/ui/button";

type Cta = { label: string; href: string };

export function Hero({
  eyebrow,
  title,
  lede,
  primaryCta,
  secondaryCta,
  ressort,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  ressort?: readonly string[];
  className?: string;
}) {
  return (
    <section className={cn("relative pt-24 pb-28 md:pt-32 md:pb-36", className)}>
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            {eyebrow && <EyebrowLabel color="or">{eyebrow}</EyebrowLabel>}
            <h1 className="mt-6 font-display text-[clamp(48px,7vw,96px)] italic leading-[0.98] text-encre">
              {title}
            </h1>
            <Hairline className="mt-9" />
            {lede && (
              <p className="mt-9 max-w-2xl text-xl leading-[1.6] text-ardoise">
                {lede}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                {primaryCta && (
                  <Button href={primaryCta.href}>{primaryCta.label}</Button>
                )}
                {secondaryCta && (
                  <Button variant="text" href={secondaryCta.href}>
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>

          {ressort && ressort.length > 0 && (
            <aside className="border-l border-hairline-or pl-8 lg:col-span-4 lg:pl-10">
              <EyebrowLabel color="brume">Ressort</EyebrowLabel>
              <ul className="mt-5 space-y-2.5 font-display text-lg italic text-encre-soft">
                {ressort.map((lieu) => (
                  <li key={lieu} className="flex items-baseline gap-3">
                    <span
                      aria-hidden="true"
                      className="h-px w-3 flex-shrink-0 translate-y-[-0.4em] bg-or"
                    />
                    {lieu}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </Container>
    </section>
  );
}
