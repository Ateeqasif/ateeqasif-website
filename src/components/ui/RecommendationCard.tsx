import { ArrowUpRight } from "lucide-react";
import type { Recommendation } from "@/lib/types";

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
  return (
    <article className="glass glass-hover flex flex-col rounded-2xl p-8">
      <span aria-hidden="true" className="font-display text-5xl leading-none text-accent-a/40">
        &ldquo;
      </span>
      <blockquote className="mt-2 flex-1 text-base leading-relaxed text-fg">
        {recommendation.excerpt}
      </blockquote>

      <div className="mt-6 flex items-start gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-a to-accent-b text-sm font-semibold text-bg"
        >
          {getInitials(recommendation.name)}
        </span>
        <div>
          <p className="text-sm font-semibold text-fg">{recommendation.name}</p>
          <p className="mt-0.5 text-xs leading-relaxed text-fg-secondary">
            {recommendation.title}
          </p>
          <p className="mt-1 text-xs font-medium text-fg-tertiary">
            {recommendation.relationship}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-medium text-fg-tertiary">{recommendation.sourceLabel}</span>
        <a
          href={recommendation.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-a hover:text-fg"
        >
          View LinkedIn profile
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
    </article>
  );
}
