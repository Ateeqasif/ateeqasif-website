export function BusinessSkyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Abstract illustration of a business district skyline"
    >
      <defs>
        <linearGradient id="skyline-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-accent-a)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-accent-a)" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="skyline-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-accent-b)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-accent-b)" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="skyline-glow" cx="50%" cy="15%" r="60%">
          <stop offset="0%" stopColor="var(--color-accent-a)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-accent-a)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="70" r="160" fill="url(#skyline-glow)" />

      {/* connecting lines representing a portfolio / network */}
      <g stroke="var(--color-accent-a)" strokeOpacity="0.35" strokeWidth="1.5">
        <line x1="70" y1="170" x2="140" y2="120" />
        <line x1="140" y1="120" x2="210" y2="160" />
        <line x1="210" y1="160" x2="270" y2="100" />
        <line x1="270" y1="100" x2="330" y2="150" />
      </g>
      <g fill="var(--color-accent-a)">
        <circle cx="70" cy="170" r="3.5" />
        <circle cx="140" cy="120" r="3.5" />
        <circle cx="210" cy="160" r="3.5" />
        <circle cx="270" cy="100" r="3.5" />
        <circle cx="330" cy="150" r="3.5" />
      </g>

      {/* skyline */}
      <g opacity="0.95">
        <rect x="40" y="230" width="42" height="140" rx="4" fill="url(#skyline-a)" />
        <rect x="96" y="190" width="46" height="180" rx="4" fill="url(#skyline-b)" />
        <rect x="156" y="245" width="38" height="125" rx="4" fill="url(#skyline-a)" />
        <rect x="208" y="160" width="50" height="210" rx="4" fill="url(#skyline-b)" />
        <rect x="272" y="210" width="40" height="160" rx="4" fill="url(#skyline-a)" />
        <rect x="326" y="255" width="34" height="115" rx="4" fill="url(#skyline-b)" />
      </g>

      {/* windows */}
      <g fill="#0b1120" opacity="0.35">
        {Array.from({ length: 6 }).map((_, col) =>
          Array.from({ length: 6 }).map((_, row) => (
            <rect
              key={`${col}-${row}`}
              x={48 + col * 58}
              y={200 + row * 22}
              width="6"
              height="9"
              rx="1"
            />
          )),
        )}
      </g>

      <rect x="20" y="370" width="360" height="2" rx="1" fill="var(--color-accent-a)" opacity="0.25" />
    </svg>
  );
}
