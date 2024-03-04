/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "fastly.picsum.photos", "gravatar.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
      {
        protocol: "https",
        hostname: "gravatar.com",
      },
    ],
  },
};

module.exports = nextConfig;
