import AboutPage from "@/pages/duo";
import { client } from "@/sanity/lib/client";
import { GET_DUO_BY_NAME } from "@/sanity/query/queries";
import { getLocale } from "next-intl/server";
import { headers } from "next/headers";

interface GenerateMetadataProps {
	params: {
		name: string;
	};
}

export async function generateMetadata({ params }: GenerateMetadataProps) {
	const { name } = params;
	const locale = await getLocale();
	const headersList = await headers();
	const pathname = headersList.get("x-pathname") || "/";

	// Base URL configuration
	const baseUrl =
		process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
	const fullUrl = `${baseUrl}${pathname}`;

	const [info] = await client.fetch(GET_DUO_BY_NAME, { slug: name, locale });

	// Default fallback image
	const defaultOgImage =
		"https://i.postimg.cc/qRpZbhmV/og-clancy-3552517413.png";
	const imageUrl = info.imageUrl || defaultOgImage;

	// Generate dynamic title and description
	const title = `${info.name} - ${locale === "ru" ? "Биография" : "Biography"} - Twenty One Pilots Info`;
	const description = `${locale == "ru" ? "Биография" : "Biography"} ${info.name} - Twenty One Pilots Info`;

	// Generate keywords based on album info
	const keywords = [
		info.name.toLowerCase(),
		locale === "ru" ? "биография" : "biography",
		locale === "ru" ? "альбом" : "album",
	];

	return {
		title: {
			default: title,
			template: `%s | Twenty One Pilots Info`,
		},
		description,
		keywords,
		authors: [{ name: "Unofficial Fan Team" }],
		creator: "Twenty One Pilots Fan Community",
		publisher: "Twenty One Pilots Info",

		alternates: {
			canonical: fullUrl,
			languages: {
				en: `${baseUrl}/en${pathname}`,
				ru: `${baseUrl}/ru${pathname}`,
			},
		},

		// Open Graph
		openGraph: {
			title,
			description,
			url: fullUrl,
			siteName: "Twenty One Pilots Info",
			locale: locale === "ru" ? "ru_RU" : "en_US",
			type: "article",
			images: [
				{
					url: imageUrl,
					width: 1200,
					height: 630,
					alt: `Twenty One Pilots - ${info.name} biography`,
					type: "image/png",
				},
			],
		},

		// Twitter Card
		twitter: {
			card: "summary_large_image",
			site: "@twentyonepilots", // Replace with actual Twitter handle
			creator: "@twentyonepilots",
			title,
			description,
			images: [
				{
					url: imageUrl,
					alt: `Twenty One Pilots - ${info.name} biography`,
				},
			],
		},

		// Robots
		robots: {
			index: true,
			follow: true,
			nocache: false,
			googleBot: {
				index: true,
				follow: true,
				noimageindex: false,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
	};
}

const Page = async ({
	params,
}: {
	params: Promise<{ name: string; locale: string }>;
}) => {
	return <AboutPage params={params} />;
};

export default Page;
