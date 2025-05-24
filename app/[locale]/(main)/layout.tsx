import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { ReactLenis } from "lenis/react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import NextTopLoader from "nextjs-toploader";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("MetaHome");
	const locale = await getLocale();
	const headersList = await headers();
	const pathname = headersList.get("x-pathname") || "/";
	const baseUrl =
		process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
	const fullUrl = baseUrl + pathname;

	return {
		title: t("title"),
		description: t("description"),
		keywords: t("keywords").split(","),
		authors: [{ name: "Unofficial Fan Team" }],
		alternates: {
			canonical: fullUrl,
		},
		openGraph: {
			title: t("title"),
			description: t("description"),
			url: fullUrl,
			siteName: "Twenty One Pilots Info",
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
			title: t("title"),
			description: t("description"),
			images: ["https://i.postimg.cc/qRpZbhmV/og-clancy-3552517413.png"],
		},
		robots: {
			index: true,
			follow: true,
		},
	};
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ReactLenis
			options={{
				smoothWheel: true, // сглаживает колесо мышки
				lerp: 0.07, // 0.01 - супер плавно, 1 - мгновенно (рекомендуется: 0.05–0.2)
				wheelMultiplier: 1, // чувствительность мышки (если сильно скачет — уменьши до 0.8)
				touchMultiplier: 1.5, // чувствительность на тач-устройствах
				duration: 1.2, // влияет на scrollTo (если используешь), в секундах
				orientation: "vertical", // по умолчанию вертикальный скролл
			}}
			root
		>
			<NextTopLoader color="#cf2f2f" />

			<div className="relative">
				<Header />
			</div>

			{children}
			<Footer />
		</ReactLenis>
	);
}
