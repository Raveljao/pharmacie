/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    // Disable static optimization for error pages
    experimental: {
        skipTrailingSlashRedirect: true,
    },
    // Force dynamic rendering
    generateBuildId: async () => {
        return 'build-' + Date.now();
    },
};

export default nextConfig;
