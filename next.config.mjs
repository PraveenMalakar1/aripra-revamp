/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 75 = default; 90 for the founder portraits, whose source photos are
    // small, so the extra compression showed as blur.
    qualities: [75, 90],
  },
};

export default nextConfig;
