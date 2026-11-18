// Ground-Up AI Build header illustration (copy v3; founders' pick "A",
// 2026-11-02): the service's three steps, Architecture first → AI-native
// build → Measure and iterate. A wide 960×300 version (tablet / desktop) and
// a compact 520×250 one (phones, homepage card), like the other services.
// Labels come from the v3 copy. Kit: _shared/illustrationKit.
import { C, d, Canvas, Card, Tick, Chip, Bar } from '../_shared/illustrationKit';

const draw = (path, delay, color = C.purple, width = 2) => (
  <path d={path} pathLength="1" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" className="il-draw" style={d(delay)} />
);
const travel = (path, delay, color = C.orange) => (
  <circle r="3.5" fill={color} className="il-travel" style={{ offsetPath: `path('${path}')`, '--d': `${delay}s` }} />
);
const LAYERS = ['Architected', 'Written', 'Reviewed', 'Tested', 'Documented'];

function StepsArt({ wide }) {
  const W = wide ? 960 : 520;
  const H = wide ? 300 : 250;
  const pw = wide ? 280 : 160; // panel width
  const gap = (W - 16 * 2 - pw * 3) / 2;
  const xs = [16, 16 + pw + gap, 16 + 2 * (pw + gap)];
  const top = wide ? 26 : 14;
  const ph = H - top * 2;
  const fs = wide ? 13 : 11;
  const titles = ['Architecture first', 'AI-native build', 'Measure and iterate'];
  const cx0 = xs[0] + pw / 2;
  const nodeW = wide ? 84 : 56;
  const nodeH = wide ? 32 : 24;
  const ny = [top + (wide ? 70 : 48), top + (wide ? 150 : 108)];
  const nodes = [
    { x: cx0 - nodeW / 2, y: ny[0], t: 'Product' },
    { x: xs[0] + (wide ? 22 : 10), y: ny[1], t: 'Data' },
    { x: xs[0] + pw - nodeW - (wide ? 22 : 10), y: ny[1], t: 'AI' },
  ];
  const rowGap = wide ? 34 : 28;
  const bars = [0.33, 0.66, 1];
  const chartX = xs[2] + (wide ? 34 : 18);
  const chartBase = top + ph - (wide ? 58 : 46);
  const chartH = wide ? 120 : 82;
  const barW = wide ? 44 : 28;
  return (
    <Canvas w={W} h={H} className={wide ? 'sv-il-wide' : 'sv-il-compact'}>
      {xs.map((x, i) => (
        <Card key={x} x={x} y={top} w={pw} h={ph} className="il-in" style={d(i * 0.15)}>
          <text x={x + (wide ? 18 : 12)} y={top + (wide ? 30 : 24)} className="il-t" fontSize={fs} fontWeight="700" fill={C.ink}>
            <tspan fill={C.orange}>{i + 1} </tspan>{titles[i]}
          </text>
        </Card>
      ))}
      {[0, 1].map((i) => {
        const p = `M${xs[i] + pw + 4} ${H / 2} H${xs[i + 1] - 4}`;
        return <g key={i}>{draw(p, 0.6 + i * 0.6)}{travel(p, 1.4 + i * 0.6)}</g>;
      })}

      {/* 1: the system designed first, on a blueprint */}
      <rect x={xs[0] + 10} y={top + (wide ? 44 : 34)} width={pw - 20} height={ph - (wide ? 56 : 44)} rx="10" fill="#F6F3FF" className="il-in" style={d(0.2)} />
      {draw(`M${cx0} ${ny[0] + nodeH} V${ny[0] + nodeH + 14} H${nodes[1].x + nodeW / 2} V${ny[1]}`, 0.7, C.purple, 1.6)}
      {draw(`M${cx0} ${ny[0] + nodeH + 14} H${nodes[2].x + nodeW / 2} V${ny[1]}`, 0.8, C.purple, 1.6)}
      {nodes.map((n, i) => (
        <g key={n.t} className="il-pop" style={d(0.35 + i * 0.12)}>
          <rect x={n.x} y={n.y} width={nodeW} height={nodeH} rx="8" fill="#fff" stroke={C.purple} strokeDasharray={i === 2 ? 'none' : '4 3'} />
          <text x={n.x + nodeW / 2} y={n.y + nodeH / 2 + fs * 0.36} textAnchor="middle" className="il-t" fontSize={fs - 1} fontWeight="600" fill={i === 2 ? C.purple : C.inkSoft}>{n.t}</text>
        </g>
      ))}

      {/* 2: built with AI at every stage */}
      {LAYERS.map((t, i) => {
        const y = top + (wide ? 58 : 44) + i * rowGap;
        const x = xs[1] + (wide ? 18 : 12);
        return (
          <g key={t}>
            <text x={x} y={y + 4} className="il-t il-in" style={d(1 + i * 0.12)} fontSize={fs - 1} fill={C.inkSoft}>{t}</text>
            <Bar x={x + (wide ? 104 : 74)} y={y - 3} w={pw - (wide ? 160 : 108)} h={wide ? 8 : 6} color={C.lilacLine} delay={1.1 + i * 0.12} />
            <Tick cx={xs[1] + pw - (wide ? 26 : 16)} cy={y} r={wide ? 8 : 6.5} className="il-pop" style={d(1.5 + i * 0.14)} />
          </g>
        );
      })}

      {/* 3: the architecture grows with the business */}
      <path d={`M${chartX - 6} ${chartBase} H${xs[2] + pw - (wide ? 24 : 12)}`} stroke={C.lilacLine} className="il-in" style={d(1.6)} />
      {bars.map((h, i) => {
        const x = chartX + i * (barW + (wide ? 30 : 14));
        return (
          <g key={h}>
            <rect x={x} y={chartBase - chartH * h} width={barW} height={chartH * h} rx="6" fill={i === 2 ? C.purple : C.lilac} className="il-grow-y" style={d(1.9 + i * 0.2)} />
            <text x={x + barW / 2} y={chartBase + (wide ? 18 : 14)} textAnchor="middle" className="il-t il-in" style={d(2 + i * 0.2)} fontSize={fs - 1} fontWeight="600" fill={C.muted}>{i + 1}×</text>
          </g>
        );
      })}
      <Chip x={xs[2] + (wide ? 18 : 8)} y={top + ph - (wide ? 34 : 26)} w={pw - (wide ? 36 : 16)} h={wide ? 24 : 20} fill={C.greenBg} stroke="none" className="il-in" style={d(2.6)}>
        <text x={xs[2] + pw / 2} y={top + ph - (wide ? 18 : 12.5)} textAnchor="middle" className="il-t" fontSize={fs - 1.5} fontWeight="700" fill={C.green}>Holds up at 3× the size</text>
      </Chip>
    </Canvas>
  );
}

// services page: wide (tablet / desktop) + compact (phones), CSS picks one
export function GroundUpIllustration() {
  return <><StepsArt wide /><StepsArt /></>;
}
// homepage card: compact only
export function GroundUpCompact() {
  return <StepsArt />;
}
