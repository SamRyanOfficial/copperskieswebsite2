/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['res.cloudinary.com'], // Add any image domains you're using
  },
  experimental: {
    // Prevent Next.js from looking for package.json in parent directories
    serverComponentsExternalPackages: [],
  },
  // Explicitly set the project root
  distDir: '.next',
}

module.exports = nextConfig 