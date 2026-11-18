import Image from 'next/image';
import { TESTIMONIALS } from './voicesData';
import VoicesMarquee from './VoicesMarquee';

// "From other founders we’ve worked with" (copy v4; was "What clients say") (founders, 2026-10-19, after the old site's testimonials
// block): rating pill then heading, centred; the testimonials in a moving row
// with arrows (founders' pick "A", 2026-11-02); then a client-logo marquee. Testimonial copy is
// verbatim from the old site. Logos: public/home/clients/ (client supplied).
const LOGOS = [
  { name: 'Lumasoft', src: '/home/clients/lumasoft.png', w: 268 },
  { name: 'OctoPro', src: '/home/clients/octopro.png', w: 272 },
  { name: 'Jamay Consulting', src: '/home/clients/jamay.png', w: 264 },
  { name: 'Casebriefsco.com', src: '/home/clients/casebriefsco.png', w: 307 },
  { name: 'Steel Traditions', src: '/home/clients/steel-traditions.png', w: 348 },
];

// one testimonial card. `className` adds the layout's own class; copies
// that only exist to make a loop seamless are hidden from screen readers.
function Voice({ t, className = '', hidden }) {
  return (
    <li className={`hm-voice ${className}`} aria-hidden={hidden || undefined}>
      <figure className="hm-voice-figure">
        <span className="hm-voice-mark" aria-hidden="true">“</span>
        <blockquote className="hm-voice-quote">{t.quote}</blockquote>
        <figcaption className="hm-voice-by">
          <Image src={t.icon} alt="" width={48} height={48} className="hm-voice-avatar" />
          <span>
            <span className="hm-voice-name">{t.name}</span>
            <span className="hm-voice-meta">{t.company}</span>
          </span>
        </figcaption>
      </figure>
    </li>
  );
}

// the long Lumasoft review gets a wider card in the moving row
const isLong = (t) => t.quote.length > 400;

// the moving row of testimonials (VoicesMarquee.jsx): the list, plus an
// aria-hidden copy for a seamless loop
const voiceList = (hidden) => (
  <ul className="hm-vrow-list" aria-hidden={hidden || undefined}>
    {TESTIMONIALS.map((t) => <Voice key={t.name} t={t} hidden={hidden} className={isLong(t) ? 'is-long' : ''} />)}
  </ul>
);

// one copy of the logo row; rendered twice, the track slides by one copy
const LogoRow = ({ hidden }) => (
  <ul className="hm-logos-list" aria-hidden={hidden || undefined}>
    {[...LOGOS, ...LOGOS].map((l, i) => (
      <li key={`${l.name}-${i}`} className="hm-logos-item">
        <Image src={l.src} alt={hidden || i >= LOGOS.length ? '' : l.name} width={l.w} height={60} className="hm-logos-img" />
      </li>
    ))}
  </ul>
);

export default function Testimonials() {
  return (
    <section className="hm-voices" aria-labelledby="hm-voices-title">
      <div className="hm-wrap hm-voices-inner">
        <div className="hm-voices-head hm-reveal">
          {/* the Upwork rating pill was removed (founders, 2026-11-02) */}
          <h2 id="hm-voices-title" className="hm-h2">From other founders we’ve worked with</h2>
        </div>
        <VoicesMarquee row={voiceList(false)} clone={voiceList(true)} />
        {/* client logos: endless slow marquee (pure CSS), pauses on hover,
            static row with reduced motion */}
        <div className="hm-logos hm-reveal" role="group" aria-label="Clients we work with">
          <div className="hm-logos-track">
            <LogoRow />
            <LogoRow hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
