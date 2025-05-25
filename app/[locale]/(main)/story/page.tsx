import StoryPage from "@/components/pages/story/ui";
import { Metadata } from "next";

import { getLocale, getTranslations } from "next-intl/server";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("MetaStory");
	const headersList = await headers();
	const locale = await getLocale();
	const pathname = headersList.get("x-pathname") || "/";
	const baseUrl =
		process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
	const fullUrl = baseUrl + pathname;

	return {
		title: t("pageTitle"),
		description: t("pageDescription"),
		keywords: t("pageKeywords").split(","),
		alternates: {
			canonical: fullUrl,
		},
		openGraph: {
			title: t("pageTitle"),
			description: t("pageDescription"),
			url: fullUrl,
			locale: locale === "ru" ? "ru_RU" : "en_US",
			type: "website",
			images: [
				{
					url: "https://i.postimg.cc/qRpZbhmV/og-clancy-3552517413.png",
					width: 1200,
					height: 630,
					alt: "Twenty One Pilots Band Banner",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: t("pageTitle"),
			description: t("pageDescription"),
			images: ["https://i.postimg.cc/qRpZbhmV/og-clancy-3552517413.png"],
		},
		robots: {
			index: true,
			follow: true,
		},
	};
}

const Page = async ({
	params,
	searchParams,
}: {
	params: Promise<{ locale: "ru" | "en" }>;
	searchParams: Promise<{ [key: string]: string }>;
}) => {
	const locale = (await params).locale || "en";
	const id = +(await searchParams).id || 1;
	return (
		<main>
			<StoryPage id={id} locale={locale} />
		</main>
	);
};

export default Page;
