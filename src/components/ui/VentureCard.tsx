import { ArrowUpRight } from "lucide-react";
import type { Venture } from "@/lib/types";

export function VentureCard({ venture }: { venture: Venture }) {
  return (
    <article className="glass glass-hover flex flex-col rounded-2xl p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-a">
        {venture.role}
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-fg">{venture.name}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-fg-secondary">{venture.summary}</p>

      {venture.focusTags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {venture.focusTags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-fg-secondary"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {venture.url ? (
        <a
          href={venture.url}
          target="_blank"
          rel="noopener noreferrer"
          data-event="venture_outbound_click"
          data-venture={venture.slug}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-a hover:text-fg"
        >
          {venture.ctaLabel ?? `Visit ${venture.name}`}
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      ) : (
        <p className="mt-6 text-xs font-medium text-fg-tertiary">
          Destination URL pending confirmation.
        </p>
      )}
    </article>
  );
}
