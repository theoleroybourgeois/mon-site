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
  media,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  ressort?: readonly string[];
  media?: React.ReactNode;
  className?: string;
}) {
  const hasMedia = Boolean(media);

  return (
    <section className={cn("relative pt-16 pb-20 md:pt-20 md:pb-24", className)}>
      <Container>
        <div
          className={cn(
            "grid gap-10 lg:gap-12",
            hasMedia ? "lg:grid-cols-12 lg:gap-14" : "lg:grid-cols-12",
          )}
        >
          {hasMedia && (
            <div className="lg:col-span-5 lg:order-first">{media}</div>
          )}

          <div className={cn(hasMedia ? "lg:col-span-7" : "lg:col-span-8")}>
            {eyebrow && <EyebrowLabel color="or">{eyebrow}</EyebrowLabel>}
            <h1 className="mt-5 font-display text-[clamp(48px,7vw,96px)] italic leading-[0.98] text-encre">
              {title}
            </h1>
            <Hairline className="mt-7" />
            {lede && (
              <p className="mt-6 max-w-2xl text-xl leading-[1.6] text-ardoise">
                {lede}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
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

            {hasMedia && ressort && ressort.length > 0 && (
              <div className="mt-10 border-t border-hairline-or pt-6">
                <EyebrowLabel color="encre">Ressort</EyebrowLabel>
                <ul className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-2 font-display italic text-encre-soft">
                  {ressort.map((lieu, i) => (
                    <li key={lieu} className="flex items-baseline gap-5">
                      {i > 0 && (
                        <span
                          aria-hidden="true"
                          className="h-px w-3 bg-or"
                        />
                      )}
                      <span>{lieu}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {!hasMedia && ressort && ressort.length > 0 && (
            <aside className="border-l border-hairline-or pl-8 lg:col-span-4 lg:pl-10">
              <EyebrowLabel color="encre">Ressort</EyebrowLabel>
              <ul className="mt-4 space-y-2.5 font-display text-lg italic text-encre-soft">
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
