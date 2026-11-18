'use client';

import { useRef } from 'react';
import { useInView } from 'motion/react';

// Holds an illustration’s build-up animation on its first frame until it
// scrolls into view (see [data-il-wait] in shared.css), then plays it once.
export default function PlayOnView({ className, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  return (
    <div ref={ref} className={className} data-il-wait={inView ? undefined : ''}>
      {children}
    </div>
  );
}
