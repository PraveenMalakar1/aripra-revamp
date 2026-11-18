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

function SocialLink({ href, label, className, children }) {
  return href ? (
    <a href={href} aria-label={label} className={className} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <span aria-label={label} role="img" className={className}>{children}</span>
  );
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
            {/* contact details as supplied by the client (2026-10-09). Phone
                removed (founders, 2026-11-18: Calendly is the one call to
                action); the address kept but quieter */}
            <li>
              <Image src="/home/icon-email.svg" alt="" width={16} height={16} />
              <a href="mailto:contactus@aripratech.com" className="site-footer-link is-nowrap">contactus@aripratech.com</a>
            </li>
            <li className="is-top is-quiet">
              <span className="site-footer-icon-pin" aria-hidden="true">
                <Image src="/home/icon-location.svg" alt="" width={12.1667} height={14.8333} />
              </span>
              <span className="site-footer-link">HB-37, Scheme No 94, Musakhedi, Ring Road, Indore</span>
            </li>
          </ul>
          <div className="site-footer-social">
            <SocialLink href={LINKEDIN_HREF} label="LinkedIn">
              <Image src="/home/icon-linkedin.svg" alt="" width={24} height={24} />
            </SocialLink>
          </div>
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
