import Nav from '../Nav';
import Footer from '../Footer';
import MotionProvider from '../_shared/MotionProvider';
import PageHero from '../_shared/PageHero';
import CircuitBg from '../_shared/CircuitBg';
import Terminal from '../_shared/Terminal';
import DeliverySteps from './DeliverySteps';
import { BEFORE, AFTER } from './data';
import IntentStory from './IntentStory';
import '../_shared/shared.css';
import './how-we-work-page.css';

// How We Work page (2026 Figma: "How we works Page", node 534:10).
export default function HowWeWorkPage() {
  return (
    <MotionProvider>
      <div className="site-page">
        <Nav />
        <main>
          <PageHero
            id="hw-hero-title"
            badge="Our Process"
            title="Every agency now claims to use AI."
            titleWidth={1000}
          >
            <p className="hw-hero-lead">
              Most added tools to the same old workflow. We built our entire way of working around AI from the start.
            </p>
            <p className="hw-hero-lead">
              Most agencies can tell you what they build. Few can explain how. The ones that can’t usually don’t want you
              looking too closely.
            </p>
            <p className="hw-hero-lead is-strong">
              This is how we actually work. Not a branded methodology. Not a productivity claim. Just the process.
            </p>
          </PageHero>

          {/* From intent to requirements (536:698) */}
          <section className="hw-section" aria-labelledby="hw-intent-title">
            <div className="hm-wrap hw-inner">
              <div className="hw-head is-center hm-reveal">
                <p className="hm-overline hm-overline--caps">FROM INTENT TO REQUIREMENTS</p>
                <h2 id="hw-intent-title" className="hm-h2">
                  AI doesn’t fix a bad brief. Most briefs are wrong before the first line of code is written.
                </h2>
                <p className="hw-lead">
                  Not because founders don’t know what they want. Because knowing what you want your business to do and
                  knowing what to build to get there are two very different things.
                </p>
              </div>
              {/* no boxes: one connected read (founders, 2026-11-13) */}
              <IntentStory />
            </div>
          </section>

          {/* Meridian™ (541:1109; copy AW-3 update, 2026-11-12: was "AI-Native
              Delivery") */}
          <section id="meridian" className="hw-section" aria-labelledby="hw-ai-title">
            <div className="hm-wrap hw-inner">
              <div className="hw-head is-center hm-reveal">
                <p className="hm-overline hm-overline--caps">MERIDIAN™</p>
                <h2 id="hw-ai-title" className="hm-h2">Most agencies describe how they work. We built software to run it.</h2>
                <div className="hw-lead">
                  <p>Most teams have adopted AI tools. Very few have redesigned how work actually happens around them.</p>
                  <p>
                    Meridian™ is the platform we built in-house and use in production on every project. It gives everyone
                    on the team a single, consistent way of working, from the moment a brief arrives through to
                    delivery. Requirements get captured the same way. Decisions get made the same way. The work moves
                    through the same stages on every engagement.
                  </p>
                  <p>
                    No individual interpretation of the process. No decisions buried in private chats. The same
                    standard, every time, on every project.
                  </p>
                  <p>
                    <strong>
                      We built Meridian™ because AI-native delivery cannot just be a set of principles. Principles
                      drift. A platform does not.
                    </strong>
                  </p>
                  <p>Here’s what that looks like across the delivery lifecycle.</p>
                </div>
              </div>
              <DeliverySteps />
            </div>
          </section>

          {/* Before / After (536:791) */}
          <section className="hw-compare hm-reveal has-circuit" aria-label="Before and after">
            <CircuitBg variant="accent" />
            <div className="hw-compare-col is-before">
              <h2 className="hw-compare-title"><span className="hw-compare-tag">Before.</span> <span className="hw-compare-who">(Most agencies)</span></h2>
              <ul>{BEFORE.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
            <span className="hw-compare-rule" aria-hidden="true"><span className="hw-compare-vs">VS</span></span>
            <div className="hw-compare-col">
              <h2 className="hw-compare-title"><span className="hw-compare-tag">After.</span> <span className="hw-compare-who">(Aripra)</span></h2>
              <ul>{AFTER.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </section>

          {/* What you end up with (537:853) */}
          <section className="hw-section hw-result" aria-labelledby="hw-result-title">
            <div className="hm-wrap hw-inner">
              <div className="hw-head is-center hm-reveal">
                <p className="hm-overline">THE RESULT</p>
                <h2 id="hw-result-title" className="hm-h2">What you end up with.</h2>
                <p className="hw-result-lead">
                  Software that does what it’s supposed to do. Because the testing is thorough, the review is real,
                  and the architecture was thought through before the first line was written.
                </p>
              </div>
              <div className="hw-result-row">
                <div className="hw-result-term hm-reveal"><Terminal /></div>
                <div className="hw-result-copy hm-reveal">
                  <p>
                    A codebase you can read. Not a black box that only the people who built it understand. Documentation
                    written when the code was, not pieced together from memory months later. Code no one person has to
                    hold in their head.
                    <br /><strong>Engineers who stay. Not just at Aripra. On your codebase.</strong>
                  </p>
                  <p>
                    At most firms, engineers rotate off client accounts every one to three years even if they stay at the
                    company. Internal reallocation, margin management, promotions. The engineer who started on your
                    project is rarely the one who’s still there a year later.
                    <br /><strong>At Aripra, the only reason an engineer leaves your codebase is if they leave Aripra.</strong>
                  </p>
                  <p>
                    One of our engineers has been on the same client codebase for ten years. That is not an exception. It
                    is what this model produces.
                  </p>
                  <p>
                    <strong>Everything built belongs to you.</strong> Every line of code, every architecture decision,
                    every document. We don’t retain it, license it back, or use it to build something else. You run
                    your business. We build your technology. Clean division.
                    <br /><strong>No productivity percentage. Just software built properly, that holds up under real load, and that you can hand to whoever comes next.</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}
