/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  webpack: (config, { dev, isServer }) => {
    if (dev && isServer) {
      config.watchOptions.poll = 300; // Enable polling for file changes
    }
    return config;
  },
};
