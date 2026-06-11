import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Creator share links: twiinn.ai/@handle → the public twin page on the app
      {
        source: "/@:slug",
        destination: "https://app.twiinn.ai/@:slug",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
