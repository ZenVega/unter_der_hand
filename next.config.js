const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'behold.pictures',
        port: '',
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
