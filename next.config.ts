import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL("https://i.postimg.cc/**")],
	},
};

export default nextConfig;
