type SectionIntroProps = {
  label?: string;
  headline: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionIntro({ label, headline, body, align = "left" }: SectionIntroProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-a">{label}</p>
      )}
      <h2 className="text-balance mt-3 text-3xl font-semibold text-fg sm:text-4xl">{headline}</h2>
      {body && <p className="mt-4 text-lg leading-relaxed text-fg-secondary">{body}</p>}
    </div>
  );
}
