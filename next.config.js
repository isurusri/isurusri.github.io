/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable experimental features
    experimental: {
        optimizePackageImports: ['lucide-react', 'framer-motion'],
    },

    // Image optimization
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Compression
    compress: true,

    // Note: Headers and redirects are not supported with static export
    // For GitHub Pages, these are handled by the hosting platform

    // Turbopack optimizations (Next.js 15)
    // Webpack configuration is not needed when using Turbopack

    // Output configuration for GitHub Pages
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },

    // Environment variables
    env: {
        CUSTOM_KEY: process.env.CUSTOM_KEY,
    },

    // Trailing slash
    trailingSlash: false,

    // PoweredByHeader
    poweredByHeader: false,

    // React strict mode
    reactStrictMode: true,

    // SWC minification is enabled by default in Next.js 15
};

module.exports = nextConfig;
