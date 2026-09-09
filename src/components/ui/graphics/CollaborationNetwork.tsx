type Cube = {
  cx: number;
  topY: number;
  height: number;
  tone: "a" | "b";
};

const S = 34; // half-width of the isometric top face

const cubes: Cube[] = [
  { cx: 200, topY: 106, height: 95, tone: "b" }, // back
  { cx: 166, topY: 157, height: 85, tone: "a" }, // left
  { cx: 200, topY: 140, height: 118, tone: "b" }, // center hub (tallest)
  { cx: 234, topY: 157, height: 72, tone: "a" }, // right
  { cx: 200, topY: 174, height: 60, tone: "a" }, // front
];

function cubeFaces(cube: Cube) {
  const { cx, topY: t, height: h } = cube;
  const top = [
    [cx, t],
    [cx + S, t + S * 0.5],
    [cx, t + S],
    [cx - S, t + S * 0.5],
  ];
  const left = [
    [cx - S, t + S * 0.5],
    [cx, t + S],
    [cx, t + S + h],
    [cx - S, t + S * 0.5 + h],
  ];
  const right = [
    [cx, t + S],
    [cx + S, t + S * 0.5],
    [cx + S, t + S * 0.5 + h],
    [cx, t + S + h],
  ];
  return {
    top: top.map((p) => p.join(",")).join(" "),
    left: left.map((p) => p.join(",")).join(" "),
    right: right.map((p) => p.join(",")).join(" "),
  };
}

export function CollaborationNetwork({ className }: { className?: string }) {
  const hub = cubes[2];

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Isometric illustration of connected blocks representing collaboration"
    >
      <defs>
        <linearGradient id="cn-top-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-accent-a)" />
          <stop offset="100%" stopColor="var(--color-accent-b)" />
        </linearGradient>
        <linearGradient id="cn-top-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-accent-b)" />
          <stop offset="100%" stopColor="var(--color-accent-a)" />
        </linearGradient>
        <radialGradient id="cn-glow" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="var(--color-accent-a)" stopOpacity="0.32" />
          <stop offset="100%" stopColor="var(--color-accent-a)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cn-ground" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-accent-b)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--color-accent-b)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="190" r="175" fill="url(#cn-glow)" />
      <ellipse cx="200" cy="340" rx="140" ry="20" fill="url(#cn-ground)" />

      {/* network connections from each block to the central hub */}
      <g stroke="var(--color-accent-a)" strokeOpacity="0.45" strokeWidth="1.5">
        {cubes
          .filter((c) => c !== hub)
          .map((c, i) => (
            <line key={i} x1={hub.cx} y1={hub.topY} x2={c.cx} y2={c.topY} />
          ))}
      </g>

      {cubes.map((cube, i) => {
        const faces = cubeFaces(cube);
        const topFill = cube.tone === "a" ? "url(#cn-top-a)" : "url(#cn-top-b)";
        return (
          <g key={i}>
            <polygon points={faces.left} fill="var(--color-accent-b)" opacity="0.35" />
            <polygon points={faces.right} fill="var(--color-accent-a)" opacity="0.5" />
            <polygon points={faces.top} fill={topFill} opacity="0.95" />
          </g>
        );
      })}

      {/* glowing nodes at each block's top vertex */}
      <g>
        {cubes.map((c, i) => (
          <circle key={i} cx={c.cx} cy={c.topY} r={c === hub ? 5 : 4} fill="#f5f7fb" opacity="0.9" />
        ))}
      </g>
    </svg>
  );
}
