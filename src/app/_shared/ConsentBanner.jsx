'use client';

import { useEffect, useState } from 'react';
import { CONSENT_OPEN_EVENT, readConsent, saveConsent } from './consent';

// Cookie consent banner (founders, 2026-11-23). Shown until the visitor
// chooses; reopened by the footer's "Cookie settings" link. Accept and Reject
// are equal buttons (UK rules: rejecting as easy as accepting).
// DRAFT wording below: to be replaced with the founders' text (and a link to
// the privacy policy once that page exists). Styles: .ck-* in shared.css.
export default function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!readConsent()) setOpen(true); // after load, so server and browser HTML match
    const reopen = () => setOpen(true);
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, []);

  // while the banner is open it sits over the back-to-top button's corner,
  // so that button steps aside until the visitor has chosen (shared.css)
  useEffect(() => {
    document.documentElement.toggleAttribute('data-cookie-banner', open);
    return () => document.documentElement.removeAttribute('data-cookie-banner');
  }, [open]);

  if (!open) return null;
  const choose = (granted) => { saveConsent(granted); setOpen(false); };

  return (
    <section className="ck" role="region" aria-label="Cookie consent">
      <p className="ck-text">
        <strong>We use cookies to see how people use this site.</strong> They help us understand which pages are
        useful so we can improve them. They’re only set if you accept.
      </p>
      <div className="ck-actions">
        <button type="button" className="hm-btn hm-btn--secondary ck-btn" onClick={() => choose(false)}>Reject</button>
        <button type="button" className="hm-btn hm-btn--primary ck-btn" onClick={() => choose(true)}>Accept</button>
      </div>
    </section>
  );
}
