/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // тестовый img
  images: {
    domains: ['rickandmortyapi.com'],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  }
}

module.exports = nextConfig
