import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  // Ask Chromium for client hints the router uses as visitor context (lib/visitor-context.ts).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Accept-CH",
            value:
              "Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, ECT, RTT, Downlink, Device-Memory, Sec-CH-Prefers-Color-Scheme, Sec-CH-Prefers-Reduced-Motion",
          },
        ],
      },
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
