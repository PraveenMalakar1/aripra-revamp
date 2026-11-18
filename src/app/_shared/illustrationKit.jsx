// Shared SVG illustration kit (How We Work steps, Services headers).
// Animation = CSS classes in _shared/shared.css (.il-*). Each element’s
// RESTING state is its final state and the keyframes only animate FROM the
// hidden/empty state, so with prefers-reduced-motion (animation: none) every
// illustration simply shows complete. Stagger via the --d custom property.
// Illustrations are decorative (aria-hidden): the copy beside them carries
// the meaning.

export const C = {
  purple: '#6C47FF',
  violet: '#321675',
  lilac: '#EDE8FF',
  lilacLine: '#DCD3FF',
  ink: '#11023B',
  inkSoft: '#3F3A66',
  muted: '#8A8AA3',
  orange: '#FF5500',
  orangeBg: '#FFE9DE',
  green: '#16A34A',
  greenBg: '#DCFCE7',
  red: '#DC2626',
  redBg: '#FEE2E2',
};

export const d = (s) => ({ '--d': `${s}s` });

export function Canvas({ w, h, className, children }) {
  return (
    <svg className={className ? `il ${className}` : 'il'} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

// white card with a soft offset shadow (no SVG filters: cheap and crisp)
export function Card({ x, y, w, h, r = 14, className, style, children }) {
  return (
    <g className={className} style={style}>
      <rect x={x} y={y + 5} width={w} height={h} rx={r} fill={C.ink} opacity="0.05" />
      <rect x={x} y={y} width={w} height={h} rx={r} fill="#fff" stroke={C.lilacLine} />
      {children}
    </g>
  );
}

export function Tick({ cx, cy, r = 11, className, style }) {
  return (
    <g className={className} style={style}>
      <circle cx={cx} cy={cy} r={r} fill={C.green} />
      <path d={`M${cx - r * 0.42} ${cy} l${r * 0.3} ${r * 0.32} l${r * 0.55} ${-r * 0.62}`} stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

export function Alert({ cx, cy, r = 10, className, style }) {
  return (
    <g className={className} style={style}>
      <circle cx={cx} cy={cy} r={r} fill={C.orange} />
      <path d={`M${cx} ${cy - r * 0.45} v${r * 0.5}`} stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx={cx} cy={cy + r * 0.45} r="1.4" fill="#fff" />
    </g>
  );
}

export function Person({ cx, cy, r = 16, color = C.violet }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={C.lilac} />
      <circle cx={cx} cy={cy - r * 0.22} r={r * 0.32} fill={color} />
      <path d={`M${cx - r * 0.58} ${cy + r * 0.62} a${r * 0.58} ${r * 0.5} 0 0 1 ${r * 1.16} 0`} fill={color} />
    </g>
  );
}

export function Spark({ cx, cy, s = 7, color = C.orange }) {
  return <path d={`M${cx} ${cy - s} Q${cx} ${cy} ${cx + s} ${cy} Q${cx} ${cy} ${cx} ${cy + s} Q${cx} ${cy} ${cx - s} ${cy} Q${cx} ${cy} ${cx} ${cy - s}Z`} fill={color} />;
}

export function Chip({ x, y, w, h = 32, children, fill = '#fff', stroke = C.lilacLine, className, style }) {
  return (
    <g className={className} style={style}>
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} stroke={stroke} />
      {children}
    </g>
  );
}

// a "line of code / text": a rounded bar that types in from the left
export function Bar({ x, y, w, h = 8, color = C.lilacLine, delay = 0, grow = true }) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={color} className={grow ? 'il-grow' : undefined} style={d(delay)} />;
}

