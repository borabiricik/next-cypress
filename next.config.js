/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        remotePatterns: [{ hostname: "**" }]
    }
}

module.exports = nextConfig
