import { Analytics } from "@vercel/analytics/next";
import "easymde/dist/easymde.min.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Martian_Mono, Oswald } from "next/font/google";
import "../globals.css";

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
	title: "Twenty One Pilots Info",
};

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const locale = (await params).locale;
	const messages = await getMessages();
	return (
		<html lang={locale}>
			<body
				className={`${martian.variable} ${inter.variable} ${oswald.variable} antialiased bg-back`}
			>
				<Analytics />
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
