/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['res.cloudinary.com'], // Add any image domains you're using
    // Cap max generated width so crawlers / 4K viewports don't request 3840px (~1.4MB+) variants
    deviceSizes: [640, 750, 828, 960, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    // Prevent Next.js from looking for package.json in parent directories
    serverComponentsExternalPackages: [],
  },
  // Explicitly set the project root
  distDir: '.next',
}

module.exports = nextConfig 