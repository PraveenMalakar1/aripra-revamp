// Cookie consent (founders, 2026-11-23): Google Consent Mode v2. Every Google
// tag (Tag Manager and GA4 inside it) starts "denied" and only sets cookies
// after the visitor clicks Accept in the banner (ConsentBanner.jsx). The
// choice is remembered in the browser (localStorage) and can be changed from
// the footer's "Cookie settings" link. UK GDPR / PECR: consent before
// analytics cookies, and rejecting as easy as accepting.

export const CONSENT_KEY = 'aripra-cookie-consent'; // 'granted' | 'denied'
export const CONSENT_OPEN_EVENT = 'aripra:cookie-settings'; // reopens the banner

const SIGNALS = ['ad_storage', 'ad_user_data', 'ad_personalization', 'analytics_storage'];
const all = (value) => Object.fromEntries(SIGNALS.map((s) => [s, value]));

// Runs in the page head before anything else (layout.js, beforeInteractive):
// sets the "denied" defaults, then restores a choice made on an earlier visit.
export const CONSENT_DEFAULTS_SCRIPT = `
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
gtag('consent', 'default', Object.assign(${JSON.stringify(all('denied'))}, { wait_for_update: 500 }));
gtag('set', 'ads_data_redaction', true);
try {
  if (localStorage.getItem('${CONSENT_KEY}') === 'granted') {
    gtag('consent', 'update', ${JSON.stringify(all('granted'))});
  }
} catch (e) {}
`;

// Called by the banner when the visitor chooses.
export function saveConsent(granted) {
  try { localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied'); } catch {}
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); }; // eslint-disable-line prefer-rest-params
    window.gtag('consent', 'update', all(granted ? 'granted' : 'denied'));
  }
}

export function readConsent() {
  try { return localStorage.getItem(CONSENT_KEY); } catch { return null; }
}
