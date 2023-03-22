/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'thumbs.dreamstime.com'
    ],
  }
}

module.exports = nextConfig
