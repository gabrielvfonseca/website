/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ['brianlovin.com, google.com, unsplash.com'],
  },
};

module.exports = nextConfig;
