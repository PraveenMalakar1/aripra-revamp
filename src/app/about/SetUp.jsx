import CircuitBg from '../_shared/CircuitBg';

// "HOW WE'RE SET UP" (Figma 677:228). Copy verbatim from About AW-4
// (2026-11-20; replaces the earlier heading + two glass cards, whose wording
// was a split of the older copy): heading, the "no account managers" line,
// the two highlighted lines, then the closing line. Centred prose on the
// dark panel. Styles: .ab-setup-* in about.css.
export default function SetUp() {
  return (
    <section className="ab-setup hm-dark-panel has-circuit" aria-labelledby="ab-setup-title">
      <CircuitBg variant="accent" />
      <div className="hm-dark-panel-inner ab-setup-inner">
        <div className="ab-setup-head hm-reveal">
          <p className="hm-overline hm-dark-panel-overline">HOW WE’RE SET UP</p>
          <h2 id="ab-setup-title" className="ab-setup-title">
            Everyone at Aripra builds. Not just the engineers on your project. Everyone.
          </h2>
        </div>
        <div className="ab-setup-copy hm-reveal">
          <p>
            There are no account managers here. No project managers sitting between you and the people writing your
            code. No one translating between you and the engineers.
          </p>
          <p className="ab-setup-highlight">
            Every person in this company is an AI engineer.
            <span>Including the people who run it.</span>
          </p>
          <p>
            That’s not a pitch. It’s how we’re set up. Clients don’t get handed off. The people you talk to are the
            people doing the work.
          </p>
        </div>
      </div>
    </section>
  );
}
