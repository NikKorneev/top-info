import "easymde/dist/easymde.min.css";
import type { Metadata } from "next";
import { Inter, Martian_Mono, Oswald } from "next/font/google";
import "./globals.css";

const martian = Martian_Mono({
	variable: "--font-martian",
	subsets: ["latin", "cyrillic"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["cyrillic", "latin"],
});

const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
	title: "Twenty One Pilots Main Page",
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
				className={`${martian.variable} ${inter.variable} ${oswald.variable} antialiased bg-back`}
			>
				{children}
			</body>
		</html>
	);
}
