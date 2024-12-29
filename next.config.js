/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
