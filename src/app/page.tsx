import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ExpertiseCard } from "@/components/ui/ExpertiseCard";
import { VentureCard } from "@/components/ui/VentureCard";
import { InsightCard } from "@/components/ui/InsightCard";
import { PullQuote } from "@/components/ui/PullQuote";
import { CtaBand } from "@/components/ui/CtaBand";
import { CtaLink } from "@/components/ui/CtaLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/structured-data";
import { getPrimaryVentures } from "@/lib/ventures";
import { getHomepageFeaturedInsights } from "@/lib/insights";
import { siteSettings, ctaCopy } from "@/content/site";

export const metadata: Metadata = {
  title: siteSettings.defaultSeo.title,
  description: siteSettings.defaultSeo.description,
};

const expertisePillars = [
  {
    title: "AI & Business Automation",
    text: "Finding practical opportunities to reduce manual work, connect systems, improve responsiveness, and build AI-enabled operations with appropriate human oversight.",
  },
  {
    title: "Business Scale & Operating Systems",
    text: "Designing structures, processes, KPIs, accountability, and management rhythms that help organizations grow beyond founder dependency.",
  },
  {
    title: "Data-Driven Decision Making",
    text: "Turning fragmented operational data into visibility, priorities, performance signals, and more confident executive decisions.",
  },
  {
    title: "Strategy to Execution",
    text: "Translating direction into roadmaps, ownership, milestones, delivery governance, and measurable outcomes—not strategy decks that stop at recommendation.",
  },
];

export default function HomePage() {
  const ventures = getPrimaryVentures();
  const featuredInsights = getHomepageFeaturedInsights();

  return (
    <>
      <JsonLd data={personSchema()} />

      <Hero
        eyebrow="Founder • Operator • Strategist"
        headline="Building businesses that scale through strategy, systems, and intelligent technology."
        supportingCopy={`I'm Ateeq Asif—a technology entrepreneur and AI & Business Automation Strategist. I work across leadership, operations, automation, and data to turn ambitious ideas into structured, scalable organizations.`}
        primaryCta={{ label: ctaCopy.primary, href: "/contact" }}
        secondaryCta={{ label: ctaCopy.secondary, href: "/ventures" }}
        credibilityLine={`Co-Founder & COO, ZAPTA Technologies  •  Co-Founder & CEO, Sync4Tech  •  ${siteSettings.locationLabel}`}
        portrait={{
          src: "/images/portraits/hero-portrait.svg",
          alt: `Editorial portrait of ${siteSettings.name}`,
        }}
      />

      {/* Perspective */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionIntro
            label="What I Focus On"
            headline="Technology matters most when it improves how a business actually operates."
            body="My work sits between vision and execution. I help shape the direction, systems, teams, and digital capabilities required to move a business from founder-led effort to repeatable performance. That means asking the difficult questions first: What should be automated? What needs stronger ownership? Which data should guide decisions? And what must remain human?"
          />
        </Container>
      </section>

      {/* Expertise pillars */}
      <section className="border-y border-white/10 bg-surface/50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {expertisePillars.map((pillar) => (
              <ExpertiseCard key={pillar.title} title={pillar.title} text={pillar.text} />
            ))}
          </div>
          <div className="mt-10">
            <CtaLink href="/expertise" variant="ghost">
              Explore My Expertise
            </CtaLink>
          </div>
        </Container>
      </section>

      {/* Founder statement */}
      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <PullQuote>
            If a company cannot operate without the founder in every decision, it has not
            scaled—it has only grown more dependent.
          </PullQuote>
          <p className="prose-measure mt-6 text-lg leading-relaxed text-fg-secondary">
            I believe the founder&rsquo;s role must evolve: from solving every problem to
            creating clarity, developing leaders, and building systems that make good decisions
            repeatable.
          </p>
        </Container>
      </section>

      {/* Selected ventures */}
      <section className="border-y border-white/10 bg-surface/50 py-20 sm:py-24">
        <Container>
          <SectionIntro
            label="Selected Ventures"
            headline="Building and supporting organizations designed for meaningful, long-term impact."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ventures.map((venture) => (
              <VentureCard key={venture.slug} venture={venture} />
            ))}
          </div>
          <div className="mt-10">
            <CtaLink href="/ventures" variant="ghost">
              View All Ventures
            </CtaLink>
          </div>
        </Container>
      </section>

      {/* Featured insights */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionIntro
            label="Ideas & Perspectives"
            headline="What I'm learning about leadership, scale, AI, and the future of work."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredInsights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
          <div className="mt-10">
            <CtaLink href="/insights" variant="ghost">
              View All Insights
            </CtaLink>
          </div>
        </Container>
      </section>

      {/* Speaking and media */}
      <section className="border-y border-white/10 bg-surface/50 py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionIntro
            label="Speaking & Conversations"
            headline="Clear conversations about AI, leadership, and building businesses that last."
            body="I contribute to interviews, panels, leadership conversations, and business forums on practical AI adoption, agentic systems, business automation, founder evolution, and organizational scale. My aim is to make complex change understandable, realistic, and actionable."
          />
          <p className="prose-measure mt-6 text-sm font-medium text-fg-tertiary">
            Featured in a leadership conversation with Boardroom Pakistan and invited to discuss
            Artificial Intelligence and Agentic AI on Pakistan Television (PTV).
          </p>
          <div className="mt-8">
            <CtaLink href="/speaking">{ctaCopy.speaking}</CtaLink>
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Building something ambitious—or trying to make an existing business work more intelligently?"
        body="If the challenge involves strategy, scale, automation, data, or execution, I'm open to a focused conversation."
        primaryCta={{ label: ctaCopy.primary, href: "/contact" }}
        secondaryCta={{ label: ctaCopy.linkedin, href: siteSettings.social.linkedin, external: true }}
      />
    </>
  );
}
