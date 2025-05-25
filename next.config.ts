import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

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

export default withNextIntl(nextConfig);
