import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Insight, InsightFrontmatter } from "@/lib/types";

const INSIGHTS_DIR = path.join(process.cwd(), "src/content/insights");

function readAll(): Insight[] {
  const files = fs.readdirSync(INSIGHTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(INSIGHTS_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const frontmatter = data as InsightFrontmatter;

    return {
      ...frontmatter,
      content,
      readingTime: readingTime(content).text,
    };
  });
}

/** Every insight, published or draft — used for admin/preview and slug lookups. */
export function getAllInsights(): Insight[] {
  return readAll().sort((a, b) => (a.title > b.title ? 1 : -1));
}

/** Public listing: production-visible insights only, newest first. */
export function getPublishedInsights(): Insight[] {
  return getAllInsights()
    .filter((i) => i.published && i.date)
    .sort((a, b) => (a.date! < b.date! ? 1 : -1));
}

export function getFeaturedInsights(): Insight[] {
  return getPublishedInsights().filter((i) => i.featured);
}

export function getInsightBySlug(slug: string): Insight | undefined {
  return getAllInsights().find((i) => i.slug === slug);
}

export function getRelatedInsights(insight: Insight, limit = 3): Insight[] {
  return getPublishedInsights()
    .filter((i) => i.slug !== insight.slug)
    .filter((i) => i.category === insight.category || i.tags.some((t) => insight.tags.includes(t)))
    .slice(0, limit);
}

export function getInsightCategories(): string[] {
  const categories = new Set(getPublishedInsights().map((i) => i.category));
  return Array.from(categories);
}

/**
 * The four titles named explicitly in the approved homepage copy (spec
 * section 3, "Featured insights"). Shown regardless of publish status so the
 * approved copy renders as written, but flagged as drafts in the UI until
 * the underlying articles are approved and published.
 */
const HOMEPAGE_FEATURED_SLUGS = [
  "startup-founders-should-be-visionaries-not-operators",
  "moving-from-legacy-systems-to-automated-intelligent-systems",
  "how-pakistani-tech-founders-can-position-their-companies-globally",
  "scaling-from-10-to-100-employees",
];

export function getHomepageFeaturedInsights(): Insight[] {
  const all = getAllInsights();
  return HOMEPAGE_FEATURED_SLUGS.map((slug) => all.find((i) => i.slug === slug)).filter(
    (i): i is Insight => Boolean(i)
  );
}
