import PageHero from '../_shared/PageHero';
import { FOUNDED_YEAR, yearsInBusinessWords } from '../_shared/company';

// About hero (Figma 677:28; copy AW-04). Badge stays "About Us" (client).
// The years count is computed from FOUNDED_YEAR so it never goes stale
// (the copy doc’s "Twelve years" was written in 2024).
export default function AboutHero() {
  return (
    <PageHero
      id="ab-hero-title"
      badge="Our Story"
      title={`We started in ${FOUNDED_YEAR}. We’re still here because the work holds up.`}
      titleWidth={884}
    >
      <p className="ab-hero-lead">
        {yearsInBusinessWords()} years. 33 products built and shipped. Our longest client has been with us since 2014.
        The approach hasn’t changed. The technology has, constantly.
      </p>
    </PageHero>
  );
}
