'use client';

import { useId, useRef, useState } from 'react';
import Link from 'next/link';
import { useInView } from 'motion/react';
import PlayOnView from '../_shared/PlayOnView';
import { SERVICES } from './servicesData';
import { SERVICE_NAV } from '../services/nav/serviceList';

// phones show short tab labels so all four fit in one row (founders,
// 2026-11-19); same short names as the Services page strip
const SHORT = Object.fromEntries(SERVICE_NAV.map((s) => [s.id, s.short]));

// "What we do" tabs (founders' pick, 2026-10-19): four tabs across the top,
// the picked service below. Auto-advances every TAB_MS, like the How We Work
// steps: the timer IS the progress bar under the active tab (advance on
// animationend), paused while hovered, while keyboard focus is inside, or off
// screen; a click restarts the countdown; reduced motion = no bar, no
// auto-advance. The panels share one grid cell, so the box is as tall as the
// longest service and never jumps; inside, the illustration fills the height
// and Learn More is pinned to the bottom, so every tab looks the same.
// Styles: .svc-* in home.css.

const num = (i) => String(i + 1).padStart(2, '0');
const TAB_MS = 7000;

function LearnMore({ s }) {
  return (
    <Link href={`/services#${s.id}`} className="hm-learn" aria-label={`Learn more about ${s.title}`}>
      Learn more <span className="hm-learn-arrow" aria-hidden="true">→</span>
    </Link>
  );
}

function Detail({ s }) {
  return (
    <div className="svc-detail">
      <PlayOnView className="hm-svc-illus svc-illus">
        <s.Illustration />
      </PlayOnView>
      <div className="svc-detail-text">
        <h3 className="hm-svc-title">{s.title}</h3>
        <p className="hm-svc-when">{s.when}</p>
        <div className="hm-prose">{s.body.map((p, i) => <p key={i}>{p}</p>)}</div>
        <LearnMore s={s} />
      </div>
    </div>
  );
}

// keyboard: arrows / Home / End move between tabs (WAI-ARIA tabs pattern)
function useTabs(count) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  const onKeyDown = (e) => {
    const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    let next = null;
    if (d) next = (active + d + count) % count;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = count - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };
  return { active, setActive, refs, onKeyDown };
}

export default function ServicesTabs() {
  const uid = useId();
  const { active, setActive, refs, onKeyDown } = useTabs(SERVICES.length);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [clicks, setClicks] = useState(0); // restarts the countdown on every click
  const rootRef = useRef(null);
  const inView = useInView(rootRef, { amount: 0.4 });
  const paused = hovered || focused || !inView;
  const next = () => setActive((a) => (a + 1) % SERVICES.length);
  return (
    <div
      ref={rootRef}
      className="svc-a"
      data-paused={paused || undefined}
      style={{ '--svc-tab-ms': `${TAB_MS}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // keyboard focus only: a mouse click also focuses the tab, and that must
      // not freeze the countdown
      onFocus={(e) => { if (e.target.matches(':focus-visible')) setFocused(true); }}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false); }}
    >
      <div className="svc-a-tabs" role="tablist" aria-label="Services" onKeyDown={(e) => { onKeyDown(e); setClicks((c) => c + 1); }}>
        {SERVICES.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => { refs.current[i] = el; }}
            type="button"
            role="tab"
            id={`${uid}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${uid}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            className="svc-a-tab"
            aria-label={s.title}
            onClick={() => { setActive(i); setClicks((c) => c + 1); }}
          >
            <span className="svc-num">{num(i)}</span>
            <span className="svc-a-label">{s.title}</span>
            <span className="svc-a-label is-short" aria-hidden="true">{SHORT[s.id]}</span>
            {/* keyed so the countdown restarts on every change */}
            {active === i && <span key={`${active}-${clicks}`} className="svc-a-progress" aria-hidden="true" onAnimationEnd={next} />}
          </button>
        ))}
      </div>
      {/* all panels share one grid cell, so the box is always as tall as the
          longest service and never jumps when the tabs change (client). The
          inactive ones stay hidden (invisible, unfocusable, not read out). */}
      <div className="svc-a-stack">
        {SERVICES.map((s, i) => (
          <div key={s.id} role="tabpanel" id={`${uid}-panel-${i}`} aria-labelledby={`${uid}-tab-${i}`} hidden={active !== i} className="hm-card svc-panel">
            {/* re-keyed when shown, so the illustration's build-up replays */}
            <Detail key={active === i ? 'shown' : 'hidden'} s={s} />
          </div>
        ))}
      </div>
    </div>
  );
}
