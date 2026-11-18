import Nav from '../Nav';
import Footer from '../Footer';
import MotionProvider from '../_shared/MotionProvider';
import PageHero from '../_shared/PageHero';
import CircuitBg from '../_shared/CircuitBg';
import { CAREERS_HREF } from '../_shared/company';
import { WHY, LOOK_FOR, VIDEOS, ROLES } from './data';
import VideoCard from './VideoCard';
import '../_shared/shared.css';
import './careers.css';

// Careers page (no Figma; copy AW-10). Intentionally short: no job listings,
// no application form. Tone matches About.

// simple line icons for the "Why Aripra" tiles (24×24, stroke = currentColor)
const ICONS = {
  ai: <><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M10 12h4M12 10v4" /></>,
  people: <><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><circle cx="17" cy="9" r="2.5" /><path d="M15.5 14.2A4.5 4.5 0 0 1 21 18.5" /></>,
  stakes: <><path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" /><path d="m3 12 9 4.5 9-4.5" /><path d="m3 16.5 9 4.5 9-4.5" /></>,
  stack: <><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /><path d="M7 7h.01M7 17h.01" /></>,
  bolt: <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />,
  shield: <><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
};

function Icon({ name }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

export default function CareersPage() {
  return (
    <MotionProvider>
      <div className="site-page">
        <Nav />
        <main>
          <PageHero id="cr-hero-title" badge="Join the Team" title="We’re always looking for engineers who build." titleWidth={820} contentWidth={760}>
            <p className="cr-hero-lead">
              Not engineers who close tickets and move on. Engineers who own the problem. Who care what the system looks
              like six months later.
            </p>
            <p className="cr-hero-lead"><strong>The AI writes the code. The engineer owns what it does.</strong></p>
          </PageHero>

          {/* Why Aripra */}
          <section className="cr-section" aria-labelledby="cr-why-title">
            <div className="hm-wrap cr-inner">
              {/* "Why Aripra" is the main heading, like "Every person at Aripra…"
                  below it; the orange label sits above (founders, 2026-10-19) */}
              <div className="cr-head hm-reveal">
                <p className="hm-overline hm-overline--caps cr-label">WORKING HERE</p>
                <h2 id="cr-why-title" className="cr-work-lead">Why Aripra</h2>
              </div>
              <ul className="cr-why">
                {WHY.map((w) => (
                  <li key={w.title} className="cr-why-tile hm-reveal">
                    <span className="cr-why-icon"><Icon name={w.icon} /></span>
                    <h3 className="cr-why-title">{w.title}</h3>
                    <p className="cr-why-text">{w.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* What the work is like */}
          <section className="cr-section" aria-labelledby="cr-work-title">
            <div className="hm-wrap cr-inner">
              <div className="cr-work hm-reveal">
                <h2 id="cr-work-title" className="hm-overline hm-overline--caps cr-label">WHAT THE WORK IS LIKE</h2>
                <p className="cr-work-lead">
                  Every person at Aripra builds. The founders build. The team leads build. There are no layers between you
                  and the problem.
                </p>
                <div className="hm-prose cr-work-copy">
                  <p>
                    The briefs are real. What you ship runs in production, not in a staging environment someone else will
                    take over. You’ll be talking to the client directly, in English, in writing and on calls, because
                    there’s no one in between.
                  </p>
                  <p>
                    The work spans AI engineering, product development, and systems built for real load. If you’ve been
                    looking for a place where the standard is high and the work is genuinely interesting, it’s worth a
                    conversation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What we look for */}
          <section className="cr-section" aria-labelledby="cr-look-title">
            <div className="hm-wrap cr-look hm-reveal">
              <h2 id="cr-look-title" className="hm-overline hm-overline--caps cr-label">WHAT WE LOOK FOR</h2>
              <p className="cr-look-intro">
                We don’t hire by years of experience or CV keywords. We hire engineers who:
              </p>
              <ul className="cr-look-list">
                {LOOK_FOR.map((t) => (
                  <li key={t.slice(0, 32)}>
                    <span className="cr-check" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <p className="cr-look-close">If that’s you, we’d like to hear from you.</p>
              <a href={CAREERS_HREF} className="cr-look-link">Reach out →</a>
            </div>
          </section>

          {/* Why they stay */}
          <section className="cr-section" aria-labelledby="cr-stay-title">
            <div className="hm-wrap cr-inner">
              <div className="hm-reveal">
                <h2 id="cr-stay-title" className="hm-overline hm-overline--caps cr-label">WHY THEY STAY</h2>
                <p className="cr-stay-lead">
                  Most of our engineers have been here for years. Some for over a decade. Here’s why.
                </p>
              </div>
              <div className="cr-videos">
                {VIDEOS.map((v) => <VideoCard key={v.src} video={v} />)}
              </div>
            </div>
          </section>

          {/* Where we’re currently focused */}
          <section className="cr-section" aria-labelledby="cr-focus-title">
            <div className="hm-wrap cr-inner">
              <h2 id="cr-focus-title" className="hm-overline hm-overline--caps cr-label hm-reveal">WHERE WE’RE CURRENTLY FOCUSED</h2>
              <ul className="cr-roles">
                {ROLES.map((r) => (
                  <li key={r.title} className="cr-role hm-reveal">
                    <h3 className="cr-role-title">{r.title}</h3>
                    <ul className="cr-role-stack" aria-label="Stack">
                      {r.stack.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                    <p className="cr-role-text">{r.text}</p>
                  </li>
                ))}
              </ul>
              <p className="cr-focus-note hm-reveal">
                If neither fits but you think you belong here anyway, <a href={CAREERS_HREF}>reach out</a>.
              </p>
            </div>
          </section>

          {/* CTA: same dark band as the other pages' closing CTA */}
          <section className="hm-final has-circuit" aria-labelledby="cr-cta-title">
            <CircuitBg variant="accent" />
            <div className="hm-final-inner hm-reveal">
              <h2 id="cr-cta-title" className="hm-final-title">Not applying for a role, just reaching out?</h2>
              <p className="hm-final-text">
                That’s fine. Send us what you’ve built. A project, a repo, a product: something that shows how you
                think and what you care about. We’ll take a look.
              </p>
              <a href={CAREERS_HREF} className="hm-btn hm-btn--primary">Send Us Your Work →</a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}
