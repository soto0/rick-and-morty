/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    domains: ['rickandmortyapi.com'],
  }
}

module.exports = nextConfig
