'use client';

import { useEffect, useRef } from 'react';
import { SERVICE_NAV, num } from './serviceList';
import useServiceSpy from './useServiceSpy';

// Tablet / phone services nav (≤1100px, where the sidebar is hidden): a thin
// strip attached under the navbar, like the case-study breadcrumb strip. Only
// shown while the services run is on screen; highlights the current service,
// tap to jump; thin progress line along the bottom. Phones use short labels.
export default function ServiceStrip() {
  const { active, progress, visible, go } = useServiceSpy();
  const listRef = useRef(null);

  // keep the active tab in view when the strip scrolls sideways (phones)
  useEffect(() => {
    const el = listRef.current?.querySelector('[aria-current="true"]');
    el?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [active]);

  return (
    <nav className="sv-strip" aria-label="Services" data-visible={visible || undefined} inert={!visible}>
      <div className="sv-strip-inner">
        <ol className="sv-strip-list" ref={listRef}>
          {SERVICE_NAV.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="sv-strip-item"
                aria-current={active === s.id ? 'true' : undefined}
                onClick={(e) => go(s.id, e)}
              >
                <span className="sv-strip-num">{num(i)}</span>
                <span className="sv-strip-full">{s.label}</span>
                <span className="sv-strip-short" aria-hidden="true">{s.short}</span>
              </a>
            </li>
          ))}
        </ol>
        <span className="sv-strip-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
        </span>
      </div>
    </nav>
  );
}
