'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import LinkedInLink from './LinkedInLink';

// Founder cards (client pick "E" from the founders layout demo, 2026-10-12,
// after a reference design): cut-out portrait rising out of the card top,
// middle card set lower, number + name + LinkedIn + area tag + standout line.
// "Read more" opens the full story in a slide-in panel (<dialog>: focus
// trap, Esc and focus return come from the browser). Styles: .fo-* in
// about.css. Data: FOUNDERS in Founders.jsx.

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

function FounderCard({ f, i, onOpen }) {
  return (
    <li className="fo-card hm-reveal" style={{ '--fo-w': `${f.cutout.width}%` }}>
      <div className="fo-stage">
        <Image
          src={f.cutout.src}
          alt={`Portrait of ${f.name}`}
          width={f.cutout.w}
          height={f.cutout.h}
          quality={90}
          sizes="480px"
          className="fo-img"
        />
      </div>
      <div className="fo-body">
        <div className="fo-id">
          <p className="fo-num">{String(i + 1).padStart(2, '0')}</p>
          <div className="fo-name-row">
            <h3 className="fo-name">{f.name}</h3>
            <LinkedInLink name={f.name} href={f.linkedin} />
          </div>
          <p className="fo-tag">{f.area}</p>
        </div>
        <p className="fo-hook">{f.quote}</p>
        <button type="button" className="fo-more" aria-label={`Read more about ${f.name}`} onClick={onOpen}>
          Read more
          <Arrow />
        </button>
      </div>
    </li>
  );
}

export default function FounderCards({ founders }) {
  const [openIdx, setOpenIdx] = useState(null);
  const dialog = useRef(null);
  const opener = useRef(null);

  useEffect(() => {
    const d = dialog.current;
    if (d && openIdx !== null && !d.open) {
      d.showModal();
      document.documentElement.classList.add('fo-lock');
    }
  }, [openIdx]);

  const open = (i) => (e) => { opener.current = e.currentTarget; setOpenIdx(i); };
  const close = () => {
    const d = dialog.current;
    d.classList.add('is-closing');
    const done = () => {
      d.classList.remove('is-closing');
      d.close();
    };
    // let the slide-out play (instant with reduced motion)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) done();
    else setTimeout(done, 220);
  };

  const f = openIdx !== null ? founders[openIdx] : null;
  return (
    <>
      <ul className="fo-grid">
        {founders.map((p, i) => <FounderCard key={p.name} f={p} i={i} onOpen={open(i)} />)}
      </ul>
      <dialog
        ref={dialog}
        className="fo-panel"
        aria-label={f ? `${f.name}’s story` : 'Founder story'}
        onClose={() => {
          document.documentElement.classList.remove('fo-lock');
          setOpenIdx(null);
          opener.current?.focus();
        }}
        onCancel={(e) => { e.preventDefault(); close(); }}
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      >
        {f && (
          <div className="fo-panel-inner">
            <button type="button" className="fo-close" onClick={close} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
            </button>
            <div className="fo-panel-head">
              <div className="fo-panel-photo">
                <Image src={f.cutout.src} alt={`Portrait of ${f.name}`} fill quality={90} sizes="112px" />
              </div>
              <div className="fo-panel-id">
                <h3 className="fo-name">{f.name}</h3>
                <p className="fo-tag">{f.area}</p>
                <LinkedInLink name={f.name} href={f.linkedin} />
              </div>
            </div>
            <div className="fo-panel-text">
              <p className="fo-role">{f.role}</p>
              <blockquote className="fo-quote"><p>{f.quote}</p></blockquote>
              <div className="fo-bio">
                {f.bio.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
