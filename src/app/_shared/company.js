// Single source of truth for company facts used across pages.
export const FOUNDED_YEAR = 2011; // client corrected 2026-11-04 (was 2012, About copy AW-04)

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
