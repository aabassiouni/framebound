/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['tailwindui.com',
    's3.us-east-2.amazonaws.com'
  ],
  },
  // reactStrictMode: true,
}

module.exports = nextConfig
