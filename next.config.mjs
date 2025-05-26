import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint errors during build
  },
  // Add any other Next.js config options here
};

export default withSentryConfig(
  nextConfig,
  {
    // Sentry webpack plugin options
    silent: true,
    org: "javascript-mastery",
    project: "javascript-nextjs",
  },
  {
    // Sentry Next.js SDK options
    widenClientFileUpload: true,
    transpileClientSDK: true,
    // tunnelRoute: "/monitoring",
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);
