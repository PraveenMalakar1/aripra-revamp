import Link from 'next/link';
import Terminal from '../_shared/Terminal';

// "// How We Build" card (Figma 458:2764; copy AW-2 v2). The heading is the
// copy’s opening line (client: replace the Figma heading).
export default function HowWeBuild() {
  return (
    <section className="sv-build" aria-labelledby="sv-build-title">
      <div className="sv-build-card hm-reveal">
        <p className="hm-overline">HOW WE BUILD</p>
        <h2 id="sv-build-title" className="hm-h2">Every agency now claims to use AI.</h2>
        <div className="sv-build-row">
          <div className="sv-build-copy">
            <div className="hm-prose">
              <p>
                Most added tools to the same old workflow. We built our entire way of working around AI from the start.
                In how we plan, write, review, test, and document.
                <br />
                <strong>That’s what AI-native means in practice.</strong>
              </p>
              <p>
                Not a chatbot on your pricing page. Not Copilot opened occasionally in an IDE. AI embedded at every stage
                of how software gets built, so it’s faster to ship and harder to break.
              </p>
            </div>
            <Link href="/how-we-work" className="hm-learn hm-learn--sm">
              How We Work <span className="hm-learn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="sv-build-term">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
