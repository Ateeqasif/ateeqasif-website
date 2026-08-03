type ExpertiseCardProps = {
  title: string;
  text: string;
};

export function ExpertiseCard({ title, text }: ExpertiseCardProps) {
  return (
    <div className="rounded-2xl border border-paper-line bg-white/60 p-7 transition-colors hover:border-accent/40">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate">{text}</p>
    </div>
  );
}
