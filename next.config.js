/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // тестовый img
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
