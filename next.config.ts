import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
