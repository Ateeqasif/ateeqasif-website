const nodes = [
  { label: "Clarity", desc: "Define the outcome", x: 280, y: 64 },
  { label: "Ownership", desc: "Assign the decision", x: 496, y: 280 },
  { label: "Systems", desc: "Make it repeatable", x: 280, y: 496 },
  { label: "Scale", desc: "Remove the founder", x: 64, y: 280 },
];

function arcBetween(a: { x: number; y: number }, b: { x: number; y: number }, cx: number, cy: number) {
  const midX = (a.x + b.x) / 2;
  const midY = (a.y + b.y) / 2;
  const dx = midX - cx;
  const dy = midY - cy;
  const dist = Math.hypot(dx, dy) || 1;
  const pull = 34;
  const ctrlX = midX + (dx / dist) * pull;
  const ctrlY = midY + (dy / dist) * pull;
  return `M ${a.x} ${a.y} Q ${ctrlX} ${ctrlY} ${b.x} ${b.y}`;
}

/**
 * Abstract circular process diagram: clarity feeds ownership, ownership
 * feeds systems, systems feed scale, scale creates the clarity to do it
 * again. Illustrates the About/Home "founder must evolve" argument.
 */
export function OperatingLoopDiagram() {
  const cx = 280;
  const cy = 280;

  return (
    <svg
      viewBox="0 0 560 560"
      role="img"
      aria-label="A circular diagram: Clarity leads to Ownership, Ownership leads to Systems, Systems lead to Scale, and Scale creates the Clarity to repeat the cycle."
      className="mx-auto w-full max-w-md"
    >
      <defs>
        <linearGradient id="loop-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <radialGradient id="loop-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={cx} cy={cy} r="230" fill="url(#loop-glow)" />
      <circle cx={cx} cy={cy} r="216" fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeDasharray="2 8" strokeLinecap="round" />

      {nodes.map((node, i) => {
        const next = nodes[(i + 1) % nodes.length];
        return (
          <path
            key={node.label}
            d={arcBetween(node, next, cx, cy)}
            fill="none"
            stroke="url(#loop-grad)"
            strokeWidth="2"
            strokeOpacity="0.7"
            markerEnd="url(#loop-arrow)"
          />
        );
      })}

      <defs>
        <marker id="loop-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 Z" fill="#8b5cf6" />
        </marker>
      </defs>

      {nodes.map((node) => (
        <g key={node.label}>
          <circle cx={node.x} cy={node.y} r="54" fill="#0d1020" fillOpacity="0.9" stroke="url(#loop-grad)" strokeWidth="1.5" />
          <text x={node.x} y={node.y - 2} textAnchor="middle" fontSize="17" fontWeight="600" fill="#f5f7fb" fontFamily="var(--font-display)">
            {node.label}
          </text>
          <text x={node.x} y={node.y + 18} textAnchor="middle" fontSize="10" fill="#7f89ab">
            {node.desc}
          </text>
        </g>
      ))}
    </svg>
  );
}
