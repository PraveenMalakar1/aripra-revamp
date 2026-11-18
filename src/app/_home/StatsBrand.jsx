import CircuitBg from '../_shared/CircuitBg';
import StatsStrip from '../_shared/StatsStrip';

// Homepage stats on a dark card (founders' pick, 2026-11-04): the stats strip
// light-on-dark, in the old brand band's card. The quote and year founded
// were tried here and dropped (founders, 2026-11-03). Styles: stats-brand.css.
export default function StatsBrand() {
  return (
    <section className="hm-stats-band sb" aria-label="Aripra in numbers">
      <div className="hm-wrap">
        <div className="sb-card has-circuit hm-reveal">
          <CircuitBg variant="accent" />
          <StatsStrip />
        </div>
      </div>
    </section>
  );
}
