import { ReactLenis } from "lenis/react";
import type { Metadata } from "next";
import { Inter, Martian_Mono } from "next/font/google";
import "./globals.css";

const martian = Martian_Mono({
	variable: "--font-martian",
	subsets: ["latin", "cyrillic"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["cyrillic", "latin"],
});

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
		<html lang="ru">
			<body
				className={`${martian.variable} ${inter.variable} antialiased bg-back`}
			>
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
					{children}
				</ReactLenis>
			</body>
		</html>
	);
}
