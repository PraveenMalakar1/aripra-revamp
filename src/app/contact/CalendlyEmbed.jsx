'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { CALENDLY_URL } from '../_shared/company';

// Calendly inline booking, as a plain lazy iframe (no third-party widget
// script). Calendly posts its content height to the parent; we use it so the
// card fits the calendar with no inner scrollbar or empty space below it.
// Calendly only sends that height when the URL names the embedding site
// (embed_domain, which its own widget script adds), so the src is built in
// the browser. CSS heights are the fallback until (or if) the message arrives.
// hide_event_type_details: calendar only (the page's left column introduces
// the call), so it fits the first screen beside the copy
const src = (host) => `${CALENDLY_URL}?embed_domain=${encodeURIComponent(host)}&embed_type=Inline&hide_gdpr_banner=1&hide_event_type_details=1`;
const noSubscribe = () => () => {};
// floor for the reported height: Calendly first reports a tiny height (26px)
// while it loads. Otherwise the card follows Calendly exactly (client: no
// empty space under the event list).
const MIN_HEIGHT = 120;

export default function CalendlyEmbed() {
  const [height, setHeight] = useState(null);
  // hostname is browser-only: null during the server render, so the iframe
  // mounts right after hydration
  const host = useSyncExternalStore(noSubscribe, () => window.location.hostname, () => null);

  useEffect(() => {
    const onMessage = (e) => {
      if (e.origin !== 'https://calendly.com') return;
      if (e.data?.event === 'calendly.page_height') {
        const h = parseInt(e.data.payload?.height, 10);
        if (h > 0) setHeight(Math.max(h, MIN_HEIGHT));
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <div className="ct-embed" style={height ? { height } : undefined}>
      {/* sits behind the iframe: visible while it loads, or if it is blocked */}
      <p className="ct-embed-fallback">
        Loading the calendar… If it doesn’t appear,{' '}
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">open it in a new tab</a>.
      </p>
      {host && <iframe src={src(host)} title="Book a 30-minute call with Aripra" loading="lazy" className="ct-embed-frame" />}
    </div>
  );
}
