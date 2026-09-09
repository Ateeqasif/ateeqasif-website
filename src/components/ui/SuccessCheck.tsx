export function SuccessCheck() {
  return (
    <svg viewBox="0 0 52 52" className="mx-auto mt-5 h-14 w-14" aria-hidden="true">
      <defs>
        <linearGradient id="success-check-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-accent-a)" />
          <stop offset="100%" stopColor="var(--color-accent-b)" />
        </linearGradient>
      </defs>
      <circle
        className="success-check-circle"
        cx="26"
        cy="26"
        r="23"
        fill="none"
        stroke="url(#success-check-gradient)"
        strokeWidth="3"
      />
      <path
        className="success-check-mark"
        fill="none"
        stroke="url(#success-check-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 27l7 7 15-15"
      />
    </svg>
  );
}
