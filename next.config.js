/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ['google.com', 'unsplash.com', 'i.scdn.co', 'spotify.com', 'scdn.com'],
  },
};

module.exports = nextConfig;
