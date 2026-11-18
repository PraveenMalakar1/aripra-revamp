import Link from 'next/link';
import Terminal from '../_shared/Terminal';

// "// WHO WE ARE" (Figma 419:748; heading and body: homepage copy v4,
// 2026-11-04; embedded-engineers paragraph, delivery harness and Meridian™
// added 2026-11-05).
export default function WhoWeAre() {
  return (
    <section id="about" className="hm-who" aria-labelledby="hm-who-title">
      <div className="hm-wrap hm-who-inner">
        <div className="hm-who-head hm-reveal">
          <p className="hm-overline">WHO WE ARE</p>
          <h2 id="hm-who-title" className="hm-h2">
            Engineers who own the problem. Not engineers who close the ticket and move on.
          </h2>
        </div>

        <div className="hm-who-row">
          <div className="hm-reveal hm-who-term">
            <Terminal />
          </div>
          <div className="hm-prose hm-who-story hm-reveal">
            <p>
              When you work with us, you speak directly to the engineers responsible for your project. The person with
              the problem and the people solving it are in the same conversation. No account manager relaying messages.
              No translation layer between what you need and what gets built.
            </p>
            <p>That’s how we’ve kept clients for years. Not because we’re cheap. Because the work holds up.</p>
            <p>
              Our senior engineers work embedded in your business, not at arm’s length from it. The person building
              your system understands your operations. That’s not a service model most agencies offer.
            </p>
            <p>
              We keep our teams small so every founder gets senior attention. We don’t take on work we can’t do
              exceptionally well, and we say no to projects that aren’t the right fit.
            </p>
            <p><strong>What “AI-native” actually means:</strong></p>
            <p>
              Every codebase we work on runs inside a delivery harness: the instructions, tests, linters and feedback
              loops we engineer specifically for that project so agents produce reliable output, not just fast output.
              Every line of code goes through AI-assisted review, documentation, and testing. Not a chatbot bolted on. Not a gimmick for the pitch. An engineering discipline that makes your software faster to
              build, easier to maintain, and harder to break. You benefit from it whether or not you care how it works.
            </p>
            <p>
              We built this harness ourselves. We call it{' '}
              <Link href="/how-we-work#meridian" className="hm-who-link">Meridian™</Link>. It runs on every project we take
              on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
