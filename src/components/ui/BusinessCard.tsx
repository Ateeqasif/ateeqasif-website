import { ArrowUpRight } from "lucide-react";
import type { Business } from "@/lib/types";

export function BusinessCard({ business }: { business: Business }) {
  return (
    <article className="glass glass-hover flex flex-col rounded-2xl p-8">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-a">
          {business.role}
        </p>
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-fg-tertiary">
          {business.category}
        </span>
      </div>
      <h3 className="mt-3 text-2xl font-semibold text-fg">{business.name}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-fg-secondary">{business.summary}</p>

      {business.focusTags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {business.focusTags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-fg-secondary"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex items-center gap-4 text-xs text-fg-tertiary">
        {business.founded && <span>Founded {business.founded}</span>}
        {business.location && <span>{business.location}</span>}
      </div>

      {business.url ? (
        <a
          href={business.url}
          target="_blank"
          rel="noopener noreferrer"
          data-event="business_outbound_click"
          data-business={business.slug}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-a hover:text-fg"
        >
          {`Visit ${business.name}`}
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      ) : (
        <p className="mt-6 text-xs font-medium text-fg-tertiary">Website coming soon.</p>
      )}
    </article>
  );
}
