export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-a">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accent-a to-accent-b" />
      {children}
    </p>
  );
}
