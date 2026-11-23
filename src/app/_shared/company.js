// Single source of truth for company facts used across pages.
export const FOUNDED_YEAR = 2011; // client corrected 2026-11-04 (was 2012, About copy AW-04)

// The live site's address, used for share previews, the sitemap and
// robots.txt. Set NEXT_PUBLIC_SITE_URL on the server once the real domain is
// live (e.g. https://www.aripratech.com); until then this default is used.
// TODO: confirm the final domain (2026-11-23).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://aripratech.com').replace(/\/$/, '');
export const SITE_NAME = 'Aripra Infotech';

// Google Tag Manager container (founders, 2026-11-23: Tag Manager only; GA4
// G-9KW20RXEY1 is set up inside it, not added to the site separately, so
// visits aren't counted twice). Only loads when NEXT_PUBLIC_GTM_ID is set on
// the server, which is done on the day of the domain switch (GTM-KF2R8CT), so
// the test server never sends data. Read at build time.
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

// Google Search Console ownership check, carried over unchanged from the
// current aripratech.com so its history and ownership continue.
export const GOOGLE_SITE_VERIFICATION = 'T34349u7Qa1RvakvSpK8IgnZ7pm3OcABCzXQzQw-4Lc';

// Whole years in business — updates itself every January.
export const yearsInBusiness = () => new Date().getFullYear() - FOUNDED_YEAR;

// Same, spelled out for running copy ("Fourteen years."). Falls back to digits.
const WORDS = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty'];
export const yearsInBusinessWords = () => WORDS[yearsInBusiness() - 10] ?? String(yearsInBusiness());

// Where every "Book a 30-Minute Call" goes: the Contact page, which hosts the
// Calendly embed (client: one place to book).
export const BOOKING_HREF = '/contact';
// Direct event link, so the embed opens straight on the calendar (the
// account's event list left a big empty, off-centre page).
// TODO: swap for the "Book a 30-minute call" event once it exists — for now
// the account's only event, "Global Leads Call" (the old us-west-coast-call
// link stopped working, 2026-10-19).
export const CALENDLY_URL = 'https://calendly.com/akash-robert-aripratech/us-lead-call-west-pacific-mountain-clone';

// Careers page "Send Us Your Work" + "reach out" links (HR inbox, founders
// 2026-10-19); this is the only place it’s set.
export const CAREERS_EMAIL = 'hr@aripratech.com';
export const CAREERS_HREF = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent('Careers: here’s what I’ve built')}`;
