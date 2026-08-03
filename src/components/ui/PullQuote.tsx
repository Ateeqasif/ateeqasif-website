export function PullQuote({
  children,
  attribution,
  tone = "light",
}: {
  children: React.ReactNode;
  attribution?: string;
  tone?: "light" | "dark";
}) {
  return (
    <blockquote
      className={`border-l-4 pl-6 text-2xl font-display font-medium leading-snug sm:text-3xl ${
        tone === "dark" ? "border-accent text-paper" : "border-accent text-ink"
      }`}
    >
      <p className="text-balance">&ldquo;{children}&rdquo;</p>
      {attribution && (
        <cite className={`mt-4 block text-sm font-sans not-italic font-medium ${tone === "dark" ? "text-slate-soft" : "text-slate"}`}>
          {attribution}
        </cite>
      )}
    </blockquote>
  );
}
