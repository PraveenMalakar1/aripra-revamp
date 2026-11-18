// Animated illustrations for the five delivery steps (How We Work, left
// panel). One per step, drawn from that step’s copy, on a 520×480 canvas;
// the panel paints the background so the art always fills the area.
// Primitives + animation rules: _shared/illustrationKit.jsx / shared.css.
import { C, d, Canvas as KitCanvas, Card, Tick, Alert, Person, Spark, Chip, Bar } from '../_shared/illustrationKit';

const Canvas = ({ children }) => <KitCanvas w={520} h={480}>{children}</KitCanvas>;

/* ---------------------------------------------------------------------- */
/* 1. Planning: architecture mapped before any code; edge cases found     */
/*    early; a clear picture of how the system will scale.                */
/* ---------------------------------------------------------------------- */
function Node({ x, y, w = 140, label, delay, icon }) {
  return (
    <Card x={x} y={y} w={w} h={56} r={12} className="il-pop" style={d(delay)}>
      <rect x={x + 12} y={y + 12} width="32" height="32" rx="8" fill={C.lilac} />
      {icon(x + 28, y + 28)}
      <text x={x + 54} y={y + 33} className="il-t" fontSize="14" fontWeight="600" fill={C.ink}>{label}</text>
    </Card>
  );
}
const iconScreen = (cx, cy) => <g><rect x={cx - 9} y={cy - 7} width="18" height="12" rx="2" stroke={C.purple} strokeWidth="2" /><path d={`M${cx - 4} ${cy + 9}h8`} stroke={C.purple} strokeWidth="2" strokeLinecap="round" /></g>;
const iconApi = (cx, cy) => <path d={`M${cx - 4} ${cy - 7}l-5 7 5 7M${cx + 4} ${cy - 7}l5 7-5 7`} stroke={C.purple} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />;
const iconDb = (cx, cy) => <g stroke={C.purple} strokeWidth="2"><ellipse cx={cx} cy={cy - 6} rx="8" ry="3" /><path d={`M${cx - 8} ${cy - 6}v12c0 1.7 3.6 3 8 3s8-1.3 8-3v-12`} /></g>;
const iconLock = (cx, cy) => <g stroke={C.purple} strokeWidth="2"><rect x={cx - 7} y={cy - 2} width="14" height="10" rx="2" /><path d={`M${cx - 4} ${cy - 2}v-3a4 4 0 0 1 8 0v3`} /></g>;
const iconStack = (cx, cy) => <g stroke={C.purple} strokeWidth="2" strokeLinejoin="round"><path d={`M${cx} ${cy - 8}l9 4.5-9 4.5-9-4.5z`} /><path d={`M${cx - 9} ${cy + 1}l9 4.5 9-4.5M${cx - 9} ${cy + 5.5}l9 4.5 9-4.5`} /></g>;

export function PlanningIllustration() {
  const toDb = 'M260 256 V292 H110 V330';
  const toSvc = 'M260 256 V292 H410 V330';
  return (
    <Canvas>
      <Chip x={24} y={22} w={176} className="il-in" style={d(0)}>
        <circle cx="44" cy="38" r="5" fill={C.orange} />
        <text x="58" y="43" className="il-t" fontSize="13" fontWeight="600" fill={C.ink}>Architecture plan</text>
      </Chip>

      {/* connectors draw in after the nodes they join */}
      <path d="M260 136 V200" pathLength="1" stroke={C.purple} strokeWidth="2" className="il-draw" style={d(0.45)} />
      <path d="M330 228 H370" pathLength="1" stroke={C.purple} strokeWidth="2" className="il-draw" style={d(0.75)} />
      <path d={toDb} pathLength="1" stroke={C.purple} strokeWidth="2" strokeLinejoin="round" className="il-draw" style={d(0.9)} />
      <path d={toSvc} pathLength="1" stroke={C.purple} strokeWidth="2" strokeLinejoin="round" className="il-draw" style={d(1)} />
      <circle r="4" fill={C.purple} className="il-travel" style={{ offsetPath: `path('${toSvc}')`, '--d': '1.6s' }} />
      <circle r="4" fill={C.purple} className="il-travel" style={{ offsetPath: "path('M260 136 V200')", '--d': '1.9s' }} />

      <Node x={190} y={80} label="Web app" delay={0.15} icon={iconScreen} />
      <Node x={190} y={200} label="API" delay={0.3} icon={iconApi} />
      <Node x={370} y={200} w={124} label="Auth" delay={0.6} icon={iconLock} />
      <Node x={40} y={330} label="Database" delay={0.7} icon={iconDb} />

      {/* services: a stack of three, i.e. how it scales */}
      <g className="il-pop" style={d(1.15)}>
        <rect x={356} y={346} width="140" height="56" rx="12" fill="#fff" stroke={C.lilacLine} />
        <rect x={348} y={338} width="140" height="56" rx="12" fill="#fff" stroke={C.lilacLine} />
      </g>
      <Node x={340} y={330} label="Services" delay={0.8} icon={iconStack} />
      <Chip x={364} y={414} w={116} h={28} fill={C.lilac} stroke="none" className="il-in" style={d(1.35)}>
        <text x="422" y="433" textAnchor="middle" className="il-t" fontSize="12" fontWeight="600" fill={C.purple}>scales ×3</text>
      </Chip>

      {/* edge case spotted on the data path, before it’s a surprise */}
      <Chip x={96} y={250} w={128} h={28} fill={C.orangeBg} stroke="none" className="il-in" style={d(1.5)}>
        <text x="160" y="269" textAnchor="middle" className="il-t" fontSize="12" fontWeight="600" fill={C.orange}>edge case found</text>
      </Chip>
      <g className="il-pop" style={d(1.45)}>
        <circle cx="185" cy="292" r="15" fill={C.orange} opacity="0.18" className="il-pulse" style={d(2)} />
        <Alert cx={185} cy={292} />
      </g>

      <g className="il-in" style={d(1.7)}>
        <Tick cx={52} cy={444} r={10} />
        <text x="70" y="449" className="il-t" fontSize="13" fontWeight="500" fill={C.inkSoft}>Decided before the first line of code</text>
      </g>
    </Canvas>
  );
}

/* ---------------------------------------------------------------------- */
/* 2. Development: AI as a coding partner, not a code generator. The       */
/*    engineer reviews, understands and owns every AI suggestion.          */
/* ---------------------------------------------------------------------- */
export function DevelopmentIllustration() {
  const rows = [
    [[80, 44, C.purple], [130, 120, C.lilacLine]],
    [[96, 70, C.lilacLine], [172, 90, C.orangeBg]],
    [[96, 150, C.lilacLine]],
    [[80, 30, C.purple], [116, 80, C.lilacLine]],
  ];
  const ai = [[[96, 110], [212, 70]], [[112, 160]], [[112, 90], [208, 120]]];
  return (
    <Canvas>
      <Card x={30} y={30} w={460} h={330} className="il-in" style={d(0)}>
        <path d="M30 70 H490" stroke={C.lilacLine} />
        <circle cx="52" cy="50" r="5" fill={C.lilacLine} />
        <circle cx="68" cy="50" r="5" fill={C.lilacLine} />
        <circle cx="84" cy="50" r="5" fill={C.lilacLine} />
        <text x="108" y="55" className="il-mono" fontSize="12" fill={C.muted}>checkout.ts</text>
      </Card>

      {/* the engineer’s own code */}
      {rows.map((segs, i) => (
        <g key={`r${i}`}>
          <text x="54" y={104 + i * 26} className="il-mono" fontSize="10" fill={C.muted}>{i + 1}</text>
          {segs.map(([x, w, c], j) => <Bar key={j} x={x} y={96 + i * 26} w={w} color={c} delay={0.2 + i * 0.12 + j * 0.06} />)}
        </g>
      ))}

      {/* AI suggestion: proposed, not yet accepted */}
      <g className="il-in" style={d(0.8)}>
        <rect x="70" y="194" width="400" height="84" rx="10" fill={C.lilac} opacity="0.55" stroke={C.purple} strokeDasharray="5 5" />
        {ai.map((segs, i) => (
          <g key={`a${i}`}>
            <text x="54" y={216 + i * 24} className="il-mono" fontSize="10" fill={C.muted}>{i + 5}</text>
            {segs.map(([x, w], j) => <Bar key={j} x={x} y={208 + i * 24} w={w} color={C.purple} delay={0.95 + i * 0.12 + j * 0.06} />)}
          </g>
        ))}
      </g>
      <Chip x={330} y={180} w={128} h={28} fill="#fff" stroke={C.purple} className="il-pop" style={d(0.9)}>
        <Spark cx={348} cy={194} s={6} />
        <text x="360" y="199" className="il-t" fontSize="12" fontWeight="600" fill={C.purple}>AI suggestion</text>
      </Chip>

      {/* the engineer keeps typing; caret blinks */}
      <text x="54" y="314" className="il-mono" fontSize="10" fill={C.muted}>8</text>
      <Bar x={80} y={306} w={60} delay={1.4} />
      <rect x="148" y="302" width="2" height="16" rx="1" fill={C.ink} className="il-blink" />

      {/* sign-off: nothing ships without the owning engineer */}
      <Card x={238} y={322} w={258} h={100} className="il-pop" style={d(1.6)}>
        <Person cx={276} cy={362} r={20} />
        <text x="306" y="358" className="il-t" fontSize="14" fontWeight="600" fill={C.ink}>Engineer sign-off</text>
        <text x="306" y="378" className="il-t" fontSize="12" fill={C.muted}>Reviewed. Understood. Owned.</text>
        <Tick cx={470} cy={346} r={12} className="il-pop" style={d(2)} />
      </Card>

      <Chip x={30} y={392} w={184} h={34} className="il-in" style={d(1.8)}>
        <circle cx="52" cy="409" r="8" fill={C.violet} />
        <circle cx="66" cy="409" r="8" fill={C.purple} opacity="0.85" />
        <text x="84" y="414" className="il-t" fontSize="12" fontWeight="600" fill={C.ink}>AI as coding partner</text>
      </Chip>
    </Canvas>
  );
}

/* ---------------------------------------------------------------------- */
/* 3. Code Review: AI-assisted review on every pull request catches        */
/*    security issues, logic gaps and edge cases; humans then judge the    */
/*    architecture and approach.                                           */
/* ---------------------------------------------------------------------- */
export function CodeReviewIllustration() {
  const diff = [
    { t: ' ', w: 190 },
    { t: '-', w: 240 },
    { t: '+', w: 210, flag: true },
    { t: '+', w: 150, flag: true },
    { t: ' ', w: 220 },
    { t: '+', w: 170, flag: true },
  ];
  const tone = { '+': [C.greenBg, C.green], '-': [C.redBg, C.red], ' ': ['transparent', C.lilacLine] };
  const caught = [
    { x: 30, label: 'Security' },
    { x: 186, label: 'Logic gap' },
    { x: 342, label: 'Edge case' },
  ];
  return (
    <Canvas>
      <Card x={30} y={26} w={460} h={290} className="il-in" style={d(0)}>
        <text x="54" y="62" className="il-t" fontSize="15" fontWeight="600" fill={C.ink}>Pull request #128</text>
        <Chip x={378} y={44} w={92} h={26} fill={C.lilac} stroke="none">
          <text x="424" y="61" textAnchor="middle" className="il-t" fontSize="11" fontWeight="600" fill={C.purple}>AI review</text>
        </Chip>
      </Card>

      {/* the diff */}
      {diff.map((r, i) => {
        const y = 86 + i * 34;
        const [bg, fg] = tone[r.t];
        return (
          <g key={i} className="il-in" style={d(0.15 + i * 0.08)}>
            <rect x="46" y={y} width="428" height="26" rx="6" fill={bg} />
            <text x="58" y={y + 18} className="il-mono" fontSize="13" fontWeight="700" fill={fg}>{r.t === ' ' ? '' : r.t}</text>
            <rect x="78" y={y + 9} width={r.w} height="8" rx="4" fill={r.t === ' ' ? C.lilacLine : fg} opacity={r.t === ' ' ? 1 : 0.45} />
            {r.flag && <Alert cx={452} cy={y + 13} r={8} className="il-pop" style={d(1.1 + i * 0.15)} />}
          </g>
        );
      })}

      {/* the AI pass sweeping the diff */}
      <g className="il-scan" style={{ '--scan': '186px' }}>
        <rect x="40" y="76" width="440" height="34" fill={C.purple} opacity="0.08" />
        <rect x="40" y="108" width="440" height="2" rx="1" fill={C.purple} opacity="0.7" />
      </g>

      {/* what it caught, before a human ever looks */}
      {caught.map((c, i) => (
        <Card key={c.label} x={c.x} y={336} w={148} h={44} r={12} className="il-pop" style={d(1.4 + i * 0.15)}>
          <Alert cx={c.x + 24} cy={358} r={9} />
          <text x={c.x + 42} y={363} className="il-t" fontSize="13" fontWeight="600" fill={C.ink}>{c.label}</text>
        </Card>
      ))}

      {/* then the human review: architecture and approach */}
      <g className="il-in" style={d(2)}>
        <Person cx={50} cy={428} r={18} />
        <text x="78" y="425" className="il-t" fontSize="13" fontWeight="600" fill={C.ink}>Human review</text>
        <text x="78" y="442" className="il-t" fontSize="12" fill={C.muted}>Is this the right solution?</text>
      </g>
      <Chip x={370} y={412} w={120} h={32} fill={C.greenBg} stroke="none" className="il-pop" style={d(2.3)}>
        <Tick cx={392} cy={428} r={9} />
        <text x="408" y="433" className="il-t" fontSize="13" fontWeight="600" fill={C.green}>Approved</text>
      </Chip>
    </Canvas>
  );
}

/* ---------------------------------------------------------------------- */
/* 4. Testing: AI generates the test cases, edge cases and at-scale        */
/*    scenarios included; engineers own the suite; it holds under load.   */
/* ---------------------------------------------------------------------- */
export function TestingIllustration() {
  const tests = [
    { name: 'checkout happy path' },
    { name: 'empty cart' },
    { name: 'payment declined', tag: 'edge' },
    { name: '10k concurrent users', tag: 'load' },
    { name: 'network timeout', tag: 'edge' },
    { name: 'currency rounding' },
    { name: 'expired session' },
  ];
  const bars = [34, 52, 46, 70, 62, 88];
  return (
    <Canvas>
      <Card x={24} y={24} w={312} h={432} className="il-in" style={d(0)}>
        <text x="48" y="60" className="il-t" fontSize="15" fontWeight="600" fill={C.ink}>Test suite</text>
        <g>
          <Spark cx={52} cy={78} s={5} />
          <text x="62" y="82" className="il-t" fontSize="11" fill={C.muted}>generated by AI · owned by engineers</text>
        </g>
        <path d="M24 96 H336" stroke={C.lilacLine} />
      </Card>

      {tests.map((t, i) => {
        const y = 112 + i * 44;
        const delay = 0.35 + i * 0.22;
        return (
          <g key={t.name}>
            <g className="il-in" style={d(0.1 + i * 0.06)}>
              <circle cx="58" cy={y + 14} r="11" stroke={C.lilacLine} strokeWidth="2" />
              <text x="80" y={y + 19} className="il-mono" fontSize="12" fill={C.inkSoft}>{t.name}</text>
              {t.tag && (
                <Chip x={268} y={y + 3} w={48} h={22} fill={t.tag === 'load' ? C.lilac : C.orangeBg} stroke="none">
                  <text x="292" y={y + 18} textAnchor="middle" className="il-t" fontSize="10" fontWeight="700" fill={t.tag === 'load' ? C.purple : C.orange}>{t.tag}</text>
                </Chip>
              )}
            </g>
            <Tick cx={58} cy={y + 14} r={11} className="il-pop" style={d(delay)} />
          </g>
        );
      })}

      <text x="48" y="436" className="il-t il-in" style={d(2)} fontSize="13" fontWeight="600" fill={C.green}>7 passed · 0 failed</text>

      {/* coverage */}
      <Card x={352} y={24} w={144} h={196} className="il-in" style={d(0.2)}>
        <circle cx="424" cy="112" r="48" stroke={C.lilac} strokeWidth="12" />
        <circle cx="424" cy="112" r="48" stroke={C.purple} strokeWidth="12" strokeLinecap="round" pathLength="100" strokeDasharray="94 100" transform="rotate(-90 424 112)" className="il-ring" style={d(0.5)} />
        <text x="424" y="120" textAnchor="middle" className="il-t" fontSize="22" fontWeight="700" fill={C.ink}>94%</text>
        <text x="424" y="192" textAnchor="middle" className="il-t" fontSize="12" fill={C.muted}>coverage</text>
      </Card>

      {/* holds up under real load */}
      <Card x={352} y={236} w={144} h={220} className="il-in" style={d(0.4)}>
        <text x="368" y="264" className="il-t" fontSize="12" fontWeight="600" fill={C.ink}>Under real load</text>
        <path d="M368 400 H480" stroke={C.lilacLine} />
        {bars.map((h, i) => (
          <rect key={i} x={370 + i * 18} y={400 - h} width="12" height={h} rx="3" fill={i === bars.length - 1 ? C.purple : C.lilacLine} className="il-grow-y" style={d(0.8 + i * 0.1)} />
        ))}
        <Chip x={368} y={414} w={112} h={26} fill={C.greenBg} stroke="none">
          <text x="424" y="431" textAnchor="middle" className="il-t" fontSize="11" fontWeight="700" fill={C.green}>stable</text>
        </Chip>
      </Card>
    </Canvas>
  );
}

/* ---------------------------------------------------------------------- */
/* 5. Documentation: written at the same time as the code, not after;     */
/*    engineers own and maintain it.                                       */
/* ---------------------------------------------------------------------- */
export function DocumentationIllustration() {
  const code = [[40, C.purple, 70], [56, C.lilacLine, 110], [56, C.lilacLine, 90], [40, C.purple, 60], [56, C.lilacLine, 120], [56, C.lilacLine, 80], [40, C.purple, 76], [56, C.lilacLine, 100], [56, C.lilacLine, 64]];
  // each doc section is written at the same moment as its code block
  const docs = [
    { y: 112, line: 0 },
    { y: 190, line: 3 },
    { y: 268, line: 6 },
  ];
  const lineY = (i) => 118 + i * 26;
  const delayOf = (i) => 0.3 + i * 0.16;
  return (
    <Canvas>
      <Chip x={150} y={14} w={220} h={32} className="il-in" style={d(0)}>
        <circle cx="172" cy="30" r="8" stroke={C.purple} strokeWidth="2" />
        <path d="M172 25 v5 l3 2" stroke={C.purple} strokeWidth="2" strokeLinecap="round" />
        <text x="188" y="35" className="il-t" fontSize="12" fontWeight="600" fill={C.ink}>Documented as it’s written</text>
      </Chip>

      {/* code */}
      <Card x={24} y={62} w={220} h={330} className="il-in" style={d(0.05)}>
        <text x="44" y="90" className="il-mono" fontSize="12" fill={C.muted}>payments.ts</text>
        <path d="M24 100 H244" stroke={C.lilacLine} />
      </Card>
      {code.map(([x, c, w], i) => <Bar key={i} x={x + 4} y={lineY(i)} w={w} color={c} delay={delayOf(i)} />)}

      {/* docs */}
      <Card x={276} y={62} w={220} h={330} className="il-in" style={d(0.1)}>
        <rect x="294" y="78" width="16" height="18" rx="2" stroke={C.purple} strokeWidth="2" />
        <path d="M298 84 h8 M298 89 h6" stroke={C.purple} strokeWidth="1.6" strokeLinecap="round" />
        <text x="318" y="92" className="il-t" fontSize="12" fontWeight="600" fill={C.ink}>Docs · payments</text>
        <path d="M276 100 H496" stroke={C.lilacLine} />
      </Card>
      {docs.map((s) => {
        const t = delayOf(s.line);
        const ly = lineY(s.line) + 4;
        const link = `M244 ${ly} C260 ${ly} 260 ${s.y + 8} 276 ${s.y + 8}`;
        return (
          <g key={s.y}>
            <path d={link} pathLength="1" stroke={C.purple} strokeWidth="1.6" strokeDasharray="0" className="il-draw" style={d(t)} />
            <circle r="3" fill={C.orange} className="il-travel" style={{ offsetPath: `path('${link}')`, '--d': `${t + 0.6}s` }} />
            <Bar x={296} y={s.y + 4} w={110} h={10} color={C.ink} delay={t + 0.1} />
            <Bar x={296} y={s.y + 24} w={176} delay={t + 0.2} />
            <Bar x={296} y={s.y + 40} w={150} delay={t + 0.28} />
            <Bar x={296} y={s.y + 56} w={120} delay={t + 0.36} />
          </g>
        );
      })}

      {/* engineers own it from there */}
      <Chip x={120} y={414} w={280} h={40} className="il-pop" style={d(1.9)}>
        <Person cx={144} cy={434} r={13} />
        <text x="166" y="439" className="il-t" fontSize="13" fontWeight="600" fill={C.ink}>Owned and maintained by engineers</text>
      </Chip>
    </Canvas>
  );
}

export const STEP_ILLUSTRATIONS = [
  PlanningIllustration,
  DevelopmentIllustration,
  CodeReviewIllustration,
  TestingIllustration,
  DocumentationIllustration,
];
