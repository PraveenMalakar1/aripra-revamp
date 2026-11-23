import { SITE_NAME } from './company';

// Page metadata with matching share-card fields (founders, 2026-11-23: links
// shared on LinkedIn / WhatsApp / Slack showed no preview). Each page passes
// its own title, description and path; the share image is the site-wide
// app/opengraph-image.js. A page's `openGraph` replaces the layout's, so the
// shared fields (site name, type) and the share image are repeated here.
const SHARE_IMAGE = { url: '/opengraph-image', width: 1200, height: 630, alt: 'Aripra: AI-Native Engineering. Built for Founders.' };

export function pageMeta({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: SITE_NAME, type: 'website', locale: 'en_GB', images: [SHARE_IMAGE] },
    twitter: { card: 'summary_large_image', title, description, images: [SHARE_IMAGE.url] },
  };
}
