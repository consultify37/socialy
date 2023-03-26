/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["ro"],
    defaultLocale: "ro",
  },
  images: {
    domains: ["api.inspiredconsulting.ro"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.inspiredconsulting.ro",
      },
    ],
  },
};

module.exports = nextConfig;
