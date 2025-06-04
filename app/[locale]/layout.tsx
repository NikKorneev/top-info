import { Analytics } from "@vercel/analytics/next";
import "easymde/dist/easymde.min.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Martian_Mono, Oswald, Roboto } from "next/font/google";
import "../globals.css";

const martian = Martian_Mono({
	variable: "--font-martian",
	subsets: ["latin", "cyrillic"],
});

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin", "cyrillic"],
});

const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["latin", "cyrillic"],
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
				className={`${martian.variable} ${roboto.variable}  ${oswald.variable}  antialiased bg-back`}
			>
				<Analytics />
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
