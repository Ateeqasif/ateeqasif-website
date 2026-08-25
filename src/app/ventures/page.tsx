import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { VentureCard } from "@/components/ui/VentureCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { getPublishedVentures } from "@/lib/ventures";

export const metadata: Metadata = {
  title: "Ventures & Companies — Ateeq Asif",
  description:
    "Explore the technology companies and purpose-led initiatives Ateeq Asif helps build and lead.",
};

export default function VenturesPage() {
  const ventures = getPublishedVentures();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Ventures", href: "/ventures" }])} />

      <section className="border-b border-white/10 py-16 sm:py-20">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Ventures" }]} />
          <Eyebrow>Ventures</Eyebrow>
          <h1 className="text-balance mt-4 max-w-3xl text-4xl font-semibold text-fg sm:text-5xl">
            Ventures built around technology, execution, and long-term value.
          </h1>
          <p className="prose-measure mt-6 text-lg leading-relaxed text-fg-secondary">
            My work spans technology companies and purpose-led initiatives. Across them, the
            common thread is building useful systems, capable teams, and organizations prepared
            to grow responsibly.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="sr-only">Primary ventures</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {ventures.map((venture) => (
              <VentureCard key={venture.slug} venture={venture} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
