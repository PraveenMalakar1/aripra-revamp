'use client';

import { SERVICE_NAV, num } from './serviceList';
import useServiceSpy from './useServiceSpy';

// Demo option 2: vertical menu pinned on the left, content beside it.
export default function ServiceSidebar() {
  const { active, progress, go } = useServiceSpy();
  return (
    <nav className="sv-side" aria-label="Services">
      <p className="sv-side-label">Our services</p>
      <ol className="sv-side-list">
        {SERVICE_NAV.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="sv-side-item"
              aria-current={active === s.id ? 'true' : undefined}
              onClick={(e) => go(s.id, e)}
            >
              <span className="sv-side-num">{num(i)}</span>
              {s.label}
            </a>
          </li>
        ))}
      </ol>
      <span className="sv-side-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </span>
    </nav>
  );
}
