// Header illustrations for the four services (one each, drawn from that
// service’s copy): compact 520×250 versions here, wide 960×300 versions in
// ServiceIllustrationsWide.jsx. Same style and animation kit as the
// How We Work steps: _shared/illustrationKit.jsx + .il-* in shared.css.
// The build-up plays once when the illustration scrolls into view
// (PlayOnView in ServiceSection).
import { C, d, Canvas as KitCanvas, Card, Tick, Alert, Person, Spark, Chip, Bar } from '../_shared/illustrationKit';
import { RescueWide, ProductWide, AIWide, TeamWide } from './ServiceIllustrationsWide';

// compact 520×250 versions: shown on phones (the wide ones would shrink too far)
const Canvas = ({ className, children }) => <KitCanvas w={520} h={250} className={className}>{children}</KitCanvas>;

/* ---------------------------------------------------------------------- */
/* 1. Software Rescue & Rebuild: AI maps the whole codebase; you get a     */
/*    plain answer on what’s broken, what’s at risk and the rebuild plan,  */
/*    in days, not weeks.                                                  */
/* ---------------------------------------------------------------------- */
// `className`: 'sv-il-compact' on /services (CSS swaps it with the wide one);
// the homepage shows it on its own (no class).
export function RescueCompact({ className = 'sv-il-compact' } = {}) {
  // 4×4 module map; b = broken, r = at risk (counts match the report)
  const status = { '0-1': 'b', '2-2': 'b', '1-3': 'r', '3-0': 'r', '2-0': 'r' };
  const tone = { b: [C.redBg, C.red], r: [C.orangeBg, C.orange] };
  const rows = [
    { label: 'Broken', value: '2', color: C.red },
    { label: 'At risk', value: '3', color: C.orange },
    { label: 'Rebuild plan', value: 'ready', color: C.purple },
  ];
  return (
    <Canvas className={className}>
      <Card x={12} y={14} w={262} h={222} className="il-in" style={d(0)}>
        <text x="30" y="40" className="il-t" fontSize="13" fontWeight="600" fill={C.ink}>Codebase diagnosis</text>
        <Chip x={196} y={25} w={64} h={22} fill={C.lilac} stroke="none">
          <text x="228" y="40" textAnchor="middle" className="il-t" fontSize="11" fontWeight="600" fill={C.purple}>AI scan</text>
        </Chip>
      </Card>

      {Array.from({ length: 16 }).map((_, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const x = 28 + col * 60;
        const y = 56 + row * 42;
        const s = status[`${col}-${row}`];
        return (
          <g key={i}>
            <g className="il-pop" style={d(0.15 + i * 0.03)}>
              <rect x={x} y={y} width="52" height="34" rx="7" fill="#F6F3FF" stroke={C.lilacLine} />
              <rect x={x + 10} y={y + 14} width={20 + ((i * 7) % 14)} height="6" rx="3" fill={C.lilacLine} />
            </g>
            {/* the diagnosis colours a module once the scan has passed it */}
            {s && (
              <g className="il-pop" style={d(1.3 + col * 0.12)}>
                <rect x={x} y={y} width="52" height="34" rx="7" fill={tone[s][0]} stroke={tone[s][1]} />
                <Alert cx={x + 26} cy={y + 17} r={8} />
              </g>
            )}
          </g>
        );
      })}

      {/* the AI pass sweeping every module */}
      <g className="il-scan-x" style={{ '--scan': '232px' }}>
        <rect x="12" y="52" width="22" height="170" fill={C.purple} opacity="0.08" />
        <rect x="30" y="52" width="3" height="170" rx="1.5" fill={C.purple} opacity="0.7" />
      </g>

      <path d="M274 125 H296" pathLength="1" stroke={C.purple} strokeWidth="2" className="il-draw" style={d(1.5)} />
      <circle r="3.5" fill={C.purple} className="il-travel" style={{ offsetPath: "path('M274 125 H296')", '--d': '2s' }} />

      <Card x={296} y={14} w={212} h={222} className="il-in" style={d(0.3)}>
        <text x="314" y="40" className="il-t" fontSize="13" fontWeight="600" fill={C.ink}>What we found</text>
      </Card>
      {rows.map((r, i) => (
        <g key={r.label} className="il-in" style={d(1.6 + i * 0.15)}>
          <rect x="310" y={56 + i * 38} width="184" height="30" rx="8" fill="#FAF9FE" stroke={C.lilacLine} />
          <circle cx="326" cy={71 + i * 38} r="5" fill={r.color} />
          <text x="340" y={75 + i * 38} className="il-t" fontSize="12" fontWeight="500" fill={C.inkSoft}>{r.label}</text>
          <text x="482" y={75 + i * 38} textAnchor="end" className="il-t" fontSize="12" fontWeight="700" fill={r.color}>{r.value}</text>
        </g>
      ))}
      <Chip x={310} y={178} w={184} h={34} fill={C.greenBg} stroke="none" className="il-pop" style={d(2.15)}>
        <Tick cx={332} cy={195} r={9} />
        <text x="350" y="200" className="il-t" fontSize="12" fontWeight="600" fill={C.green}>Diagnosis in days</text>
      </Chip>
    </Canvas>
  );
}

/* ---------------------------------------------------------------------- */
/* 2. Product Engineering: you bring a direction, not a spec; the right    */
/*    questions turn it into something buildable; the product takes shape */
/*    and iterates until it’s what you meant.                              */
/* ---------------------------------------------------------------------- */
export function ProductCompact({ className = 'sv-il-compact' } = {}) {
  const questions = ['What must it do?', 'Who uses it?', 'Where does it break?'];
  return (
    <Canvas className={className}>
      {/* the direction: rough, hand-drawn, not a spec */}
      <Card x={12} y={22} w={150} h={172} className="il-in" style={d(0)}>
        <text x="28" y="47" className="il-t" fontSize="12" fontWeight="600" fill={C.ink}>Your direction</text>
        <circle cx="140" cy="43" r="10" stroke={C.orange} strokeWidth="2" />
        <circle cx="140" cy="43" r="4.5" stroke={C.orange} strokeWidth="2" />
        <text x="28" y="180" className="il-t" fontSize="11" fill={C.muted}>not a spec</text>
      </Card>
      {[74, 100, 126, 152].map((y, i) => (
        <path
          key={y}
          d={`M28 ${y} q8 -7 16 0 t16 0 t16 0 t16 0 t16 0${i % 2 ? '' : ' t16 0'}`}
          pathLength="1"
          stroke={i === 0 ? C.purple : C.lilacLine}
          strokeWidth="2.5"
          strokeLinecap="round"
          className="il-draw"
          style={d(0.25 + i * 0.15)}
        />
      ))}

      {/* the right questions */}
      {questions.map((q, i) => {
        const y = 34 + i * 54;
        return (
          <g key={q}>
            <path d={`M162 108 C170 108 168 ${y + 15} 176 ${y + 15}`} pathLength="1" stroke={C.lilacLine} strokeWidth="1.6" className="il-draw" style={d(0.8 + i * 0.15)} />
            <Chip x={176} y={y} w={164} h={30} className="il-pop" style={d(0.9 + i * 0.18)}>
              <circle cx="194" cy={y + 15} r="9" fill={C.purple} />
              <text x="194" y={y + 19.5} textAnchor="middle" className="il-t" fontSize="12" fontWeight="700" fill="#fff">?</text>
              <text x="210" y={y + 19.5} className="il-t" fontSize="12" fontWeight="600" fill={C.ink}>{q}</text>
            </Chip>
            <path d={`M340 ${y + 15} C348 ${y + 15} 348 100 356 100`} pathLength="1" stroke={C.lilacLine} strokeWidth="1.6" className="il-draw" style={d(1.3 + i * 0.12)} />
            <circle r="3" fill={C.orange} className="il-travel" style={{ offsetPath: `path('M340 ${y + 15} C348 ${y + 15} 348 100 356 100')`, '--d': `${1.8 + i * 0.5}s` }} />
          </g>
        );
      })}

      {/* the product taking shape */}
      <Card x={356} y={14} w={152} h={172} className="il-in" style={d(0.4)}>
        <path d="M356 38 H508" stroke={C.lilacLine} />
        <circle cx="370" cy="26" r="3.5" fill={C.lilacLine} />
        <circle cx="381" cy="26" r="3.5" fill={C.lilacLine} />
        <circle cx="392" cy="26" r="3.5" fill={C.lilacLine} />
      </Card>
      <rect x="370" y="50" width="124" height="40" rx="8" fill={C.lilac} className="il-pop" style={d(1.5)} />
      <Bar x={380} y={62} w={70} h={7} color={C.purple} delay={1.65} />
      <Bar x={380} y={75} w={96} h={6} color={C.lilacLine} delay={1.7} />
      <rect x="370" y="100" width="58" height="40" rx="8" fill="#F6F3FF" stroke={C.lilacLine} className="il-pop" style={d(1.75)} />
      <rect x="436" y="100" width="58" height="40" rx="8" fill="#F6F3FF" stroke={C.lilacLine} className="il-pop" style={d(1.85)} />
      <rect x="370" y="152" width="72" height="22" rx="11" fill={C.orange} className="il-pop" style={d(2)} />

      {/* iterate until it’s what you meant */}
      {['v1', 'v2', 'v3'].map((v, i) => (
        <Chip key={v} x={356 + i * 52} y={204} w={44} h={28} fill={i === 2 ? C.purple : '#fff'} stroke={i === 2 ? 'none' : C.lilacLine} className="il-pop" style={d(2.1 + i * 0.2)}>
          <text x={378 + i * 52} y="222" textAnchor="middle" className="il-t" fontSize="12" fontWeight="600" fill={i === 2 ? '#fff' : C.muted}>{v}</text>
        </Chip>
      ))}
      <Chip x={12} y={206} w={206} h={32} className="il-pop" style={d(2.6)}>
        <Tick cx={32} cy={222} r={9} />
        <text x="48" y="227" className="il-t" fontSize="12" fontWeight="600" fill={C.ink}>Built to what you meant</text>
      </Chip>
    </Canvas>
  );
}

/* ---------------------------------------------------------------------- */
/* 3. AI-Native Development: AI trained on your own data, built into your  */
/*    real workflow (not bolted on), measured against a target.            */
/* ---------------------------------------------------------------------- */
export function AICompact({ className = 'sv-il-compact' } = {}) {
  const data = ['Your products', 'Your customers', 'Your processes', 'Your edge cases'];
  const flow = ['Request comes in', 'AI routes & drafts', 'Team approves'];
  return (
    <Canvas className={className}>
      <text x="14" y="24" className="il-t il-in" style={d(0)} fontSize="11" fontWeight="600" fill={C.muted}>YOUR DATA</text>
      {data.map((t, i) => {
        const y = 36 + i * 46;
        const link = `M144 ${y + 16} C186 ${y + 16} 190 125 218 125`;
        return (
          <g key={t}>
            <path d={link} pathLength="1" stroke={C.lilacLine} strokeWidth="1.6" className="il-draw" style={d(0.5 + i * 0.1)} />
            <circle r="3" fill={C.purple} className="il-travel" style={{ offsetPath: `path('${link}')`, '--d': `${1.2 + i * 0.6}s` }} />
            <Chip x={12} y={y} w={132} h={32} className="il-in" style={d(0.1 + i * 0.1)}>
              <g stroke={C.purple} strokeWidth="1.6">
                <ellipse cx="31" cy={y + 11} rx="7" ry="2.6" />
                <path d={`M24 ${y + 11} v10 c0 1.4 3.1 2.6 7 2.6 s7 -1.2 7 -2.6 v-10`} />
              </g>
              <text x="46" y={y + 20.5} className="il-t" fontSize="12" fontWeight="600" fill={C.ink}>{t}</text>
            </Chip>
          </g>
        );
      })}

      {/* the model: trained on yours, not generic data */}
      <g className="il-pop" style={d(0.8)}>
        <circle cx="262" cy="125" r="58" stroke={C.purple} strokeOpacity="0.3" className="il-pulse" style={d(1.2)} />
        <circle cx="262" cy="125" r="44" fill={C.violet} />
        <circle cx="262" cy="125" r="44" stroke={C.purple} strokeWidth="2" />
        <Spark cx={262} cy={120} s={14} color="#fff" />
        <text x="262" y="150" textAnchor="middle" className="il-t" fontSize="11" fontWeight="700" fill="#fff">AI</text>
      </g>
      <text x="262" y="204" textAnchor="middle" className="il-t il-in" style={d(1)} fontSize="12" fontWeight="600" fill={C.ink}>Trained on your data</text>

      <path d="M306 125 C322 125 324 86 340 86" pathLength="1" stroke={C.purple} strokeWidth="2" className="il-draw" style={d(1.2)} />
      <circle r="3.5" fill={C.orange} className="il-travel" style={{ offsetPath: "path('M306 125 C322 125 324 86 340 86')", '--d': '1.8s' }} />

      {/* built into how work actually happens */}
      <Card x={340} y={16} w={168} h={136} className="il-in" style={d(0.6)}>
        <text x="356" y="40" className="il-t" fontSize="12" fontWeight="600" fill={C.ink}>Your workflow</text>
      </Card>
      {flow.map((t, i) => (
        <g key={t}>
          <g className="il-in" style={d(1.3 + i * 0.12)}>
            <circle cx="364" cy={64 + i * 28} r="8" stroke={C.lilacLine} strokeWidth="2" />
            <text x="380" y={68 + i * 28} className="il-t" fontSize="11.5" fill={C.inkSoft}>{t}</text>
          </g>
          <Tick cx={364} cy={64 + i * 28} r={8} className="il-pop" style={d(1.7 + i * 0.25)} />
        </g>
      ))}

      {/* measured against a target */}
      <Card x={340} y={164} w={168} h={72} className="il-in" style={d(0.8)}>
        <text x="356" y="186" className="il-t" fontSize="12" fontWeight="600" fill={C.ink}>Outcome measured</text>
        <path d="M356 212 H472" stroke={C.lilacLine} strokeDasharray="3 4" />
      </Card>
      <path d="M356 224 L378 218 L398 220 L420 210 L442 206 L470 194" pathLength="1" stroke={C.purple} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="il-draw" style={d(2)} />
      <Tick cx={490} cy={194} r={9} className="il-pop" style={d(2.5)} />
    </Canvas>
  );
}

/* ---------------------------------------------------------------------- */
/* 4. Dedicated Engineering Teams: a team on your business with a direct   */
/*    line to you (zero handoffs), full-stack, talks to your real users,   */
/*    starts small and grows with you.                                     */
/* ---------------------------------------------------------------------- */
export function TeamCompact({ className = 'sv-il-compact' } = {}) {
  const team = [280, 326, 372];
  const later = [418, 464];
  // Design first, then build, test, ship; AI runs under every role
  // (founders, 2026-10-19)
  const skills = [
    { t: 'Design', x: 252, w: 46 },
    { t: 'Frontend', x: 301, w: 56 },
    { t: 'Backend', x: 360, w: 54 },
    { t: 'QA', x: 417, w: 30 },
    { t: 'Product', x: 450, w: 50 },
  ];
  const line = 'M136 124 H244';
  return (
    <Canvas className={className}>
      <Card x={12} y={64} w={124} h={120} className="il-in" style={d(0)}>
        <Person cx={74} cy={106} r={26} color={C.ink} />
        <text x="74" y="154" textAnchor="middle" className="il-t" fontSize="13" fontWeight="600" fill={C.ink}>You</text>
        <text x="74" y="170" textAnchor="middle" className="il-t" fontSize="11" fill={C.muted}>Founder</text>
      </Card>

      {/* one direct line: no layers in between */}
      <path d={line} pathLength="1" stroke={C.purple} strokeWidth="2.5" className="il-draw" style={d(0.6)} />
      <circle r="3.5" fill={C.orange} className="il-travel" style={{ offsetPath: `path('${line}')`, '--d': '1.2s' }} />
      <circle r="3.5" fill={C.purple} className="il-travel" style={{ offsetPath: "path('M244 124 H136')", '--d': '2.4s' }} />
      <Chip x={146} y={90} w={88} h={24} fill={C.lilac} stroke="none" className="il-pop" style={d(0.9)}>
        <text x="190" y="106" textAnchor="middle" className="il-t" fontSize="11" fontWeight="600" fill={C.purple}>Zero handoffs</text>
      </Chip>
      <Chip x={146} y={134} w={88} h={24} className="il-pop" style={d(1)}>
        <text x="190" y="150" textAnchor="middle" className="il-t" fontSize="11" fontWeight="600" fill={C.ink}>Direct access</text>
      </Chip>

      <Card x={244} y={14} w={264} h={188} className="il-in" style={d(0.2)}>
        <text x="262" y="40" className="il-t" fontSize="13" fontWeight="600" fill={C.ink}>Your dedicated team</text>
      </Card>
      {team.map((cx, i) => (
        <g key={cx} className="il-pop" style={d(0.5 + i * 0.12)}>
          <Person cx={cx} cy={78} r={19} />
        </g>
      ))}
      {/* the team grows with the work */}
      {later.map((cx, i) => (
        <g key={cx} className="il-pop" style={d(1.8 + i * 0.15)}>
          <circle cx={cx} cy={78} r="22" stroke={C.orange} strokeDasharray="3 3" />
          <Person cx={cx} cy={78} r={19} color={C.purple} />
        </g>
      ))}
      <Chip x={392} y={106} w={96} h={22} fill={C.orangeBg} stroke="none" className="il-pop" style={d(2.1)}>
        <text x="440" y="121" textAnchor="middle" className="il-t" fontSize="11" fontWeight="600" fill={C.orange}>+2 as you grow</text>
      </Chip>
      {skills.map((s, i) => (
        <Chip key={s.t} x={s.x} y={136} w={s.w} h={22} fill="#F6F3FF" stroke={C.lilacLine} className="il-in" style={d(1 + i * 0.1)}>
          <text x={s.x + s.w / 2} y="151" textAnchor="middle" className="il-t" fontSize="10" fontWeight="600" fill={C.inkSoft}>{s.t}</text>
        </Chip>
      ))}
      {/* every role works through AI: a line from each skill down to the AI bar */}
      {skills.map((s) => (
        <path key={`ai-${s.t}`} d={`M${s.x + s.w / 2} 158 V168`} pathLength="1" stroke={C.purple} strokeWidth="1.5" className="il-draw" style={d(1.7)} />
      ))}
      <g className="il-in" style={d(1.9)}>
        <rect x="252" y="168" width="248" height="22" rx="11" fill={C.purple} />
        <path d="M368 174 L369.4 177.6 L373 179 L369.4 180.4 L368 184 L366.6 180.4 L363 179 L366.6 177.6 Z" fill="#fff" />
        <text x="382" y="183" textAnchor="middle" className="il-t" fontSize="11" fontWeight="700" fill="#fff">AI</text>
      </g>

      <Chip x={12} y={206} w={208} h={32} className="il-pop" style={d(1.5)}>
        <circle cx="30" cy="222" r="6" fill={C.lilacLine} />
        <circle cx="42" cy="222" r="6" fill={C.purple} opacity="0.6" />
        <circle cx="54" cy="222" r="6" fill={C.violet} opacity="0.8" />
        <text x="68" y="227" className="il-t" fontSize="12" fontWeight="600" fill={C.ink}>Talks to your real users</text>
      </Chip>
      <Chip x={244} y={212} w={264} h={28} fill={C.greenBg} stroke="none" className="il-in" style={d(2.3)}>
        <path d="M268 232 l6 -8 l6 4 l8 -10" stroke={C.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="298" y="230.5" className="il-t" fontSize="12" fontWeight="600" fill={C.green}>Start small. Scale as you grow.</text>
      </Chip>
    </Canvas>
  );
}

// Each service renders both drawings; CSS shows the wide one on tablet and
// desktop and the compact one on phones (.sv-il-wide / .sv-il-compact).
export const RescueIllustration = () => <><RescueWide /><RescueCompact /></>;
export const ProductIllustration = () => <><ProductWide /><ProductCompact /></>;
export const AIIllustration = () => <><AIWide /><AICompact /></>;
export const TeamIllustration = () => <><TeamWide /><TeamCompact /></>;
