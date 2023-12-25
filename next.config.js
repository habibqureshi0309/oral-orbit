/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    MAX_ATTACHMENT_SIZE: 5000000,
    ...process.env,
  },
}

module.exports = nextConfig
