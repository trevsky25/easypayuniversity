/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds for deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds for deployment
    ignoreBuildErrors: false, // Keep TypeScript checking but allow warnings
  },
  output: 'standalone', // Optimize for deployment
  experimental: {
    // Enable experimental features if needed
  },
}

module.exports = nextConfig