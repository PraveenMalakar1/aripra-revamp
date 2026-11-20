import Image from 'next/image';
import Link from 'next/link';

// Shared site footer (2026 Figma, node 457:243). Styles: globals.css (.site-footer).
// Items with href: null have no destination yet and render as plain text
// rather than dead links.
const COLUMNS = [
  {
    title: 'Quick Links',
    links: [
      // same order as the navbar, then Contact (homepage copy v4, 2026-11-04)
      { label: 'SERVICES', href: '/services' },
      { label: 'OUR WORK', href: '/case-studies' },
      { label: 'HOW WE WORK', href: '/how-we-work' },
      { label: 'ABOUT', href: '/about' },
      { label: 'CAREERS', href: '/careers' },
      { label: 'CONTACT', href: '/contact' },
    ],
  },
  {
    title: 'Our Products',
    hidden: true, // hidden for now (client, 2026-10-09), like the navbar Products link
    links: [
      { label: 'NNXT', href: null },
      { label: 'ICON ASSETS', href: null },
      { label: 'BARNQR', href: null },
      { label: 'DOT CLEANER', href: null },
    ],
  },
  // "Information" (Terms & Conditions, Privacy Policy: no pages yet) removed
  // (founders, 2026-11-12): brand | Quick Links (two columns) | Contact
];

// Social profiles (the Upwork rating badge was removed: founders, 2026-11-02)
const LINKEDIN_HREF = 'https://www.linkedin.com/company/aripra-infotech-pvt-ltd/'; // client, 2026-10-19 (tracking param removed)

function FooterLink({ label, href }) {
  if (!href) return <span className="site-footer-link">{label}</span>;
  return <Link href={href} className="site-footer-link">{label}</Link>;
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-card">
        <div className="site-footer-brand">
          {/* SVG logo for dark backgrounds (from the client's Figma export, with its
              clipped/doubled drop-shadow filters rebuilt so it renders cleanly) */}
          <Image src="/brand/aripra-logo-light.svg" alt="Aripra Infotech" width={185} height={60} unoptimized />
          <p>AI-Native Engineering. Built for Founders.</p>
        </div>

        {COLUMNS.filter((col) => !col.hidden).map((col) => (
          <nav key={col.title} className="site-footer-col" aria-label={col.title}>
            <h2 className="site-footer-title">{col.title}</h2>
            <ul>
              {col.links.map((l) => <li key={l.label}><FooterLink {...l} /></li>)}
            </ul>
          </nav>
        ))}

        <div className="site-footer-col site-footer-contact">
          <h2 className="site-footer-title">Contact</h2>
          <ul>
            {/* email + LinkedIn only (founders: phone removed 2026-11-18,
                Calendly is the one call to action; address removed from the
                footer completely 2026-11-20) */}
            <li>
              <Image src="/home/icon-email.svg" alt="" width={16} height={16} />
              <a href="mailto:contactus@aripratech.com" className="site-footer-link is-nowrap">contactus@aripratech.com</a>
            </li>
            {/* LinkedIn styled like the email: small icon + the company name
                (founders, 2026-11-19; was an icon on its own) */}
            <li>
              <Image src="/home/icon-linkedin.svg" alt="" width={16} height={16} />
              <a href={LINKEDIN_HREF} className="site-footer-link" target="_blank" rel="noopener noreferrer" aria-label="Aripra Infotech Pvt. Ltd. on LinkedIn (opens in a new tab)">
                Aripra Infotech Pvt. Ltd.
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="site-footer-wordmark" aria-hidden="true">
          <Image src="/home/footer-wordmark.svg" alt="" width={788} height={219.647} />
        </div>
        <p className="site-footer-copy">
          <Image src="/home/icon-copyright.svg" alt="" width={16} height={16} />
          {new Date().getFullYear()} Aripra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
