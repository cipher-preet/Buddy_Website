import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    localPatterns: [
      { pathname: "/**", search: "" },
      { pathname: "/screenshots/**", search: "?v=20261015-cinematic" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/get-buddy",
        destination: "/get-kukunotes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
