export function PullQuote({
  children,
  attribution,
}: {
  children: React.ReactNode;
  attribution?: string;
}) {
  return (
    <blockquote className="relative pl-7">
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[3px] rounded-full bg-gradient-to-b from-accent-a to-accent-b"
      />
      <p className="text-balance font-display text-2xl font-medium leading-snug text-fg sm:text-3xl">
        &ldquo;{children}&rdquo;
      </p>
      {attribution && (
        <cite className="mt-4 block font-sans text-sm font-medium not-italic text-fg-tertiary">
          {attribution}
        </cite>
      )}
    </blockquote>
  );
}
