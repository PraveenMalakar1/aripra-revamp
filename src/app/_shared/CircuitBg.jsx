'use client';

import { useEffect, useId, useRef } from 'react';

// Animated "circuit" background (client pick from the hero demo, 2026-10-09):
// a faint grid with circuit traces and glowing pulses travelling along them,
// faded out behind the content. Used in the homepage hero and, lighter, in
// its two dark sections. Drawn twice: a wide layout and a narrow one for
// phones, where the wide traces would be cropped off-screen (CSS swaps them).
// Ignores the pointer, pauses while off screen, static for reduced motion.
// The parent must be position: relative + overflow: hidden, with its content
// above z-index 0. CSS: .cbg-* in shared.css.
//   variant 'hero'   — 8 traces, the main moment
//   variant 'accent' — 4 slow traces at the edges, for dark panels / bands

const LAYOUTS = {
  hero: {
    wide: {
      box: [1440, 900],
      traces: [
        'M0 120 H180 V260 H320', 'M0 420 H120 V330 H260 V200', 'M1440 140 H1260 V300 H1110',
        'M1440 460 H1320 V360 H1180 V230', 'M60 900 V720 H220 V600', 'M1380 900 V700 H1220 V580',
        'M0 600 H90 V520 H200', 'M1440 640 H1350 V540 H1240',
      ],
    },
    narrow: {
      box: [390, 860],
      traces: [
        'M0 96 H64 V128 H150', 'M390 104 H320 V136 H240', 'M10 210 V330 H0',
        'M380 240 V380 H390', 'M0 470 H26 V430 H90', 'M390 500 H360 V460 H300',
      ],
    },
  },
  accent: {
    wide: {
      box: [1440, 600],
      traces: ['M0 90 H160 V200 H260', 'M1440 120 H1300 V40 H1180', 'M1440 520 H1260 V420 H1140', 'M80 600 V480 H200'],
    },
    narrow: {
      box: [390, 700],
      traces: ['M0 70 H50 V36 H130', 'M390 640 H330 V680 H250', 'M10 260 V400 H0', 'M380 420 V540 H390'],
    },
  },
};

function Layer({ id, box: [w, h], traces, kind, slow }) {
  return (
    <svg className={`cbg-svg cbg-${kind}`} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={id} width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M60 0H0V60" fill="none" stroke="rgba(201,184,255,0.07)" />
        </pattern>
      </defs>
      <rect width={w} height={h} fill={`url(#${id})`} />
      {traces.map((d, i) => (
        <g key={d}>
          <path d={d} fill="none" stroke="rgba(201,184,255,0.18)" strokeWidth="1.5" />
          <path
            d={d}
            pathLength="1000"
            fill="none"
            stroke="#C9B8FF"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="cbg-pulse"
            style={{ animationDelay: `${i * (slow ? 1.6 : 0.9)}s`, animationDuration: `${(slow ? 7 : 4.5) + (i % 3)}s` }}
          />
        </g>
      ))}
    </svg>
  );
}

export default function CircuitBg({ variant = 'hero' }) {
  const ref = useRef(null);
  // unique per instance (a page can hold several, e.g. 4 on /services)
  const uid = `cbg${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const { wide, narrow } = LAYOUTS[variant];
  const slow = variant === 'accent';

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([e]) => el.toggleAttribute('data-paused', !e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`cbg cbg--${variant}`} aria-hidden="true">
      <Layer id={`${uid}-w`} box={wide.box} traces={wide.traces} kind="wide" slow={slow} />
      <Layer id={`${uid}-n`} box={narrow.box} traces={narrow.traces} kind="narrow" slow={slow} />
    </div>
  );
}
