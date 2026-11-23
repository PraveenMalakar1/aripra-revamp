import { SITE_URL } from './_shared/company';
import { CASE_STUDY_DETAILS } from './case-studies/details';

// sitemap.xml for search engines (founders, 2026-11-23): every page on the
// site; the case study pages come from their data, so new ones are added
// automatically. Generated at build time.
const PAGES = [
  { path: '/', priority: 1 },
  { path: '/services', priority: 0.9 },
  { path: '/case-studies', priority: 0.9 },
  { path: '/how-we-work', priority: 0.8 },
  { path: '/about', priority: 0.8 },
  { path: '/contact', priority: 0.8 },
  { path: '/careers', priority: 0.5 },
];

export default function sitemap() {
  const lastModified = new Date();
  return [
    ...PAGES.map(({ path, priority }) => ({ url: `${SITE_URL}${path}`, lastModified, changeFrequency: 'monthly', priority })),
    ...Object.keys(CASE_STUDY_DETAILS).map((slug) => ({
      url: `${SITE_URL}/case-studies/${slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}
