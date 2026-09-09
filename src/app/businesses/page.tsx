import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { getAllBusinesses } from "@/lib/businesses";

export const metadata: Metadata = {
  title: "Businesses — Ateeq Asif",
  description:
    "The five companies Ateeq Asif owns and co-founded, across software, business transformation, design, renewable energy, and industry advocacy.",
};

export default function BusinessesPage() {
  const businesses = getAllBusinesses();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Businesses", href: "/businesses" }])} />

      <section className="border-b border-white/10 py-16 sm:py-20">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Businesses" }]} />
          <Eyebrow>Businesses</Eyebrow>
          <h1 className="text-balance mt-4 max-w-3xl text-4xl font-semibold text-fg sm:text-5xl">
            A portfolio built around ownership, not job titles.
          </h1>
          <p className="prose-measure mt-6 text-lg leading-relaxed text-fg-secondary">
            I own and help lead five companies spanning software, business transformation,
            design, renewable energy, and industry advocacy. Each one solves a different problem
            for a different market — the thread connecting them is how I build: clear ownership,
            accountable teams, and systems that don&rsquo;t depend on me being in the room.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="sr-only">All businesses</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {businesses.map((business) => (
              <BusinessCard key={business.slug} business={business} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
