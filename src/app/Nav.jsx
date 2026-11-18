'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { SERVICE_NAV, num } from './services/nav/serviceList';

const NAV_LINKS = [
  // order (founders, 2026-11-02): Services, Our Work, How We Work, About, Careers.
  // No "Home" link: the logo goes home (founders, 2026-11-02)
  { label: 'Services', href: '/services', sub: SERVICE_NAV.map((s) => ({ label: s.label, href: `/services#${s.id}` })) },
  { label: 'Our Work', href: '/case-studies' }, // was "Case Study" (founders, 2026-10-19)
  // dropdown: Meridian™ (copy AW-3, 2026-11-12; was AI-Native Delivery)
  { label: 'How We Work', href: '/how-we-work', sub: [{ label: 'Meridian™', href: '/how-we-work#meridian' }] },
  { label: 'About', href: '/about' }, // was "About Us" (founders, 2026-11-02)
  // { label: 'Products', href: '/#products' }, // hidden for now (client, 2026-10-09); no Products page yet
  { label: 'Careers', href: '/careers' },
  // 'Contact' removed: the CTA button goes there (founders, 2026-10-13)
];

const CTA = { label: 'Book a Call', href: '/contact' }; // was "Contact Us" (founders, 2026-11-02), before that "Let’s Discuss"

export function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

// exact match, or a sub-page of that section (e.g. /case-studies/audiofy)
const isCurrent = (href, pathname) => href === pathname || (href !== '/' && !href.includes('#') && pathname.startsWith(`${href}/`));

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

// Desktop dropdown (Services → the four services, copy AW-2; How We Work →
// Meridian™, copy AW-3; numbered only when there's more than one). Opens on hover or keyboard focus via CSS; the
// chevron button also toggles it for touch / click users. Escape closes.
function NavDropdown({ link, pathname }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const menuId = `site-nav-sub-${link.label.toLowerCase().replace(/\s+/g, '-')}`;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); ref.current?.querySelector('a')?.focus(); } };
    const onPointer = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  return (
    <div className="site-nav-item" ref={ref} data-open={open || undefined}>
      <Link href={link.href} className="site-nav-link" aria-current={isCurrent(link.href, pathname) ? 'page' : undefined}>
        {link.label}
      </Link>
      <button
        type="button"
        className="site-nav-sub-toggle"
        aria-label={`${link.label} menu`}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
      >
        <ChevronIcon />
      </button>
      <div className="site-nav-sub" id={menuId}>
        <ul>
          {link.sub.map((s, i) => (
            <li key={s.href}>
              <Link href={s.href} className="site-nav-sub-link" onClick={() => setOpen(false)}>
                {link.sub.length > 1 && <span className="site-nav-sub-num" aria-hidden="true">{num(i)}</span>}
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function NavLinks({ pathname, onNavigate, mobile = false }) {
  return NAV_LINKS.map((l) => {
    if (l.sub && !mobile) return <NavDropdown key={l.label} link={l} pathname={pathname} />;
    const link = (
      <Link
        key={l.label}
        href={l.href}
        className="site-nav-link"
        aria-current={isCurrent(l.href, pathname) ? 'page' : undefined}
        onClick={onNavigate}
      >
        {l.label}
      </Link>
    );
    if (!l.sub) return link;
    // mobile menu: sub-items listed, indented, under their parent
    return (
      <div key={l.label} className="site-nav-group">
        {link}
        {l.sub.map((s) => (
          <Link key={s.href} href={s.href} className="site-nav-link site-nav-link--sub" onClick={onNavigate}>
            {s.label}
          </Link>
        ))}
      </div>
    );
  });
}

function NavCta({ onNavigate }) {
  return (
    <Link href={CTA.href} className="site-nav-cta" onClick={onNavigate}>
      {CTA.label}
      <span className="site-nav-cta-arrow" aria-hidden="true">→</span>
    </Link>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const close = () => setMenuOpen(false);

  // Publish the header’s height so pages can offset sticky elements / pull
  // full-bleed heroes up underneath it (--site-header-h).
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const root = document.documentElement;
    const ro = new ResizeObserver(() => root.style.setProperty('--site-header-h', `${el.offsetHeight}px`));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    const onPointer = (e) => { if (!headerRef.current?.contains(e.target)) setMenuOpen(false); };
    const onResize = () => { if (window.innerWidth > 1100) setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <nav className="site-nav" aria-label="Main">
        <Link href="/" className="site-nav-logo" aria-label="Aripra home">
          {/* Mark + "aripra" word (client, 2026-10-13): Figma "Logo for light
              mode" with its drop-shadow filters rebuilt (Figma clipped them to
              tight boxes, which drew hard grey edges). Served as-is
              (unoptimized): a small fixed logo gains nothing from the
              optimizer, and a stuck optimizer request once blocked the whole
              page load in dev. */}
          <Image src="/brand/aripra-logo-dark.svg" alt="" width={114} height={37} unoptimized preload />
        </Link>
        {/* menu row right-justified, beside the button (founders, 2026-10-13) */}
        <div className="site-nav-links">
          <NavLinks pathname={pathname} />
        </div>
        <span className="site-nav-divider" aria-hidden="true" />
        <div className="site-nav-actions">
          <NavCta />
          <button
            type="button"
            className="site-nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="site-nav-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="site-nav-menu"
              className="site-nav-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <NavLinks pathname={pathname} onNavigate={close} mobile />
              <NavCta onNavigate={close} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
