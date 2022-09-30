/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.statically.io", 'static.miraheze.org', 'cdn.britannica.com'],
  }
}

module.exports = nextConfig
