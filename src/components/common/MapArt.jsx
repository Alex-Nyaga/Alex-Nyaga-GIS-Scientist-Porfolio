// Procedural abstract "map/satellite" art tiles used as thumbnails wherever
// the design calls for imagery we don't have real photos/renders for
// (project cards, gallery grid, project hero). Purely generated gradients +
// a faint contour/grid overlay so every tile stays on-brand and consistent.
const PALETTES = [
  ["#0f3d2e", "#1f7a52", "#e8c27a"], // river / terrain
  ["#1a2a5e", "#3454c9", "#5eeaa8"], // ML / thermal blue-green
  ["#5e1a1a", "#c9422f", "#f2a65a"], // heat / thermal red-orange
  ["#173a1f", "#2f7a3f", "#c7d96a"], // land cover green-yellow
  ["#0e2a3a", "#156b8a", "#5eeaa8"], // hydrology blue
  ["#3a2a10", "#8a5a15", "#e8c27a"], // erosion / soil
  ["#101c3a", "#2a4a9a", "#7ad1e8"], // streamflow blue
  ["#1a3a1a", "#4a8a3f", "#e8e07a"], // NDVI green-yellow
];

export default function MapArt({ variant = 0, className = "", grid = true }) {
  const [c1, c2, c3] = PALETTES[variant % PALETTES.length];
  const id = `mapart-${variant}-${grid ? "g" : "n"}`;

  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${id}-bg`} cx="30%" cy="25%" r="90%">
          <stop offset="0%" stopColor={c2} />
          <stop offset="55%" stopColor={c1} />
          <stop offset="100%" stopColor="#04070c" />
        </radialGradient>
        <linearGradient id={`${id}-sheen`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c3} stopOpacity="0.5" />
          <stop offset="40%" stopColor={c3} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#${id}-bg)`} />
      <rect width="400" height="260" fill={`url(#${id}-sheen)`} />
      {grid && (
        <g stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1">
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`v${i}`} x1={(i + 1) * 50} y1="0" x2={(i + 1) * 50} y2="260" />
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={(i + 1) * 52} x2="400" y2={(i + 1) * 52} />
          ))}
        </g>
      )}
      <g opacity="0.35" stroke={c3} strokeWidth="1.5" fill="none">
        <path d={`M -10 ${60 + variant * 4} Q 120 ${20 + variant * 6} 220 ${90 - variant * 3} T 410 ${70 + variant * 5}`} />
        <path d={`M -10 ${190 - variant * 3} Q 150 ${240 - variant * 5} 260 ${170 + variant * 2} T 410 ${200 - variant * 4}`} />
      </g>
      <rect width="400" height="260" fill="#04070c" fillOpacity="0.12" />
    </svg>
  );
}
