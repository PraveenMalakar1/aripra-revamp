'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'motion/react';

// 40000 -> 40,000 (en-GB grouping); small numbers are unaffected
const fmt = (n) => Math.round(n).toLocaleString('en-GB');

// Counts up from 0 once visible. The final value is server-rendered (so it is
// correct without JS) and exposed to assistive tech; the animated digits are
// visual only.
export default function StatNumber({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => { el.textContent = `${prefix}${fmt(v)}${suffix}`; },
    });
    return () => controls.stop();
  }, [inView, value, prefix, suffix]);

  return (
    <>
      <span ref={ref} aria-hidden="true">{prefix}{fmt(value)}{suffix}</span>
      <span className="sr-only">{prefix}{fmt(value)}{suffix}</span>
    </>
  );
}
