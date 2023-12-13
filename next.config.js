/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REVALIDATE: process.env.REVALIDATE,
    SITE: process.env.SITE,
  },
  swcMinify: true,
  i18n: {
    locales: ["ro"],
    defaultLocale: "ro",
  },
  images: {
    domains: ["api.inspiredconsulting.ro", "f005.backblazeb2.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.inspiredconsulting.ro",
      },
      {
        protocol: 'https', 
        hostname: 'f005.backblazeb2.com',
      },
    ],
  },
};

module.exports = nextConfig;
