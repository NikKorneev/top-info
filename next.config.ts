import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/duo",
				destination: "/duo/tyler-joseph",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
