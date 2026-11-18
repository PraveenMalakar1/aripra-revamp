import Image from 'next/image';

// "// FAIR QUESTIONS" (Figma 457:144 "OBJECTION HANDLING", renamed: it was an internal label).
// FAQ-style accordion (founders, 2026-11-02): each question + its first line
// always show; the rest of the answer opens / closes on click. Native <details>: keyboard + screen readers for free, and the answers
// stay in the page for search engines. Styles: .hm-obj-* in home.css.
const Plus = () => (
  <span className="hm-obj-icon" aria-hidden="true">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
  </span>
);

// "Fair questions" (homepage copy v4, 2026-11-04): three questions. Each
// closed card shows the question and the answer's first sentence; the rest
// of the answer expands.
export default function Objections() {
  return (
    <section className="hm-obj" aria-labelledby="hm-obj-title">
      <Image src="/home/objections-bg.webp" alt="" fill sizes="100vw" className="hm-obj-bg" />
      <div className="hm-wrap hm-obj-inner">
        <div className="hm-obj-head hm-reveal">
          <p className="hm-overline">FAIR QUESTIONS</p>
          <h2 id="hm-obj-title" className="hm-h2">A couple of things you’re probably thinking.</h2>
        </div>
        <div className="hm-obj-list">
          <details className="hm-card hm-obj-card hm-reveal">
            <summary className="hm-obj-sum">
              <span className="hm-obj-head-text">
                <h3 className="hm-obj-q">I’ve outsourced before. Got the price. Lost everything else.</h3>
                <span className="hm-obj-lede">Most outsourcing works until it doesn’t.</span>
              </span>
              <Plus />
            </summary>
            <div className="hm-prose hm-obj-a">
              <p>You get a team, you get a rate, and for a while it seems fine. Then something breaks and nobody owns it. The person who built it isn’t available. The documentation doesn’t exist. The next team you bring in charges you to understand what the last team left behind.</p>
              <p>The cost advantage is real. We won’t pretend otherwise. Our engineers are based in India and the price reflects that.</p>
              <p>What’s different is the accountability structure. You speak directly to the engineers responsible for your project, not a salesperson relaying messages. The person solving the problem is in the same conversation as the person who has it. The code is built to be understood by whoever comes next, not just the person who wrote it.</p>
              <p>Our longest American client has been with us since 2014. CarPlanet, a UK automotive group, came to us three years ago. In that time, their revenue went from £19M to over £200M. That doesn’t happen by accident. It happens when the work holds up and the people building it care what happens years later.</p>
            </div>
          </details>
          <details className="hm-card hm-obj-card hm-reveal">
            <summary className="hm-obj-sum">
              <span className="hm-obj-head-text">
                <h3 className="hm-obj-q">You’re a tech firm. Do you actually understand my industry?</h3>
                <span className="hm-obj-lede">CarPlanet went from a single-site operation to a multi-location group with 2,000 cars in stock.</span>
              </span>
              <Plus />
            </summary>
            <div className="hm-prose hm-obj-a">
              <p>We built the systems that scaled with them: inventory, leads, logistics, sales calls. We’ve been inside an automotive business at every stage of that growth.</p>
              <p>That’s how we’ve worked with every other client in every other industry.</p>
            </div>
          </details>
          <details className="hm-card hm-obj-card hm-reveal">
            <summary className="hm-obj-sum">
              <span className="hm-obj-head-text">
                <h3 className="hm-obj-q">Every agency says they’re different. Why should I believe you?</h3>
                <span className="hm-obj-lede">We’re not going to give you a list of things that make us different. Every agency has one.</span>
              </span>
              <Plus />
            </summary>
            <div className="hm-prose hm-obj-a">
              <p>What we can point to: CarPlanet’s revenue went from £19M to over £200M in three years. The technology we built became a competitive advantage they’re now looking at licensing to others in their industry. They haven’t left.</p>
              <p>That’s not a pitch. That’s just what happened.</p>
              <p>We work with a small number of founders at a time, by choice. We take on work we know we can do well and say no to the rest. If we’re not the right fit, we’ll tell you on the call.</p>
            </div>
          </details>
          {/* two more questions (homepage copy, founders, 2026-11-16) */}
          <details className="hm-card hm-obj-card hm-reveal">
            <summary className="hm-obj-sum">
              <span className="hm-obj-head-text">
                <h3 className="hm-obj-q">How long is this actually going to take?</h3>
                <span className="hm-obj-lede">It depends on what you’re building and what state it’s in when we start. We won’t give you a number on the website.</span>
              </span>
              <Plus />
            </summary>
            <div className="hm-prose hm-obj-a">
              <p>What we can tell you is why projects run long. Most delays come from requirements that weren’t clear enough at the start, decisions that took too long to make, or a client who was kept out of the loop until it was too late to course-correct.</p>
              <p>We start with your intent, not a fixed spec. Requirements emerge through the engagement. You’re in the conversation the whole way through, not waiting for a monthly update. When something needs a decision, we ask. When something’s drifting, we say so early.</p>
              <p>CarPlanet is three years in. Four systems built, each one enabling the next. £19M to £200M. That’s not one project with one deadline. It’s what continuous, honest delivery looks like in practice.</p>
              <p>We’ll tell you what’s realistic before we start. And we’ll tell you just as honestly if something changes along the way.</p>
            </div>
          </details>
          <details className="hm-card hm-obj-card hm-reveal">
            <summary className="hm-obj-sum">
              <span className="hm-obj-head-text">
                <h3 className="hm-obj-q">What if it goes wrong again?</h3>
                <span className="hm-obj-lede">That’s the right question to ask. Most agencies will tell you it won’t. We won’t make that promise.</span>
              </span>
              <Plus />
            </summary>
            <div className="hm-prose hm-obj-a">
              <p>What we can tell you is what happens when things do go wrong.</p>
              <p>You speak directly to the engineers responsible for your project. Not a project manager. Not a support queue. The people who wrote the code. No handoffs. The engineer who starts on your codebase stays on it. If something breaks, the person fixing it is the person who built it.</p>
              <p>Lumasoft came to us in 2014. We built their iOS photo and video app. It’s a best seller in the App Store. They’re still with us. Twelve years is a long time. Things go wrong over twelve years. They stayed because when something needed fixing, we fixed it and owned what went wrong.</p>
              <p>If we build something and it breaks, we fix it. That’s not a contract clause. It’s just how we operate.</p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
