import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CtaLink } from "@/components/ui/CtaLink";
import { Portrait3D } from "@/components/ui/Portrait3D";

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
    <section className="relative overflow-hidden border-b border-white/10 bg-bg">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 top-0 h-[38rem]" />
      <div
        aria-hidden="true"
        className="animate-pulse-slow pointer-events-none absolute -top-32 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-accent-b/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="animate-pulse-slow pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-accent-a/20 blur-[100px]"
      />

      <Container className="relative grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-balance mt-5 text-4xl font-semibold text-fg sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            {headline}
          </h1>
          <p className="prose-measure mt-6 text-lg leading-relaxed text-fg-secondary">
            {supportingCopy}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {primaryCta && <CtaLink href={primaryCta.href}>{primaryCta.label}</CtaLink>}
              {secondaryCta && (
                <CtaLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </CtaLink>
              )}
            </div>
          )}

          {credibilityLine && (
            <p className="mt-9 text-sm font-medium text-fg-tertiary">{credibilityLine}</p>
          )}
        </div>

        {portrait && <Portrait3D src={portrait.src} alt={portrait.alt} />}
      </Container>
    </section>
  );
}
