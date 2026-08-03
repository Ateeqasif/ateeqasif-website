import { ArrowUpRight } from "lucide-react";
import type { Appearance } from "@/lib/types";

export function AppearanceCard({ appearance }: { appearance: Appearance }) {
  return (
    <article className="rounded-2xl border border-paper-line bg-white/60 p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-strong">
        {appearance.publisher}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-ink">{appearance.title}</h3>
      <p className="mt-1 text-sm font-medium text-slate-soft">{appearance.format}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate">{appearance.summary}</p>

      {!appearance.confirmed && appearance.pendingFields && (
        <p className="mt-3 text-xs font-medium text-slate-soft">
          Pending confirmation: {appearance.pendingFields.join(", ")}.
        </p>
      )}

      {appearance.externalUrl && (
        <a
          href={appearance.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong hover:text-ink"
        >
          View source
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      )}
    </article>
  );
}
