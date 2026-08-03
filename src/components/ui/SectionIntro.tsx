type SectionIntroProps = {
  label?: string;
  headline: string;
  body?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

export function SectionIntro({ label, headline, body, tone = "light", align = "left" }: SectionIntroProps) {
  const isDark = tone === "dark";

  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {label && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${
            isDark ? "text-accent-soft" : "text-accent-strong"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-balance mt-3 text-3xl font-semibold sm:text-4xl ${
          isDark ? "text-paper" : "text-ink"
        }`}
      >
        {headline}
      </h2>
      {body && (
        <p className={`mt-4 text-lg leading-relaxed ${isDark ? "text-slate-soft" : "text-slate"}`}>
          {body}
        </p>
      )}
    </div>
  );
}
