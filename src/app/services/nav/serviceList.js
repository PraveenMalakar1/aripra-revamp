// The four services as navigation items (`short`: phone labels in the strip) (ids = section ids in data.js and the
// homepage "Learn More" deep links). Plain module so server and client
// components can both import it.
export const SERVICE_NAV = [
  // names: Services copy v3 (founders, 2026-11-02)
  { id: 'technology-rescue-rebuild', label: 'Technology Rescue & Rebuild', short: 'Rescue' },
  { id: 'ai-product-engineering', label: 'AI Product Engineering', short: 'Product' },
  { id: 'ai-consultation-and-implementation', label: 'AI Consultation and Implementation', short: 'Consulting' },
  { id: 'dedicated-ai-engineering-teams', label: 'Dedicated AI Engineering Teams', short: 'Teams' },
];

export const num = (i) => String(i + 1).padStart(2, '0');
