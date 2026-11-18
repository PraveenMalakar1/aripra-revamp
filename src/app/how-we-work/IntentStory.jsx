import { INTENT_CARDS } from './data';
import IntentIllus from './IntentIllus';

// "From intent to requirements" body (founders, 2026-11-13: no boxes, one
// connected read; picked layout "B · Timeline" from a three-option demo).
// The three parts on a vertical line with numbered points, each with a small
// animated picture beside it (IntentIllus.jsx; under the text on tablets and
// phones). Copy is verbatim from INTENT_CARDS. Styles: .hw-is-* in
// how-we-work-page.css.
export default function IntentStory() {
  return (
    <ol className="hw-is hw-is--line">
      {INTENT_CARDS.map((c, i) => (
        <li key={c.title} className="hw-is-part hm-reveal">
          <span className="hw-is-dot" aria-hidden="true">{i + 1}</span>
          <div className="hw-is-body">
            <h3 className="hw-is-title">{c.title}</h3>
            <p>{c.body}</p>
            <p className="is-strong">{c.closer}</p>
            {c.after && <p>{c.after}</p>}
          </div>
          <IntentIllus step={i} />
        </li>
      ))}
    </ol>
  );
}
