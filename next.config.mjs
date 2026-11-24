import os from 'node:os';

// Dev only: this computer's own network addresses (IPv4), whatever Wi-Fi it
// is on, so phones on the same network can open the local dev server at
// http://<address>:3000. Next.js blocks other origins from the dev server's
// scripts by default, which leaves the page broken (no gestures, no motion).
const localAddresses = Object.values(os.networkInterfaces())
  .flat()
  .filter((a) => a && a.family === 'IPv4' && !a.internal)
  .map((a) => a.address);

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: localAddresses,
  // Old or guessed addresses that should land on a real page (founders,
  // 2026-11-24: "/work" gave a 404). The old site's URLs get their own
  // redirect map at launch (see the founders' launch doc, section 7).
  async redirects() {
    return [
      { source: '/work', destination: '/case-studies', permanent: true },
      { source: '/our-work', destination: '/case-studies', permanent: true },
    ];
  },
  images: {
    // 75 = default; 90 for the founder portraits, whose source photos are
    // small, so the extra compression showed as blur.
    qualities: [75, 90],
  },
};

export default nextConfig;
