'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'motion/react';
import { CASE_STUDIES } from '../case-studies/data';
import KeyStat from '../case-studies/KeyStat';

// Homepage case-study spotlight (founders' pick "B", 2026-10-19): every study
// from the Our Work page; the centre card is large, its neighbours fan out
// smaller. Card = logo, client · project, the study's headline and its key
// numbers (`highlights`, homepage copy v4; data in case-studies/data.js),
// linking to the detail page. Under the cards, one line: the carousel
// controls and "See all our work →".
// Auto-advances every STEP_MS; paused while hovered, keyboard-focused or off
// screen, and never with reduced motion. Swipe left / right on the cards to
// move one either way (founders, 2026-11-19). Styles: .csx-* in home.css.

const STUDIES = CASE_STUDIES.filter((s) => s.href);
const STEP_MS = 3000;
const SWIPE_PX = 40; // horizontal distance that counts as a swipe
const name = (s) => (s.client ? `${s.client} · ${s.project}` : s.project);

const Arrow = ({ flip }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function CaseShowcase() {
  const n = STUDIES.length;
  const [active, setActive] = useState(0);
  const [hold, setHold] = useState(false);
  const ref = useRef(null);
  const stage = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });

  // every card as tall as the tallest one (text lengths differ), and the
  // stage exactly that tall; re-measured on resize and font load
  useEffect(() => {
    const el = stage.current;
    if (!el) return undefined;
    const measure = () => {
      el.style.removeProperty('--csx-h');
      const h = Math.max(...[...el.querySelectorAll('.csx-card-link')].map((c) => c.offsetHeight));
      el.style.setProperty('--csx-h', `${h}px`);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (hold || !inView || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setTimeout(() => setActive((a) => (a + 1) % n), STEP_MS);
    return () => clearTimeout(t);
  }, [active, hold, inView, n]);

  // swipe: a horizontal move over SWIPE_PX moves one card; vertical moves
  // stay with the page (touch-action: pan-y in CSS). A swipe doesn't also
  // open the card under the finger.
  const swipe = useRef(null);
  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse') return; // desktop has the arrows
    swipe.current = { id: e.pointerId, x0: e.clientX, y0: e.clientY, done: false };
    setHold(true);
  };
  const onPointerMove = (e) => {
    const sw = swipe.current;
    if (!sw || sw.id !== e.pointerId || sw.done) return;
    const dx = e.clientX - sw.x0;
    if (Math.abs(dx) > SWIPE_PX && Math.abs(dx) > Math.abs(e.clientY - sw.y0)) {
      sw.done = true;
      setActive((a) => (a + (dx < 0 ? 1 : -1) + n) % n);
    }
  };
  const onPointerEnd = (e) => {
    const sw = swipe.current;
    if (!sw || sw.id !== e.pointerId) return;
    setTimeout(() => { swipe.current = null; }, 0); // after the click that may follow
    setHold(false);
  };
  const onClickCapture = (e) => { if (swipe.current?.done) { e.preventDefault(); e.stopPropagation(); } };

  return (
    <div
      ref={ref}
      className="csx"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={(e) => { if (e.target.matches(':focus-visible')) setHold(true); }}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setHold(false); }}
    >
      <ul
        ref={stage}
        className="csx-stage"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onClickCapture={onClickCapture}
      >
        {STUDIES.map((s, i) => {
          let off = i - active;
          if (off > n / 2) off -= n;
          if (off < -n / 2) off += n;
          const isActive = off === 0;
          return (
            <li
              key={s.slug}
              className={isActive ? 'csx-card is-active' : 'csx-card'}
              style={{ '--off': off, '--abs': Math.abs(off) }}
              aria-hidden={!isActive || undefined}
              data-far={Math.abs(off) > 2 || undefined}
              onClick={isActive ? undefined : () => setActive(i)}
            >
              <Link href={s.href} className="csx-card-link" tabIndex={isActive ? undefined : -1}>
                <span className="csx-logo">
                  <Image src={s.image} alt={`${s.project} logo`} fill sizes="420px" />
                </span>
                <span className="csx-card-body">
                  <span className="csx-card-name">{name(s)}</span>
                  <span className="csx-card-title">{s.title}</span>
                  <span className="csx-card-stat">
                    <span className="csx-card-stat-label">Key stat</span>
                    <KeyStat highlights={s.highlights} />
                  </span>
                  <span className="csx-card-cta" aria-hidden="true">Read the case study →</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="csx-foot">
        <div className="csx-nav">
          <button type="button" className="hm-marquee-btn" aria-label="Previous case study" onClick={() => setActive((a) => (a - 1 + n) % n)}><Arrow flip /></button>
          <div className="csx-dots">
            {STUDIES.map((s, i) => (
              <button key={s.slug} type="button" className="csx-dot" aria-label={`Show ${s.project}`} aria-current={i === active || undefined} onClick={() => setActive(i)} />
            ))}
          </div>
          <button type="button" className="hm-marquee-btn" aria-label="Next case study" onClick={() => setActive((a) => (a + 1) % n)}><Arrow /></button>
        </div>
        <Link href="/case-studies" className="hm-btn hm-btn--primary">See all our work →</Link>
      </div>
    </div>
  );
}
