import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/og.png",
        destination: "/api/og",
      },
    ];
  },
};

export default withContentCollections(nextConfig);
