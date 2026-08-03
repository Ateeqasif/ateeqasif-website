import { ArrowUpRight } from "lucide-react";
import type { Venture } from "@/lib/types";

export function VentureCard({ venture }: { venture: Venture }) {
  return (
    <article className="flex flex-col rounded-2xl border border-paper-line bg-white/60 p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-strong">
        {venture.role}
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-ink">{venture.name}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">{venture.summary}</p>

      {venture.focusTags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {venture.focusTags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-paper-line px-3 py-1 text-xs font-medium text-slate"
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
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong hover:text-ink"
        >
          {venture.ctaLabel ?? `Visit ${venture.name}`}
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      ) : (
        <p className="mt-6 text-xs font-medium text-slate-soft">
          Destination URL pending confirmation.
        </p>
      )}
    </article>
  );
}
