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
    <section className="bg-ink text-paper">
      <Container className="flex flex-col items-start gap-6 py-20 sm:py-24">
        <h2 className="text-balance max-w-2xl text-3xl font-semibold sm:text-4xl">{headline}</h2>
        {body && <p className="max-w-xl text-lg text-slate-soft">{body}</p>}
        <div className="flex flex-wrap items-center gap-4">
          <Link_ {...primaryCta} primary />
          {secondaryCta && <Link_ {...secondaryCta} />}
        </div>
      </Container>
    </section>
  );
}

function Link_({
  label,
  href,
  external,
  primary,
}: {
  label: string;
  href: string;
  external?: boolean;
  primary?: boolean;
}) {
  return (
    <CtaLink
      href={href}
      external={external}
      variant={primary ? "primary" : "secondary"}
      className={
        primary
          ? "!bg-paper !text-ink hover:!bg-accent-soft"
          : "!border-paper/40 !text-paper hover:!border-paper hover:!bg-paper/10"
      }
    >
      {label}
    </CtaLink>
  );
}
