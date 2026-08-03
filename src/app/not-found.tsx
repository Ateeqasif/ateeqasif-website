import { Container } from "@/components/ui/Container";
import { CtaLink } from "@/components/ui/CtaLink";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-strong">404</p>
        <h1 className="text-balance mt-4 text-3xl font-semibold text-ink sm:text-4xl">
          This page has moved—or never became part of the plan.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate">
          Let&rsquo;s get you back to the ideas, ventures, and work that matter.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaLink href="/">Return Home</CtaLink>
        </div>
      </Container>
    </section>
  );
}
