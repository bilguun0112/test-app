/** @type {import('next').NextConfig} */
const nextConfig = {
    // preload: false,
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["images.unsplash.com", "via.placeholder.com"],
    },

};

module.exports = nextConfig;