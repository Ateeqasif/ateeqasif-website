type ExpertiseCardProps = {
  title: string;
  text: string;
};

export function ExpertiseCard({ title, text }: ExpertiseCardProps) {
  return (
    <div className="glass glass-hover rounded-2xl p-7">
      <h3 className="text-lg font-semibold text-fg">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-fg-secondary">{text}</p>
    </div>
  );
}
