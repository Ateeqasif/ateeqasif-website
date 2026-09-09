import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { BusinessSkyline } from "@/components/ui/graphics/BusinessSkyline";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { getAllBusinesses } from "@/lib/businesses";

export const metadata: Metadata = {
  title: "Businesses — Ateeq Asif",
  description:
    "The five companies Ateeq Asif collaborates on and co-founded, across software, business transformation, design, renewable energy, and industry advocacy.",
};

export default function BusinessesPage() {
  const businesses = getAllBusinesses();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Businesses", href: "/businesses" }])} />

      <section className="relative overflow-hidden border-b border-white/10 py-16 sm:py-20">
        <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 top-0 h-full" />
        <Container className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Businesses" }]} />
            <Eyebrow>Businesses</Eyebrow>
            <h1 className="text-balance mt-4 max-w-3xl text-4xl font-semibold text-fg sm:text-5xl">
              A network built around collaboration, not job titles.
            </h1>
            <p className="prose-measure mt-6 text-lg leading-relaxed text-fg-secondary">
              I collaborate with five companies spanning software, business transformation,
              design, renewable energy, and industry advocacy. Each one addresses a different need
              for a different community — the thread connecting them is how I work: creating
              opportunities, facilitating capable teams, and contributing to a more sustainable,
              connected society.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="animate-float absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-a/30 to-accent-b/30 blur-2xl"
            />
            <div className="glass gradient-border relative aspect-square w-full overflow-hidden rounded-2xl p-6">
              <BusinessSkyline className="h-full w-full" />
            </div>
          </div>
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
