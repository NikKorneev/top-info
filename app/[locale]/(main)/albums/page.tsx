import AlbumBack from "@/components/animated/albumBack";
import Albums from "@/components/animated/albums";
import { getAlbums } from "@/lib/api";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("MetaAlbums");
	const locale = await getLocale();
	const headersList = await headers();
	const pathname = headersList.get("x-pathname") || "/";
	const baseUrl =
		process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
	const fullUrl = baseUrl + pathname;

	return {
		title: t("pageTitle"),
		description: t("pageDescription"),
		keywords: t("pageKeywords").split(","),
		openGraph: {
			title: t("pageTitle"),
			description: t("pageDescription"),
			url: fullUrl,

			locale: locale === "ru" ? "ru_RU" : "en_US", // можно автоматизировать
			type: "website",
			images: [
				{
					url: "https://i.postimg.cc/qRpZbhmV/og-clancy-3552517413.png", // 🔥 Здесь картинка!
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
	};
}

type Props = {
	params: Promise<{ locale: string }>;
};

const Page = async ({ params }: Props) => {
	const locale = (await params).locale;
	const albums = await getAlbums(locale);
	const t = await getTranslations("AlbumPage");
	return (
		<div>
			<AlbumBack text={t("t")} />
			<div className="relative z-50">
				<Albums
					title={t("t")}
					subtitle={t("subt")}
					albums={albums}
					titleOnce={false}
				/>
			</div>
		</div>
	);
};

export default Page;
