/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

const path = require("path");

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "s.udemycdn.com",
      },
    ],
  },
};
