import { SITE_URL } from './_shared/company';

// robots.txt (founders, 2026-11-23): every page may be crawled; points
// search engines at the sitemap.
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
