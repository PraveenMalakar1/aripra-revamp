// A case study's key numbers (data.js `highlights`): a big value, then its
// label. Shared by the homepage carousel and the Our Work cards, so both show
// the same stats (founders, 2026-11-04). Styles: .ks-* in shared.css.
export default function KeyStat({ highlights }) {
  return highlights.map((h) => (
    <span key={h.label} className="ks-hl">
      {h.value && <strong className="ks-hl-value">{h.value}</strong>} {h.label}
    </span>
  ));
}
