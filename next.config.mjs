import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint errors during build
  },
  output: 'standalone', // Optimize for Netlify deployment
  images: {
    unoptimized: true, // Required for Netlify static deployment
  }
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
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);
