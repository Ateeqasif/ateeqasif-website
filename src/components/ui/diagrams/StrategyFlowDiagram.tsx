const steps = ["Strategy", "Roadmap", "Ownership", "Delivery", "Outcome"];

/**
 * Abstract horizontal flow diagram illustrating "strategy to execution":
 * five stages connected by a single gradient line. Used on the Expertise
 * page to visualize the governance model in the hero copy.
 */
export function StrategyFlowDiagram() {
  const width = 1040;
  const height = 200;
  const y = 100;
  const marginX = 90;
  const step = (width - marginX * 2) / (steps.length - 1);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="A horizontal flow diagram: Strategy leads to Roadmap, Roadmap to Ownership, Ownership to Delivery, and Delivery to Outcome."
      className="w-full"
    >
      <defs>
        <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      <line x1={marginX} y1={y} x2={width - marginX} y2={y} stroke="url(#flow-grad)" strokeWidth="2" strokeOpacity="0.6" />

      {steps.map((label, i) => {
        const x = marginX + step * i;
        const isLast = i === steps.length - 1;
        return (
          <g key={label}>
            <circle cx={x} cy={y} r="7" fill={isLast ? "#8b5cf6" : "#05060a"} stroke="url(#flow-grad)" strokeWidth="2" />
            <text
              x={x}
              y={y - 26}
              textAnchor="middle"
              fontSize="16"
              fontWeight="600"
              fill="#f5f7fb"
              fontFamily="var(--font-display)"
            >
              {label}
            </text>
            {!isLast && (
              <text x={x + step / 2} y={y + 34} textAnchor="middle" fontSize="18" fill="#7f89ab">
                →
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
