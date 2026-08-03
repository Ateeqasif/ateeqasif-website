import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArticleBody } from "@/components/ui/ArticleBody";
import { AuthorBlock } from "@/components/ui/AuthorBlock";
import { RelatedInsights } from "@/components/ui/RelatedInsights";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";
import { getAllInsights, getInsightBySlug, getRelatedInsights } from "@/lib/insights";
import { ctaCopy } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllInsights().map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};

  const isLive = insight.published && insight.date;

  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: insight.canonicalUrl ? { canonical: insight.canonicalUrl } : undefined,
    robots: isLive ? undefined : { index: false, follow: false },
    openGraph: {
      type: "article",
      title: insight.title,
      description: insight.excerpt,
    },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const isLive = insight.published && insight.date;
  const related = getRelatedInsights(insight);

  return (
    <>
      {isLive && <JsonLd data={articleSchema(insight)} />}
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: insight.title, href: `/insights/${insight.slug}` },
        ])}
      />

      <article className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: insight.title }]}
          />

          {!isLive && (
            <div role="status" className="mt-6 rounded-xl border border-accent/40 bg-accent-soft/40 px-4 py-3 text-sm font-medium text-ink">
              Draft — not yet published. This page is excluded from the public archive, sitemap,
              and RSS feed.
            </div>
          )}

          <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-strong">
            <span>{insight.category}</span>
            <span aria-hidden="true">·</span>
            <span>{insight.readingTime}</span>
          </div>

          <h1 className="text-balance mt-4 text-4xl font-semibold text-ink sm:text-5xl">
            {insight.title}
          </h1>
          <p className="prose-measure mt-4 text-lg leading-relaxed text-slate">{insight.excerpt}</p>

          {insight.date && (
            <p className="mt-4 text-sm text-slate-soft">
              Published {new Date(insight.date).toLocaleDateString("en-US", { dateStyle: "long" })}
            </p>
          )}

          <div className="mt-10">
            <ArticleBody content={insight.content} />
          </div>

          <div className="mt-12">
            <AuthorBlock />
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="border-t border-paper-line bg-paper-soft/50 py-16 sm:py-20">
          <Container>
            <RelatedInsights insights={related} />
          </Container>
        </section>
      )}

      <CtaBand headline={ctaCopy.subscription} primaryCta={{ label: ctaCopy.primary, href: "/contact" }} />
    </>
  );
}
