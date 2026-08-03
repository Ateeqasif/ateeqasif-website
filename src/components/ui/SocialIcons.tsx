type IconProps = { size?: number; className?: string };

export function LinkedInIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7.2" r="0.4" fill="currentColor" />
      <path d="M11.5 16.5v-6" />
      <path d="M11.5 13c0-1.4 1-2.5 2.4-2.5s2.1 1 2.1 2.5v3.5" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14.5 21v-7h2.4l.4-3h-2.8V9c0-.87.24-1.46 1.5-1.46h1.6V5.14C17.3 5.1 16.4 5 15.35 5 13.16 5 11.65 6.33 11.65 8.7V11H9.25v3h2.4v7h2.85Z" />
    </svg>
  );
}
