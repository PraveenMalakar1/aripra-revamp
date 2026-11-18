'use client';

import { useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { DELIVERY_STEPS } from './data';
import { STEP_ILLUSTRATIONS } from './StepIllustrations';

// Meridian™ section step list (Figma 541:1115). Selecting a step on the
// right shows its detail on the left.
//
// Auto-advance (client request): every STEP_MS the next step is selected. The
// timer IS the CSS progress bar on the active step’s line — when its
// animation ends we advance — so the bar and the timing can never drift, and
// pausing is just animation-play-state. Paused while hovered, while keyboard
// focus is inside (Tab, not mouse clicks), and while off screen. Clicking a step selects it and the
// countdown restarts from there. Reduced motion: no animation, so no
// auto-advance (manual only).
const STEP_MS = 7000;

export default function DeliverySteps() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  // user clicks: restarts the countdown, and turns on screen-reader
  // announcements (only for changes the user asked for, not auto-advances)
  const [clicks, setClicks] = useState(0);
  const rowRef = useRef(null);
  const inView = useInView(rowRef, { amount: 0.4 });
  const step = DELIVERY_STEPS[active];
  const Illustration = STEP_ILLUSTRATIONS[active];
  const paused = hovered || focused || !inView;

  const next = () => setActive((a) => (a + 1) % DELIVERY_STEPS.length);

  return (
    <div
      ref={rowRef}
      className="hw-steps-row"
      data-paused={paused || undefined}
      style={{ '--hw-step-ms': `${STEP_MS}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // keyboard focus only: a mouse click also focuses the button, and that
      // must not freeze the countdown
      onFocus={(e) => { if (e.target.matches(':focus-visible')) setFocused(true); }}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false); }}
    >
      <div className="hw-steps-card hw-step-panel hm-reveal" id="hw-step-panel" aria-live={clicks ? 'polite' : 'off'}>
        <div className="hw-step-illus">
          {/* keyed: each step change remounts the art, so it fades in and its build-up animation replays */}
          <div key={active} className="hw-il-wrap"><Illustration /></div>
        </div>
        <p className="hw-step-detail">{step.detail ?? step.summary}</p>
        {step.outcome && <p className="hw-step-outcome">Outcome: {step.outcome}</p>}
      </div>

      <ol className="hw-steps-card hw-step-list hm-reveal">
        {DELIVERY_STEPS.map((s, i) => (
          <li key={s.title}>
            <button
              type="button"
              className="hw-step"
              aria-pressed={i === active}
              aria-controls="hw-step-panel"
              onClick={() => { setActive(i); setClicks((c) => c + 1); }}
            >
              <span className="hw-step-marker" aria-hidden="true">
                <span className="hw-step-num">{i + 1}</span>
                <span className="hw-step-line">
                  {/* keyed so the countdown restarts on every change, even re-clicking the same step */}
                  {i === active && <span key={`${active}-${clicks}`} className="hw-step-progress" onAnimationEnd={next} />}
                </span>
              </span>
              <span className="hw-step-text">
                <span className="hw-step-title">{s.title}</span>
                <span className="hw-step-summary">{s.summary}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
