'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

// "What clients say" moving row (founders' pick "A", 2026-11-02): the cards
// slide right to left endlessly at SPEED; the arrows glide it one card either
// way (STEP_MS), then the auto-scroll carries on from there. Paused while
// hovered, keyboard-focused or off screen. Reduced motion: no auto-scroll,
// arrows jump without the glide. `row` and `clone` are the same card list
// (the clone, aria-hidden, makes the loop seamless). Styles: .hm-vrow-* in
// home.css.
const SPEED = 45; // px per second
const STEP_MS = 500;

const Arrow = ({ flip }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function VoicesMarquee({ row, clone }) {
  const wrap = useRef(null);
  const track = useRef(null);
  const hold = useRef(false);
  const visible = useRef(false);
  const reduced = useRef(false);
  const s = useRef({ x: 0, last: 0, anim: null });
  const inView = useInView(wrap, { amount: 0.2 });

  useEffect(() => { visible.current = inView; }, [inView]);

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf;
    const tick = (t) => {
      const st = s.current;
      const el = track.current;
      const copy = el?.firstElementChild?.offsetWidth || 0;
      const dt = st.last ? Math.min(t - st.last, 64) / 1000 : 0;
      st.last = t;
      if (st.anim) {
        const p = st.anim.ms ? Math.min((t - st.anim.t0) / st.anim.ms, 1) : 1;
        const e = 1 - (1 - p) ** 3;
        st.x = st.anim.from + (st.anim.to - st.anim.from) * e;
        if (p >= 1) st.anim = null;
      } else if (!hold.current && visible.current && !reduced.current && !document.hidden) {
        st.x -= SPEED * dt;
      }
      // keep x within one copy's width (the clone makes the wrap invisible)
      if (copy) {
        const shift = st.x <= -copy ? copy : st.x > 0 ? -copy : 0;
        if (shift) {
          st.x += shift;
          if (st.anim) { st.anim.from += shift; st.anim.to += shift; }
        }
      }
      if (el) el.style.transform = `translate3d(${st.x}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // glide to the next / previous card (+1 / -1): its left edge lands on the
  // content edge (the section's left), whatever the cards' widths
  const step = (dir) => {
    const st = s.current;
    const el = track.current;
    if (!el) return;
    const copy = el.firstElementChild.offsetWidth;
    const ref = wrap.current.parentElement.getBoundingClientRect().left - wrap.current.getBoundingClientRect().left;
    const base = st.anim ? st.anim.to : st.x;
    const lefts = [...el.querySelectorAll('.hm-voice')].flatMap((c) => [c.offsetLeft - copy, c.offsetLeft]).map((o) => base + o);
    const target = dir > 0
      ? Math.min(...lefts.filter((l) => l > ref + 2))
      : Math.max(...lefts.filter((l) => l < ref - 2));
    if (!Number.isFinite(target)) return;
    st.anim = { from: st.x, to: base - (target - ref), t0: performance.now(), ms: reduced.current ? 0 : STEP_MS };
  };

  return (
    <div
      className="hm-vrow"
      onMouseEnter={() => { hold.current = true; }}
      onMouseLeave={() => { hold.current = false; }}
      onFocus={(e) => { if (e.target.matches(':focus-visible')) hold.current = true; }}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) hold.current = false; }}
    >
      <div ref={wrap} className="hm-vrow-viewport" role="group" aria-label="Client testimonials">
        <div ref={track} className="hm-vrow-track">{row}{clone}</div>
      </div>
      <div className="hm-vrow-nav">
        <button type="button" className="hm-marquee-btn" aria-label="Previous testimonial" onClick={() => step(-1)}><Arrow flip /></button>
        <button type="button" className="hm-marquee-btn" aria-label="Next testimonial" onClick={() => step(1)}><Arrow /></button>
      </div>
    </div>
  );
}
