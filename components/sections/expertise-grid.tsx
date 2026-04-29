import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";
import { Hairline } from "@/components/ui/hairline";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type ExpertiseItem = {
  numero: string;
  tag: string;
  titre: string;
  resume: string;
  href: string;
  ctaLabel?: string;
};

export function ExpertiseGrid({
  eyebrow,
  title,
  lede,
  items,
  className,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  lede?: React.ReactNode;
  items: readonly ExpertiseItem[];
  className?: string;
}) {
  return (
    <section className={cn("py-24 md:py-32", className)}>
      <Container>
        {(eyebrow || title || lede) && (
          <header className="mb-16 max-w-2xl">
            {eyebrow && <EyebrowLabel color="or">{eyebrow}</EyebrowLabel>}
            {title && (
              <h2 className="mt-5 font-display text-[clamp(36px,5vw,60px)] italic leading-[1.05] text-encre">
                {title}
              </h2>
            )}
            <Hairline className="mt-7" />
            {lede && (
              <p className="mt-7 text-lg leading-[1.6] text-ardoise">
                {lede}
              </p>
            )}
          </header>
        )}
        <ul className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.tag}>
              <Card variant="elegant" className="flex h-full flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-or">
                  {item.numero}
                </span>
                <EyebrowLabel color="brume" className="mt-2 block">
                  {item.tag}
                </EyebrowLabel>
                <h3 className="mt-5 font-display text-3xl italic leading-[1.15] text-encre">
                  {item.titre}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-[1.65] text-ardoise">
                  {item.resume}
                </p>
                <div className="mt-7">
                  <Button variant="text" href={item.href}>
                    {item.ctaLabel ?? "Lire la fiche"}
                  </Button>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
