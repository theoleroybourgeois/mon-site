import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";
import { Hairline } from "@/components/ui/hairline";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type AudienceItem = {
  tag: string;
  title: string;
  body: string;
  cta?: { label: string; href: string };
};

export function AudienceGrid({
  eyebrow,
  title,
  lede,
  items,
  className,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  lede?: React.ReactNode;
  items: readonly AudienceItem[];
  className?: string;
}) {
  return (
    <section className={cn("py-24 md:py-28", className)}>
      <Container>
        {(eyebrow || title || lede) && (
          <header className="mb-14 max-w-2xl">
            {eyebrow && <EyebrowLabel color="or">{eyebrow}</EyebrowLabel>}
            {title && (
              <h2 className="mt-5 font-display text-[clamp(32px,4.5vw,52px)] italic leading-[1.1] text-encre">
                {title}
              </h2>
            )}
            <Hairline className="mt-6" />
            {lede && (
              <p className="mt-6 text-base leading-[1.65] text-ardoise">
                {lede}
              </p>
            )}
          </header>
        )}
        <ul className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.tag} className="bg-parchemin">
              <Card className="flex h-full flex-col border-0 bg-transparent">
                <EyebrowLabel color="or">{item.tag}</EyebrowLabel>
                <h3 className="mt-4 font-display text-2xl italic text-encre">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-[1.65] text-ardoise">
                  {item.body}
                </p>
                {item.cta && (
                  <div className="mt-6">
                    <Button variant="text" href={item.cta.href}>
                      {item.cta.label}
                    </Button>
                  </div>
                )}
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
