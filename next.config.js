/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['styles.redditmedia.com'],
  },
  async redirects() {
    return [
      {
        source: '/guild',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
