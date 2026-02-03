/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable static export - use server-side rendering
    output: 'standalone',

    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
