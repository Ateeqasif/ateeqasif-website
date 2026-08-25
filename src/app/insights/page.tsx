import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { InsightCard } from "@/components/ui/InsightCard";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { getInsightCategories, getPublishedInsights } from "@/lib/insights";
import { siteSettings } from "@/content/site";

export const metadata: Metadata = {
  title: "Insights on AI, Leadership & Scale — Ateeq Asif",
  description:
    "Articles and founder perspectives on AI, automation, leadership, business scale, data, and execution.",
};

const categories = [
  "Founder & Leadership",
  "AI & Automation",
  "Business Scale",
  "Data & Decisions",
  "Strategy & Execution",
  "Pakistan & Global Technology",
];

export default function InsightsArchivePage() {
  const insights = getPublishedInsights();
  const activeCategories = getInsightCategories();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }])} />

      <section className="border-b border-white/10 py-16 sm:py-20">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
          <Eyebrow>Insights</Eyebrow>
          <h1 className="text-balance mt-4 max-w-3xl text-4xl font-semibold text-fg sm:text-5xl">
            Ideas for founders and leaders building more intelligent, scalable organizations.
          </h1>
          <p className="prose-measure mt-6 text-lg leading-relaxed text-fg-secondary">
            Notes and longer-form perspectives on founder evolution, AI adoption, business
            automation, data, leadership, organizational systems, and execution.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <li
                key={category}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                  activeCategories.includes(category)
                    ? "border-accent-a/40 text-accent-a"
                    : "border-white/10 text-fg-tertiary"
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="sr-only">All insights</h2>
          {insights.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {insights.map((insight) => (
                <InsightCard key={insight.slug} insight={insight} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-surface/50 p-10 text-center">
              <p className="text-lg font-medium text-fg">
                New perspectives are being prepared. Connect on LinkedIn in the meantime.
              </p>
              <a
                href={siteSettings.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-accent-a hover:text-fg"
              >
                Connect on LinkedIn
              </a>
            </div>
          )}
        </Container>
      </section>

      <section className="border-t border-white/10 bg-surface/50 py-16 sm:py-20">
        <Container className="max-w-xl">
          <h2 className="text-xl font-semibold text-fg">Get New Insights</h2>
          <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
            New perspectives will arrive only when there is something worth sharing.
          </p>
          <div className="mt-5">
            <NewsletterForm />
          </div>
        </Container>
      </section>
    </>
  );
}
