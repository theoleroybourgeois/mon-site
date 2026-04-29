import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";
import { Hairline } from "@/components/ui/hairline";

export type ValueItem = {
  titre: string;
  description: string;
};

export function ValuesList({
  eyebrow,
  title,
  lede,
  items,
  className,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  lede?: React.ReactNode;
  items: readonly ValueItem[];
  className?: string;
}) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            {eyebrow && <EyebrowLabel color="or">{eyebrow}</EyebrowLabel>}
            {title && (
              <h2 className="mt-4 font-display text-[clamp(32px,4.5vw,52px)] italic leading-[1.1] text-encre">
                {title}
              </h2>
            )}
            <Hairline className="mt-6" />
            {lede && (
              <p className="mt-5 text-base leading-[1.65] text-ardoise">
                {lede}
              </p>
            )}
          </header>
          <ol className="lg:col-span-8">
            {items.map((item, i) => (
              <li
                key={item.titre}
                className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 border-t border-hairline py-7 first:border-t-0 first:pt-0 last:pb-0"
              >
                <span className="pt-1 font-mono text-[12px] tracking-[0.2em] text-or-fonce">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl italic leading-[1.2] text-encre">
                  {item.titre}
                </h3>
                <p className="col-start-2 max-w-2xl text-base leading-[1.7] text-ardoise">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
