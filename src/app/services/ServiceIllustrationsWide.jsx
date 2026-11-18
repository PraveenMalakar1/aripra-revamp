// Wide 960×300 header illustrations for the four services: fill the
// full-width header panel on tablet and desktop. Same stories as the compact
// 520×250 versions in ServiceIllustrations.jsx (shown on phones), laid out
// left → right. Kit + animation rules: _shared/illustrationKit.jsx, .il-*.
import { C, d, Canvas, Card, Tick, Alert, Person, Spark, Chip, Bar } from '../_shared/illustrationKit';

const Wide = ({ children }) => <Canvas w={960} h={300} className="sv-il-wide">{children}</Canvas>;
const travel = (path, delay, color = C.purple, r = 3.5) => (
  <circle r={r} fill={color} className="il-travel" style={{ offsetPath: `path('${path}')`, '--d': `${delay}s` }} />
);
const link = (path, delay, color = C.purple, width = 2) => (
  <path d={path} pathLength="1" stroke={color} strokeWidth={width} strokeLinecap="round" className="il-draw" style={d(delay)} />
);

/* ---------------------------------------------------------------------- */
/* Rescue: scan the codebase → what we found → the rebuild turning green   */
/* ---------------------------------------------------------------------- */
const STATUS = { '0-1': 'b', '2-2': 'b', '1-3': 'r', '3-0': 'r', '2-0': 'r' };
const TONE = { b: [C.redBg, C.red], r: [C.orangeBg, C.orange] };
const grid = (x0, y0, w, h, gx, gy, render) =>
  Array.from({ length: 16 }).map((_, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    return render({ i, col, x: x0 + col * (w + gx), y: y0 + row * (h + gy), s: STATUS[`${col}-${row}`] });
  });

export function RescueWide() {
  const rows = [
    { label: 'Broken', value: '2', color: C.red },
    { label: 'At risk', value: '3', color: C.orange },
    { label: 'Rebuild plan', value: 'ready', color: C.purple },
  ];
  return (
    <Wide>
      {/* 1 · diagnosis */}
      <Card x={16} y={18} w={300} h={264} className="il-in" style={d(0)}>
        <text x="34" y="46" className="il-t" fontSize="14" fontWeight="600" fill={C.ink}>Codebase diagnosis</text>
        <Chip x={234} y={29} w={66} h={24} fill={C.lilac} stroke="none">
          <text x="267" y="45" textAnchor="middle" className="il-t" fontSize="11" fontWeight="600" fill={C.purple}>AI scan</text>
        </Chip>
      </Card>
      {grid(34, 64, 56, 40, 10, 10, ({ i, x, y, col, s }) => (
        <g key={i}>
          <g className="il-pop" style={d(0.15 + i * 0.03)}>
            <rect x={x} y={y} width="56" height="40" rx="8" fill="#F6F3FF" stroke={C.lilacLine} />
            <rect x={x + 12} y={y + 17} width={20 + ((i * 7) % 14)} height="6" rx="3" fill={C.lilacLine} />
          </g>
          {s && (
            <g className="il-pop" style={d(1.3 + col * 0.12)}>
              <rect x={x} y={y} width="56" height="40" rx="8" fill={TONE[s][0]} stroke={TONE[s][1]} />
              <Alert cx={x + 28} cy={y + 20} r={9} />
            </g>
          )}
        </g>
      ))}
      <g className="il-scan-x" style={{ '--scan': '262px' }}>
        <rect x="16" y="58" width="22" height="210" fill={C.purple} opacity="0.08" />
        <rect x="34" y="58" width="3" height="210" rx="1.5" fill={C.purple} opacity="0.7" />
      </g>

      {link('M316 150 H350', 1.5)}
      {travel('M316 150 H350', 2)}

      {/* 2 · what we found */}
      <Card x={350} y={18} w={260} h={264} className="il-in" style={d(0.3)}>
        <text x="368" y="46" className="il-t" fontSize="14" fontWeight="600" fill={C.ink}>What we found</text>
      </Card>
      {rows.map((r, i) => (
        <g key={r.label} className="il-in" style={d(1.6 + i * 0.15)}>
          <rect x="366" y={62 + i * 44} width="228" height="34" rx="8" fill="#FAF9FE" stroke={C.lilacLine} />
          <circle cx="384" cy={79 + i * 44} r="5.5" fill={r.color} />
          <text x="398" y={84 + i * 44} className="il-t" fontSize="13" fontWeight="500" fill={C.inkSoft}>{r.label}</text>
          <text x="580" y={84 + i * 44} textAnchor="end" className="il-t" fontSize="13" fontWeight="700" fill={r.color}>{r.value}</text>
        </g>
      ))}
      <Chip x={366} y={208} w={228} h={40} fill={C.greenBg} stroke="none" className="il-pop" style={d(2.15)}>
        <Tick cx={390} cy={228} r={10} />
        <text x="410" y="233" className="il-t" fontSize="13" fontWeight="600" fill={C.green}>Diagnosis in days</text>
      </Chip>

      {link('M610 150 H644', 2.3)}
      {travel('M610 150 H644', 2.8)}

      {/* 3 · the proper rebuild: every problem module fixed */}
      <Card x={644} y={18} w={300} h={264} className="il-in" style={d(0.5)}>
        <text x="662" y="46" className="il-t" fontSize="14" fontWeight="600" fill={C.ink}>Rebuild</text>
        <Chip x={846} y={29} w={82} h={24} fill={C.lilac} stroke="none">
          <text x="887" y="45" textAnchor="middle" className="il-t" fontSize="11" fontWeight="600" fill={C.purple}>No patches</text>
        </Chip>
      </Card>
      {grid(662, 62, 56, 34, 10, 8, ({ i, x, y, s }) => (
        <g key={i}>
          <rect x={x} y={y} width="56" height="34" rx="8" fill="#F6F3FF" stroke={C.lilacLine} className="il-pop" style={d(0.6 + i * 0.02)} />
          {s && (
            <g className="il-pop" style={d(2.6 + i * 0.06)}>
              <rect x={x} y={y} width="56" height="34" rx="8" fill={C.greenBg} stroke={C.green} />
              <Tick cx={x + 28} cy={y + 17} r={8} />
            </g>
          )}
        </g>
      ))}
      <Chip x={662} y={234} w={150} h={34} className="il-pop" style={d(3.2)}>
        <Tick cx={683} cy={251} r={9} />
        <text x="700" y="256" className="il-t" fontSize="12.5" fontWeight="600" fill={C.ink}>Built to last</text>
      </Chip>
    </Wide>
  );
}

/* ---------------------------------------------------------------------- */
/* Product: your direction → the right questions → the product → iterate  */
/* ---------------------------------------------------------------------- */
export function ProductWide() {
  const questions = ['What must it do?', 'Who uses it?', 'Where does it break?'];
  const versions = ['v1 · first build', 'v2 · adjusted', 'v3 · what you meant'];
  return (
    <Wide>
      <Card x={16} y={22} w={196} h={208} className="il-in" style={d(0)}>
        <text x="34" y="52" className="il-t" fontSize="14" fontWeight="600" fill={C.ink}>Your direction</text>
        <circle cx="188" cy="47" r="11" stroke={C.orange} strokeWidth="2" />
        <circle cx="188" cy="47" r="5" stroke={C.orange} strokeWidth="2" />
        <text x="34" y="214" className="il-t" fontSize="12" fill={C.muted}>not a spec</text>
      </Card>
      {[84, 116, 148, 180].map((y, i) => (
        <path
          key={y}
          d={`M34 ${y} q9 -8 18 0 t18 0 t18 0 t18 0 t18 0 t18 0${i % 2 ? '' : ' t18 0 t18 0'}`}
          pathLength="1"
          stroke={i === 0 ? C.purple : C.lilacLine}
          strokeWidth="2.6"
          strokeLinecap="round"
          className="il-draw"
          style={d(0.25 + i * 0.15)}
        />
      ))}

      {questions.map((q, i) => {
        const cy = 60 + i * 70;
        const out = `M470 ${cy} C492 ${cy} 492 128 514 128`;
        return (
          <g key={q}>
            {link(`M212 126 C232 126 230 ${cy} 250 ${cy}`, 0.8 + i * 0.15, C.lilacLine, 1.8)}
            <Chip x={250} y={cy - 18} w={220} h={36} className="il-pop" style={d(0.9 + i * 0.18)}>
              <circle cx="272" cy={cy} r="10" fill={C.purple} />
              <text x="272" y={cy + 4.5} textAnchor="middle" className="il-t" fontSize="13" fontWeight="700" fill="#fff">?</text>
              <text x="292" y={cy + 4.5} className="il-t" fontSize="13" fontWeight="600" fill={C.ink}>{q}</text>
            </Chip>
            {link(out, 1.3 + i * 0.12, C.lilacLine, 1.8)}
            {travel(out, 1.9 + i * 0.5, C.orange, 3)}
          </g>
        );
      })}

      <Card x={514} y={18} w={232} h={220} className="il-in" style={d(0.4)}>
        <path d="M514 44 H746" stroke={C.lilacLine} />
        <circle cx="530" cy="31" r="4" fill={C.lilacLine} />
        <circle cx="543" cy="31" r="4" fill={C.lilacLine} />
        <circle cx="556" cy="31" r="4" fill={C.lilacLine} />
      </Card>
      <rect x="530" y="58" width="200" height="56" rx="10" fill={C.lilac} className="il-pop" style={d(1.5)} />
      <Bar x={546} y={74} w={110} h={8} color={C.purple} delay={1.65} />
      <Bar x={546} y={90} w={150} h={7} color={C.lilacLine} delay={1.7} />
      <rect x="530" y="124" width="95" height="58" rx="10" fill="#F6F3FF" stroke={C.lilacLine} className="il-pop" style={d(1.75)} />
      <rect x="635" y="124" width="95" height="58" rx="10" fill="#F6F3FF" stroke={C.lilacLine} className="il-pop" style={d(1.85)} />
      <rect x="530" y="196" width="100" height="28" rx="14" fill={C.orange} className="il-pop" style={d(2)} />

      {link('M746 128 H772', 2.1)}
      <text x="782" y="56" className="il-t il-in" style={d(2)} fontSize="11" fontWeight="700" fill={C.muted}>ITERATE</text>
      {versions.map((v, i) => {
        const last = i === versions.length - 1;
        return (
          <Chip key={v} x={782} y={70 + i * 50} w={162} h={38} fill={last ? C.purple : '#fff'} stroke={last ? 'none' : C.lilacLine} className="il-pop" style={d(2.2 + i * 0.25)}>
            <text x="863" y={94 + i * 50} textAnchor="middle" className="il-t" fontSize="12.5" fontWeight="600" fill={last ? '#fff' : C.muted}>{v}</text>
          </Chip>
        );
      })}

      <Chip x={16} y={246} w={232} h={36} className="il-pop" style={d(2.9)}>
        <Tick cx={38} cy={264} r={10} />
        <text x="56" y="269" className="il-t" fontSize="13" fontWeight="600" fill={C.ink}>Built to what you meant</text>
      </Chip>
    </Wide>
  );
}

/* ---------------------------------------------------------------------- */
/* AI: your data → model trained on it → your workflow → measured outcome  */
/* ---------------------------------------------------------------------- */
export function AIWide() {
  const data = ['Your products', 'Your customers', 'Your processes', 'Your edge cases'];
  const flow = ['Request comes in', 'AI routes & drafts', 'Team approves'];
  return (
    <Wide>
      <text x="18" y="32" className="il-t il-in" style={d(0)} fontSize="11" fontWeight="700" fill={C.muted}>YOUR DATA</text>
      {data.map((t, i) => {
        const y = 44 + i * 58;
        const path = `M190 ${y + 18} C262 ${y + 18} 266 140 338 140`;
        return (
          <g key={t}>
            {link(path, 0.5 + i * 0.1, C.lilacLine, 1.8)}
            {travel(path, 1.2 + i * 0.6, C.purple, 3)}
            <Chip x={16} y={y} w={174} h={36} className="il-in" style={d(0.1 + i * 0.1)}>
              <g stroke={C.purple} strokeWidth="1.7">
                <ellipse cx="37" cy={y + 12} rx="8" ry="3" />
                <path d={`M29 ${y + 12} v11 c0 1.6 3.6 3 8 3 s8 -1.4 8 -3 v-11`} />
              </g>
              <text x="54" y={y + 23} className="il-t" fontSize="13" fontWeight="600" fill={C.ink}>{t}</text>
            </Chip>
          </g>
        );
      })}

      <g className="il-pop" style={d(0.8)}>
        <circle cx="400" cy="140" r="80" stroke={C.purple} strokeOpacity="0.3" className="il-pulse" style={d(1.2)} />
        <circle cx="400" cy="140" r="62" fill={C.violet} />
        <circle cx="400" cy="140" r="62" stroke={C.purple} strokeWidth="2" />
        <Spark cx={400} cy={132} s={18} color="#fff" />
        <text x="400" y="170" textAnchor="middle" className="il-t" fontSize="13" fontWeight="700" fill="#fff">AI</text>
      </g>
      <text x="400" y="256" textAnchor="middle" className="il-t il-in" style={d(1)} fontSize="13" fontWeight="600" fill={C.ink}>Trained on your data</text>

      {link('M462 140 H520', 1.2)}
      {travel('M462 140 H520', 1.8, C.orange)}

      <Card x={520} y={30} w={228} h={240} className="il-in" style={d(0.6)}>
        <text x="540" y="60" className="il-t" fontSize="14" fontWeight="600" fill={C.ink}>Your workflow</text>
        <path d="M550 104 V180" stroke={C.lilacLine} strokeWidth="2" strokeDasharray="3 4" />
        <text x="540" y="250" className="il-t" fontSize="11.5" fill={C.muted}>Built into how work happens</text>
      </Card>
      {flow.map((t, i) => (
        <g key={t}>
          <g className="il-in" style={d(1.3 + i * 0.12)}>
            <circle cx="550" cy={96 + i * 46} r="10" fill="#fff" stroke={C.lilacLine} strokeWidth="2" />
            <text x="572" y={101 + i * 46} className="il-t" fontSize="13" fill={C.inkSoft}>{t}</text>
          </g>
          <Tick cx={550} cy={96 + i * 46} r={10} className="il-pop" style={d(1.7 + i * 0.25)} />
        </g>
      ))}

      {link('M748 150 H776', 2)}

      <Card x={776} y={50} w={168} h={200} className="il-in" style={d(0.8)}>
        <text x="792" y="78" className="il-t" fontSize="14" fontWeight="600" fill={C.ink}>Outcome</text>
        <text x="792" y="96" className="il-t" fontSize="11.5" fill={C.muted}>measured against target</text>
        <path d="M792 160 H928" stroke={C.orange} strokeDasharray="4 4" opacity="0.6" />
        <text x="792" y="154" className="il-t" fontSize="10" fontWeight="700" fill={C.orange}>TARGET</text>
      </Card>
      <path d="M792 226 L816 218 L838 222 L862 200 L884 192 L906 168 L924 150" pathLength="1" stroke={C.purple} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="il-draw" style={d(2.1)} />
      <Tick cx={914} cy={124} r={10} className="il-pop" style={d(2.6)} />
    </Wide>
  );
}

/* ---------------------------------------------------------------------- */
/* Teams: you → one direct line → your team (growing) → your real users    */
/* ---------------------------------------------------------------------- */
export function TeamWide() {
  const team = [380, 434, 488];
  const later = [542, 596];
  // Design first, then build, test, ship; AI runs under every role
  // (founders, 2026-10-19)
  const skills = [
    { t: 'Design', x: 350, w: 58 },
    { t: 'Frontend', x: 414, w: 70 },
    { t: 'Backend', x: 490, w: 66 },
    { t: 'QA', x: 562, w: 36 },
    { t: 'Product', x: 604, w: 62 },
  ];
  const users = [
    { w: 52, tag: 'drops off' },
    { w: 36, tag: 'works around' },
    { w: 64, tag: 'avoids' },
  ];
  return (
    <Wide>
      <Card x={16} y={66} w={170} h={168} className="il-in" style={d(0)}>
        <Person cx={101} cy={122} r={32} color={C.ink} />
        <text x="101" y="186" textAnchor="middle" className="il-t" fontSize="14" fontWeight="600" fill={C.ink}>You</text>
        <text x="101" y="205" textAnchor="middle" className="il-t" fontSize="12" fill={C.muted}>Founder</text>
      </Card>

      {link('M186 150 H338', 0.6, C.purple, 2.6)}
      {travel('M186 150 H338', 1.2, C.orange)}
      {travel('M338 150 H186', 2.4, C.purple)}
      <Chip x={204} y={108} w={116} h={28} fill={C.lilac} stroke="none" className="il-pop" style={d(0.9)}>
        <text x="262" y="126" textAnchor="middle" className="il-t" fontSize="12" fontWeight="600" fill={C.purple}>Zero handoffs</text>
      </Chip>
      <Chip x={204} y={164} w={116} h={28} className="il-pop" style={d(1)}>
        <text x="262" y="182" textAnchor="middle" className="il-t" fontSize="12" fontWeight="600" fill={C.ink}>Direct access</text>
      </Chip>

      <Card x={338} y={18} w={340} h={264} className="il-in" style={d(0.2)}>
        <text x="358" y="48" className="il-t" fontSize="14" fontWeight="600" fill={C.ink}>Your dedicated team</text>
      </Card>
      {team.map((cx, i) => (
        <g key={cx} className="il-pop" style={d(0.5 + i * 0.12)}>
          <Person cx={cx} cy={98} r={22} />
        </g>
      ))}
      {later.map((cx, i) => (
        <g key={cx} className="il-pop" style={d(1.8 + i * 0.15)}>
          <circle cx={cx} cy={98} r="26" stroke={C.orange} strokeDasharray="3 3" />
          <Person cx={cx} cy={98} r={22} color={C.purple} />
        </g>
      ))}
      <Chip x={510} y={134} w={118} h={26} fill={C.orangeBg} stroke="none" className="il-pop" style={d(2.1)}>
        <text x="569" y="151" textAnchor="middle" className="il-t" fontSize="12" fontWeight="600" fill={C.orange}>+2 as you grow</text>
      </Chip>
      {skills.map((s, i) => (
        <Chip key={s.t} x={s.x} y={168} w={s.w} h={26} fill="#F6F3FF" stroke={C.lilacLine} className="il-in" style={d(1 + i * 0.1)}>
          <text x={s.x + s.w / 2} y="185" textAnchor="middle" className="il-t" fontSize="11.5" fontWeight="600" fill={C.inkSoft}>{s.t}</text>
        </Chip>
      ))}
      {/* every role works through AI: a line from each skill down to the AI bar */}
      {skills.map((s) => (
        <path key={`ai-${s.t}`} d={`M${s.x + s.w / 2} 194 V204`} pathLength="1" stroke={C.purple} strokeWidth="1.5" className="il-draw" style={d(1.7)} />
      ))}
      <g className="il-in" style={d(1.9)}>
        <rect x="350" y="204" width="316" height="26" rx="13" fill={C.purple} />
        <path d="M492 211 L493.68 215.32 L498 217 L493.68 218.68 L492 223 L490.32 218.68 L486 217 L490.32 215.32 Z" fill="#fff" />
        <text x="514" y="221" textAnchor="middle" className="il-t" fontSize="12.5" fontWeight="700" fill="#fff">AI</text>
      </g>
      <Chip x={350} y={238} w={316} h={34} fill={C.greenBg} stroke="none" className="il-in" style={d(2.3)}>
        <path d="M372 261 l7 -9 l7 5 l9 -12" stroke={C.green} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="406" y="260" className="il-t" fontSize="13" fontWeight="600" fill={C.green}>Start small. Scale as you grow.</text>
      </Chip>

      {link('M678 150 H730', 1.4)}
      {travel('M678 150 H730', 2)}

      {/* they talk to the people who actually use the system */}
      <Card x={730} y={34} w={214} h={232} className="il-in" style={d(0.6)}>
        <text x="748" y="62" className="il-t" fontSize="14" fontWeight="600" fill={C.ink}>Your real users</text>
      </Card>
      {users.map((u, i) => {
        const y = 94 + i * 46;
        const chipX = 784 + u.w + 6;
        return (
          <g key={u.tag} className="il-in" style={d(1.6 + i * 0.15)}>
            <Person cx={762} cy={y} r={14} color={C.inkSoft} />
            <rect x="784" y={y - 4} width={u.w} height="8" rx="4" fill={C.lilacLine} />
            <Chip x={chipX} y={y - 11} w={u.tag.length * 6.4 + 18} h={22} fill={C.orangeBg} stroke="none">
              <text x={chipX + 9} y={y + 4} className="il-t" fontSize="10.5" fontWeight="700" fill={C.orange}>{u.tag}</text>
            </Chip>
          </g>
        );
      })}
      <g className="il-pop" style={d(2.4)}>
        <Tick cx={758} cy={240} r={9} />
        <text x="776" y="245" className="il-t" fontSize="12" fontWeight="600" fill={C.purple}>Requirements that hold up</text>
      </g>
    </Wide>
  );
}
