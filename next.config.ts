import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL("https://i.postimg.cc/**")],
	},
	async redirects() {
		return [
			{
				source: "/duo",
				destination: "/tyler-joseph",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
