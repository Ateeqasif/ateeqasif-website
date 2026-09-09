import type { ReactNode } from "react";

type TextBlockProps = {
  paragraphs: string[];
  className?: string;
};

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderWithLinks(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    parts.push(
      <a
        key={`link-${key++}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-accent-a underline underline-offset-2 hover:text-accent-b"
      >
        {label}
      </a>,
    );
    lastIndex = LINK_PATTERN.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export function TextBlock({ paragraphs, className = "" }: TextBlockProps) {
  return (
    <div className={`prose-measure space-y-5 text-base leading-relaxed text-fg-secondary ${className}`}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{renderWithLinks(paragraph)}</p>
      ))}
    </div>
  );
}
