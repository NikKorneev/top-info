import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { ReactLenis } from "lenis/react";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
	title: "Twenty One Pilots unofficial information site",
	description: "!To do",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ReactLenis
			options={{
				smoothWheel: true, // сглаживает колесо мышки
				lerp: 0.1, // 0.01 - супер плавно, 1 - мгновенно (рекомендуется: 0.05–0.2)
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
			<div className="mt-40">
				<Footer />
			</div>
		</ReactLenis>
	);
}
