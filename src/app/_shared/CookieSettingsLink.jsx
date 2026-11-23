'use client';

import { CONSENT_OPEN_EVENT } from './consent';

// Footer link that reopens the cookie banner, so visitors can change their
// choice at any time (UK rules: withdrawing consent as easy as giving it).
export default function CookieSettingsLink({ className }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}>
      Cookie settings
    </button>
  );
}
