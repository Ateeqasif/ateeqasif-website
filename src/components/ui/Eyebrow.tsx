export function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.18em] ${
        tone === "light" ? "text-accent-strong" : "text-accent-soft"
      }`}
    >
      {children}
    </p>
  );
}
