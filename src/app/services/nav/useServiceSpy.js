'use client';

import { useCallback, useEffect, useState } from 'react';
import { SERVICE_NAV } from './serviceList';

// Scroll-spy for the services sidebar:
//  - active: id of the service crossing the middle of the viewport
//  - progress: 0–1 scroll progress through the services run
//  - visible: the services run is under the header (the mobile/tablet strip
//    only shows then, never over the hero, intro or footer)
//  - go(id, e): smooth-scroll to a service (honours reduced motion)
export default function useServiceSpy() {
  const [active, setActive] = useState(SERVICE_NAV[0].id);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = SERVICE_NAV.map((s) => document.getElementById(s.id)).filter(Boolean);
    const run = document.querySelector('.sv-services');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-45% 0px -45% 0px' },
    );
    sections.forEach((s) => io.observe(s));

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!run) return;
        const r = run.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        setProgress(total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0);
        const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--site-header-h')) || 82;
        setVisible(r.top <= headerH + 40 && r.bottom >= headerH + 160);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const go = useCallback((id, e) => {
    const target = document.getElementById(id);
    if (!target) return;
    e?.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', `${location.search}#${id}`);
    setActive(id);
  }, []);

  return { active, progress, visible, go };
}
