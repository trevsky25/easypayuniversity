/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds for deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow TypeScript build errors for deployment
    ignoreBuildErrors: true,
  },
  // Remove output standalone for now
  experimental: {
    // Enable experimental features if needed
  },
}

module.exports = nextConfig