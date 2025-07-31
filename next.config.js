/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Completely ignore ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript build errors
    ignoreBuildErrors: true,
  },
  // Disable linting altogether during build
  swcMinify: true,
}

module.exports = nextConfig