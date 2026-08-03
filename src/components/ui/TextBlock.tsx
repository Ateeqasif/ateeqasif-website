type TextBlockProps = {
  paragraphs: string[];
  className?: string;
};

export function TextBlock({ paragraphs, className = "" }: TextBlockProps) {
  return (
    <div className={`prose-measure space-y-5 text-base leading-relaxed text-slate ${className}`}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
    </div>
  );
}
