import { Container } from "@/components/ui/Container";
import { CtaLink } from "@/components/ui/CtaLink";

type CtaBandProps = {
  headline: string;
  body?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string; external?: boolean };
};

export function CtaBand({ headline, body, primaryCta, secondaryCta }: CtaBandProps) {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 max-w-3xl bg-gradient-to-r from-accent-a/25 to-accent-b/25 blur-[100px]"
      />
      <Container className="relative flex flex-col items-start gap-6 py-20 sm:py-24">
        <h2 className="text-balance max-w-2xl text-3xl font-semibold text-fg sm:text-4xl">
          {headline}
        </h2>
        {body && <p className="max-w-xl text-lg text-fg-secondary">{body}</p>}
        <div className="flex flex-wrap items-center gap-4">
          <CtaLink href={primaryCta.href}>{primaryCta.label}</CtaLink>
          {secondaryCta && (
            <CtaLink href={secondaryCta.href} variant="secondary" external={secondaryCta.external}>
              {secondaryCta.label}
            </CtaLink>
          )}
        </div>
      </Container>
    </section>
  );
}
