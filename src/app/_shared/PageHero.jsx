import Image from 'next/image';

// Light inner-page hero (About 677:28, Services 457:2588): three soft colour
// orbs, a badge, the h1, then page-specific lead copy as children.
// Entrance uses the shared CSS .hm-rise (no JS needed for first paint).
// `contentWidth` / `titleWidth` mirror each page’s Figma text column.
// `aside`: optional right-hand column (Contact: the booking calendar); the
// text then sits on the left. Layout is the page's own CSS (.pg-hero-split).
// `after`: optional full-width row under the text, inside the hero (case
// study pages: the stats, so they're part of the first screen).
const rise = (ms) => ({ '--rise-delay': `${ms}ms` });

export default function PageHero({ id, badge, title, contentWidth, titleWidth, className, aside, after, children }) {
  const vars = {
    ...(contentWidth && { '--pg-hero-content': `${contentWidth}px` }),
    ...(titleWidth && { '--pg-hero-title': `${titleWidth}px` }),
  };
  const content = (
    <div className="pg-hero-content">
      <p className="pg-hero-badge hm-rise" style={rise(50)}>
        <Image src="/about/icon-ai-sparkle-navy.svg" alt="" width={20} height={20} />
        {badge}
      </p>
      <h1 id={id} className="pg-hero-title hm-rise" style={rise(150)}>{title}</h1>
      <div className="pg-hero-lead hm-rise" style={rise(250)}>{children}</div>
    </div>
  );
  return (
    <section className={className ? `pg-hero ${className}` : 'pg-hero'} aria-labelledby={id} style={vars}>
      <div className="pg-hero-orbs" aria-hidden="true">
        <span className="pg-orb pg-orb--blue" />
        <span className="pg-orb pg-orb--purple" />
        <span className="pg-orb pg-orb--pink" />
      </div>
      {aside ? (
        <div className="pg-hero-split">
          {content}
          {aside}
        </div>
      ) : content}
      {after}
    </section>
  );
}
