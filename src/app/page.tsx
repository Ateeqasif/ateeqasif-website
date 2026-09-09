import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { PullQuote } from "@/components/ui/PullQuote";
import { CtaBand } from "@/components/ui/CtaBand";
import { CtaLink } from "@/components/ui/CtaLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/structured-data";
import { getAllBusinesses } from "@/lib/businesses";
import { siteSettings, ctaCopy } from "@/content/site";

export const metadata: Metadata = {
  description: siteSettings.defaultSeo.description,
};

export default function HomePage() {
  const businesses = getAllBusinesses();

  return (
    <>
      <JsonLd data={personSchema()} />

      <Hero
        eyebrow="Collaboration • Opportunity • Community"
        headline="Creating opportunities through collaboration, not just building one business."
        supportingCopy={`I am Ateeq Asif, a Lahore-based entrepreneur who believes in collaboration over control. I work alongside teams across software, business transformation, design, renewable energy, and industry advocacy, creating opportunities and contributing to a more sustainable society.`}
        primaryCta={{ label: ctaCopy.primary, href: "/contact" }}
        secondaryCta={{ label: ctaCopy.secondary, href: "/businesses" }}
        credibilityLine={`Co-Founder & COO, ZAPTA Technologies  •  Co-Founder & CEO, Sync4Tech  •  ${siteSettings.locationLabel}`}
        portrait={{
          src: "/images/portraits/hero-portrait-cutout.png",
          alt: `Portrait of ${siteSettings.name}`,
        }}
      />

      {/* Perspective */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionIntro
            label="How I Work"
            headline="Real impact comes from collaboration, not control."
            body="I do not work alone. I collaborate with capable teams across five ventures, each connected by the same approach: creating opportunities, facilitating the people closest to the work, and contributing to something bigger than any single business."
          />
        </Container>
      </section>

      {/* Businesses */}
      <section className="border-y border-white/10 bg-surface/50 py-20 sm:py-24">
        <Container>
          <SectionIntro
            label="My Businesses"
            headline="Five collaborations, one shared purpose."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {businesses.map((business) => (
              <BusinessCard key={business.slug} business={business} />
            ))}
          </div>
          <div className="mt-10">
            <CtaLink href="/businesses" variant="ghost">
              View All Businesses
            </CtaLink>
          </div>
        </Container>
      </section>

      {/* Collaboration statement */}
      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <PullQuote>
            Real impact happens when people, ideas, and opportunities come together, not when one
            person tries to do it all.
          </PullQuote>
          <p className="prose-measure mt-6 text-lg leading-relaxed text-fg-secondary">
            I believe my role is to create opportunities, facilitate strong teams, and contribute
            to something that outlasts any one business, building toward a more sustainable,
            connected society.
          </p>
        </Container>
      </section>

      <CtaBand
        headline="Exploring a collaboration, partnership, or opportunity to build together?"
        body="If it involves technology, business transformation, design, energy, or building Pakistan's tech ecosystem, I'm open to a focused conversation."
        primaryCta={{ label: ctaCopy.primary, href: "/contact" }}
        secondaryCta={{ label: ctaCopy.linkedin, href: siteSettings.social.linkedin, external: true }}
      />
    </>
  );
}
