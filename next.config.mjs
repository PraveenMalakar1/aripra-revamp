/** @type {import('next').NextConfig} */
const nextConfig = {
  // dev only: let phones on the same Wi-Fi open the local dev server
  // (http://<this computer's IP>:3000). Next.js blocks other origins from
  // the dev server's scripts by default, which leaves the page broken there.
  allowedDevOrigins: ['192.168.1.34'],
  images: {
    // 75 = default; 90 for the founder portraits, whose source photos are
    // small, so the extra compression showed as blur.
    qualities: [75, 90],
  },
};

export default nextConfig;
