import { InsightCard } from "@/components/ui/InsightCard";
import type { Insight } from "@/lib/types";

export function RelatedInsights({ insights }: { insights: Insight[] }) {
  if (insights.length === 0) return null;

  return (
    <section aria-labelledby="related-insights-heading">
      <h2 id="related-insights-heading" className="text-2xl font-semibold text-ink">
        Related Insights
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight) => (
          <InsightCard key={insight.slug} insight={insight} />
        ))}
      </div>
    </section>
  );
}
