import Image from 'next/image';
import Link from 'next/link';
import { BOOKING_HREF } from './company';
import CircuitBg from './CircuitBg';

// Closing call-to-action band (homepage 457:195, About 679:30). Same layout on
// every page, page-specific copy via props. id="contact" makes it the target
// of the site’s "Contact Us" / "Book a call" links.
// Always has the animated circuit background, like every dark section.
// `noteFirst` puts the note above the button; `reassurance={null}` hides the
// badge (About copy AW-04 has neither below the button); no `note` = none. `cta` = the button
// label. `wideIntro`: the intro on one line on desktop. `smallNote`: the note
// under the button as small reassurance text (homepage).
export default function FinalCta({ title, intro, note, noteFirst = false, smallNote = false, wideIntro = false, cta = 'Book a 30-Minute Call →', reassurance = 'You’ll speak directly to the engineers. Not an account manager.' }) {
  return (
    <section id="contact" className="hm-final has-circuit" aria-labelledby="hm-final-title">
      <CircuitBg variant="accent" />
      <div className="hm-final-inner hm-reveal">
        <p className="hm-overline hm-final-overline">LET’S TALK</p>
        <h2 id="hm-final-title" className="hm-final-title">{title}</h2>
        {intro && <p className={wideIntro ? 'hm-final-text is-wide' : 'hm-final-text'}>{intro}</p>}
        {note && noteFirst && <p className="hm-final-text">{note}</p>}
        <Link href={BOOKING_HREF} className="hm-btn hm-btn--primary">{cta}</Link>
        {note && !noteFirst && <p className={smallNote ? 'hm-final-text is-small' : 'hm-final-text'}>{note}</p>}
        {reassurance && (
          <p className="hm-final-badge">
            <Image src="/home/icon-person-call.svg" alt="" width={20} height={20} />
            {reassurance}
          </p>
        )}
      </div>
    </section>
  );
}
