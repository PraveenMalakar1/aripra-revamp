import Link from 'next/link';
import { BOOKING_HREF } from '../_shared/company';
import PlayOnView from '../_shared/PlayOnView';
import CircuitBg from '../_shared/CircuitBg';

// One service. Content comes from ./data.js. Layout (client, 2026-10-09,
// replacing the Figma 519:940 template, which read as cluttered):
//   header — "01 · eyebrow", one-line title, lead, then the illustration full
//            width underneath (option A of the header demo)
//   situation — cards, at most two per row (no numbers: founders, 2026-10-19)
//   What we do — bold lead line + explanation per block
//   How it works — numbered steps
//   What you get — the dark band: outcome copy, then the booking button at
//                  the end, labelled per service (copy v3); "The first call
//                  is…" is the button's tooltip (founders kept it, 2026-11-02)

// paragraphs are strings, or { text, strong } for a bold line
const Para = ({ item }) => (typeof item === 'string' ? <p>{item}</p> : <p>{item.strong ? <strong>{item.text}</strong> : item.text}</p>);
const keyOf = (item) => (typeof item === 'string' ? item : item.text).slice(0, 32);
const num = (i) => String(i + 1).padStart(2, '0');

export default function ServiceSection({ service, index = 0 }) {
  const { id, when, title, lead, Illustration, situation, whatWeDo, steps, outcome, cta, callNote = true } = service;
  const titleId = `${id}-title`;
  const cards = situation.cards;

  return (
    <section id={id} className="sv-service" aria-labelledby={titleId}>
      <div className="hm-wrap sv-service-inner">
        <header className="sv-service-head hm-reveal">
          <p className="sv-service-eyebrow">
            <span className="sv-service-num">{num(index)}</span>
            <span aria-hidden="true">·</span> {when}
          </p>
          <h2 id={titleId} className="sv-service-title">{title}</h2>
          <p className="sv-service-lead">{lead}</p>
          <PlayOnView className="sv-illus">
            <Illustration />
          </PlayOnView>
        </header>

        <ol className="sv-situation" style={{ '--sv-cols': Math.min(cards.length, 2) }}>
          {cards.map((card) => (
            <li key={card.title} className="sv-sit-card hm-reveal">
              <h3 className="sv-card-title">{card.title}</h3>
              <div className="hm-prose">
                {card.body.map((p) => <Para key={keyOf(p)} item={p} />)}
              </div>
            </li>
          ))}
        </ol>

        <div className="sv-detail">
          <div className="sv-detail-col hm-reveal">
            <h3 className="sv-part-title">What we do</h3>
            <div className="sv-do">
              {whatWeDo.map((block) => (
                <div key={block.lead.slice(0, 32)} className="sv-do-block">
                  <p className="sv-do-lead">{block.lead}</p>
                  {block.body.length > 0 && (
                    <div className="hm-prose">
                      {block.body.map((p) => <Para key={keyOf(p)} item={p} />)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="sv-detail-col hm-reveal">
            <h3 className="sv-part-title">How it works</h3>
            <ol className="sv-steps">
              {steps.map((s, i) => (
                <li key={s.title} className="sv-step">
                  <div className="sv-step-head">
                    <span className="sv-step-num" aria-hidden="true">{i + 1}</span>
                    <h4 className="sv-step-title">{s.title}</h4>
                  </div>
                  <p className="sv-step-body">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="sv-get has-circuit">
        <CircuitBg variant="accent" />
        <div className="hm-wrap sv-get-inner hm-reveal">
          <div className="sv-get-cta">
            <h3 className="sv-get-title">What you get</h3>
          </div>
          <div className="sv-get-copy">
            {outcome.map((o) => (
              <p key={o.text.slice(0, 32)} className={o.strong ? 'is-strong' : undefined}>{o.text}</p>
            ))}
            {/* the note sits permanently under the button as small text, no
                hover (founders, 2026-11-13); hidden on phones. It stays the
                button's description for screen readers. */}
            <div className="sv-get-action">
              <Link href={BOOKING_HREF} className="hm-btn hm-btn--primary sv-get-btn" aria-describedby={callNote ? `${id}-call-note` : undefined}>
                {cta}
              </Link>
              {callNote && (
                <p id={`${id}-call-note`} className="sv-get-note">
                  The first call is with a technical founder. Not a salesperson.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
