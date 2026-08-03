import Link from "next/link";
import type { Insight } from "@/lib/types";

export function InsightCard({ insight }: { insight: Insight }) {
  const isLive = insight.published && insight.date;

  const card = (
    <article className="flex h-full flex-col rounded-2xl border border-paper-line bg-white/60 p-7 transition-colors hover:border-accent/40">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent-strong">
        <span>{insight.category}</span>
        {!isLive && (
          <span className="rounded-full bg-paper-soft px-2 py-0.5 text-slate">Draft</span>
        )}
      </div>
      <h3 className="mt-3 text-xl font-semibold text-ink">{insight.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{insight.excerpt}</p>
      <span className="mt-5 text-sm font-semibold text-accent-strong">
        {isLive ? "Read the Insight" : "Coming soon"}
      </span>
    </article>
  );

  if (!isLive) {
    return card;
  }

  return (
    <Link href={`/insights/${insight.slug}`} className="block h-full">
      {card}
    </Link>
  );
}
