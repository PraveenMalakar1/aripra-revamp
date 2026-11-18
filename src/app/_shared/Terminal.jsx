'use client';

import { useRef } from 'react';
import { JetBrains_Mono } from 'next/font/google';
import { useInView } from 'motion/react';

const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

// Re-creation of the Figma terminal image (420:832) as real text, so it stays
// sharp at any density and can "type" in. Each line is revealed with a
// stepped clip (one step per character) once the terminal scrolls into view.
// Without JS / with reduced motion every line is simply shown.
const LINES = [
  { cls: 'is-muted', parts: [['▸ ', 'hm-term-arrow'], ['analyzing requirements…']] },
  { parts: [['scaffolding '], ['saas-platform', 'hm-term-cyan']] },
  { parts: [['wiring '], ['ai copilot', 'hm-term-orange'], [' + guardrails']] },
  { cls: 'is-ok is-highlight', parts: [['✓ 214 tests passing']] },
  { cls: 'is-ok', parts: [['✓ deploy → production']] },
  { parts: [['ready in '], ['6 weeks', 'hm-term-strong']], cursor: true },
];

const CHAR_MS = 28;
const LINE_PAUSE_MS = 260;

// Static typing schedule: each line starts after the previous one finishes.
const TIMED = LINES.reduce((acc, line) => {
  const prev = acc[acc.length - 1];
  const start = prev ? prev.start + prev.chars * CHAR_MS + LINE_PAUSE_MS : 0;
  const chars = line.parts.reduce((n, [t]) => n + [...t].length, 0);
  return [...acc, { ...line, chars, start }];
}, []);
const CURSOR_AT = (({ start, chars }) => start + chars * CHAR_MS)(TIMED[TIMED.length - 1]);

export default function Terminal({ bare = false }) {
  const ref = useRef(null);
  const play = useInView(ref, { once: true, amount: 0.4 });
  return (
    <div ref={ref} className={`hm-term${bare ? ' is-bare' : ''} ${mono.className}`} data-play={play || undefined} role="img" aria-label="Aripra build agent: analyzing requirements, scaffolding a SaaS platform, wiring an AI copilot with guardrails, 214 tests passing, deployed to production. Ready in 6 weeks.">
      {/* `bare` drops the window title bar (About page uses the body only) */}
      {!bare && (
        <div className="hm-term-bar" aria-hidden="true">
          <span className="hm-term-dot" style={{ background: '#FF5F57' }} />
          <span className="hm-term-dot" style={{ background: '#FEBC2E' }} />
          <span className="hm-term-dot" style={{ background: '#28C840' }} />
          <span className="hm-term-name">aripra-agent · build</span>
        </div>
      )}
      <div className="hm-term-body" aria-hidden="true">
        {TIMED.map((line, i) => {
          const style = { '--chars': line.chars, '--delay': `${line.start}ms`, '--dur': `${line.chars * CHAR_MS}ms` };
          return (
            <div key={i} className={`hm-term-line ${line.cls || ''}`}>
              <span className="hm-term-type" style={style}>
                {line.parts.map(([t, c], j) => <span key={j} className={c}>{t}</span>)}
              </span>
              {line.cursor && <span className="hm-term-cursor" style={{ '--delay': `${CURSOR_AT}ms` }} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
