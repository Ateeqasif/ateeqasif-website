import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CtaLink } from "@/components/ui/CtaLink";

type HeroProps = {
  eyebrow: string;
  headline: string;
  supportingCopy: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  credibilityLine?: string;
  portrait?: { src: string; alt: string };
};

export function Hero({
  eyebrow,
  headline,
  supportingCopy,
  primaryCta,
  secondaryCta,
  credibilityLine,
  portrait,
}: HeroProps) {
  return (
    <section className="border-b border-paper-line bg-paper">
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-balance mt-4 text-4xl font-semibold text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            {headline}
          </h1>
          <p className="prose-measure mt-6 text-lg leading-relaxed text-slate">
            {supportingCopy}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {primaryCta && <CtaLink href={primaryCta.href}>{primaryCta.label}</CtaLink>}
              {secondaryCta && (
                <CtaLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </CtaLink>
              )}
            </div>
          )}

          {credibilityLine && (
            <p className="mt-8 text-sm font-medium text-slate">{credibilityLine}</p>
          )}
        </div>

        {portrait && (
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-paper-soft">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              fill
              sizes="(min-width: 1024px) 24rem, 80vw"
              className="object-cover"
              priority
            />
          </div>
        )}
      </Container>
    </section>
  );
}
