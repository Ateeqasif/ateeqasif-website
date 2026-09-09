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
  title: siteSettings.defaultSeo.title,
  description: siteSettings.defaultSeo.description,
};

export default function HomePage() {
  const businesses = getAllBusinesses();

  return (
    <>
      <JsonLd data={personSchema()} />

      <Hero
        eyebrow="Founder • Owner • Investor"
        headline="Building a portfolio of companies, not just one business."
        supportingCopy={`I'm Ateeq Asif—a Lahore-based entrepreneur, business owner, and investor. I co-own and help lead five companies across software, business transformation, design, renewable energy, and industry advocacy.`}
        primaryCta={{ label: ctaCopy.primary, href: "/contact" }}
        secondaryCta={{ label: ctaCopy.secondary, href: "/businesses" }}
        credibilityLine={`Co-Founder & COO, ZAPTA Technologies  •  Co-Founder & CEO, Sync4Tech  •  ${siteSettings.locationLabel}`}
        portrait={{
          src: "/images/portraits/hero-portrait.jpg",
          alt: `Portrait of ${siteSettings.name}`,
        }}
      />

      {/* Perspective */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionIntro
            label="How I Work"
            headline="A business becomes a real asset once it can run without you in every decision."
            body="I don't run one company — I own a small portfolio of them, each led by capable people, connected by the same operating discipline: clear ownership, measurable systems, and enough structure that growth doesn't depend on any single person, including me."
          />
        </Container>
      </section>

      {/* Businesses */}
      <section className="border-y border-white/10 bg-surface/50 py-20 sm:py-24">
        <Container>
          <SectionIntro
            label="My Businesses"
            headline="Five companies, one operating philosophy."
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

      {/* Owner statement */}
      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <PullQuote>
            Diversifying across a few well-chosen businesses is safer than betting everything on
            one—as long as each has real ownership and real systems.
          </PullQuote>
          <p className="prose-measure mt-6 text-lg leading-relaxed text-fg-secondary">
            I believe an owner&rsquo;s job is to build the structures that let good decisions
            repeat without them — across every business, not just one.
          </p>
        </Container>
      </section>

      <CtaBand
        headline="Building something ambitious—or exploring a partnership or investment?"
        body="If it involves technology, business transformation, design, energy, or building Pakistan's tech ecosystem, I'm open to a focused conversation."
        primaryCta={{ label: ctaCopy.primary, href: "/contact" }}
        secondaryCta={{ label: ctaCopy.linkedin, href: siteSettings.social.linkedin, external: true }}
      />
    </>
  );
}
