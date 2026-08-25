import { ArrowUpRight } from "lucide-react";
import type { Appearance } from "@/lib/types";

export function AppearanceCard({ appearance }: { appearance: Appearance }) {
  return (
    <article className="glass glass-hover rounded-2xl p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-a">
        {appearance.publisher}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-fg">{appearance.title}</h3>
      <p className="mt-1 text-sm font-medium text-fg-tertiary">{appearance.format}</p>
      <p className="mt-3 text-sm leading-relaxed text-fg-secondary">{appearance.summary}</p>

      {!appearance.confirmed && appearance.pendingFields && (
        <p className="mt-3 text-xs font-medium text-fg-tertiary">
          Pending confirmation: {appearance.pendingFields.join(", ")}.
        </p>
      )}

      {appearance.externalUrl && (
        <a
          href={appearance.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-a hover:text-fg"
        >
          View source
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      )}
    </article>
  );
}
