/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['res.cloudinary.com'], // Add any image domains you're using
  },
}

module.exports = nextConfig 