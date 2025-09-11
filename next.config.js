/** @type {import('next').NextConfig} */
const nextConfig = {
    // Output configuration for GitHub Pages
    output: 'export',
    trailingSlash: true,
    distDir: 'out',

    // Image configuration for static export
    images: {
        unoptimized: true,
        formats: ['image/webp', 'image/avif'],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Enable experimental features
    experimental: {
        optimizePackageImports: ['lucide-react', 'framer-motion'],
    },

    // Compression
    compress: true,

    // Environment variables
    env: {
        CUSTOM_KEY: process.env.CUSTOM_KEY,
    },

    // Security headers
    poweredByHeader: false,

    // React strict mode
    reactStrictMode: true,

    // Production optimizations
    productionBrowserSourceMaps: false,

    // Webpack configuration to exclude problematic files
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Exclude source maps and dev files from client bundle
            config.devtool = false;
        }
        return config;
    },

    // SWC minification is enabled by default in Next.js 15
};

module.exports = nextConfig;
