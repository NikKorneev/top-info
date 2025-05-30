import BackBtn from "@/components/ui/backBtn";
import { client } from "@/sanity/lib/client";
import { GET_ARTICLE_BY_SLUG } from "@/sanity/query/queries";
import { Article } from "@/types/article";
import { getLocale } from "next-intl/server";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Props = {
	params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props) {
	const slug = (await params).slug;
	const locale = await getLocale();
	const headersList = await headers();
	const pathname = headersList.get("x-pathname") || "/";

	// Base URL configuration
	const baseUrl =
		process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
	const fullUrl = `${baseUrl}${pathname}`;

	let info = await client.fetch<Article>(GET_ARTICLE_BY_SLUG, {
		slug,
		locale,
	});

	if (!info) {
		info = await client.fetch<Article>(GET_ARTICLE_BY_SLUG, {
			slug,
			locale: locale == "en" ? "ru" : "en",
		});
		if (!info) return notFound();
	}

	// Default fallback image
	const defaultOgImage =
		"https://i.postimg.cc/qRpZbhmV/og-clancy-3552517413.png";
	const imageUrl = info.imageUrl || defaultOgImage;

	// Generate dynamic title and description
	const title = `${info.title} - TOP Info`;
	const description = info.promo;

	// Generate keywords based on album info
	const keywords = [
		info.title.toLowerCase(),
		locale === "ru" ? "Новости" : "news",
		locale === "ru" ? "Обновления" : "updates",
	];

	return {
		title: {
			default: title,
			template: `%s | Twenty One Pilots Info`,
		},
		description,
		keywords,
		authors: [{ name: "Nikita Korneev" }],
		creator: "Nick Korneev",
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
					alt: `Twenty One Pilots - ${info.title}`,
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
					alt: `Twenty One Pilots - ${info.title}`,
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

export default async function NewsArticlePage({ params }: Props) {
	const awaited = await params;
	const slug = awaited.slug;
	const locale = awaited.locale || "en";

	let article = await client.fetch<Article>(GET_ARTICLE_BY_SLUG, {
		slug,
		locale,
	});

	if (!article) {
		article = await client.fetch<Article>(GET_ARTICLE_BY_SLUG, {
			slug,
			locale: locale == "en" ? "ru" : "en",
		});
		if (!article) return notFound();
	}

	return (
		<section className="max-w-3xl mx-auto px-4 pt-30 pb-20">
			<div className="mb-2">
				<BackBtn />
			</div>

			<h1 className="text-4xl font-bold mb-4 text-white">
				{article.title}
			</h1>

			<p className="text-sm text-gray-400 mb-6">
				{new Date(article.date).toLocaleDateString("en-US", {
					year: "numeric",
					month: "long",
					day: "numeric",
				})}
			</p>

			{article.imageUrl && (
				<img
					src={article.imageUrl}
					alt={article.title}
					className="rounded-xl shadow-lg w-full mb-8"
				/>
			)}

			<div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
				<Markdown
					rehypePlugins={[rehypeRaw]}
					components={{
						p: ({ children }) => (
							<p className="mb-4 text-grayMain leading-[150%] shadow-2xs  text-[18px] max-md:text-[16px]">
								{children}
							</p>
						),
						a: ({ children, href }) => (
							<a
								href={href}
								target="_blank"
								className="underline mb-2 text-grayMain cursor-pointer leading-[150%]"
							>
								{children}
							</a>
						),
						iframe: (props) => (
							<iframe
								{...props}
								className="w-full aspect-video py-2"
								allowFullScreen
							/>
						),
						blockquote: (props) => (
							<blockquote
								style={{
									borderLeft: "4px solid #ccc",
									paddingLeft: "1rem",
									color: "#555",
									fontStyle: "italic",
									margin: "1em 0",
								}}
								{...props}
							/>
						),
					}}
				>
					{article.content}
				</Markdown>
			</div>

			{article.references.length > 0 && (
				<div className="mt-10">
					<h2 className="text-2xl font-bold mb-4 text-white">
						{locale === "en" ? "References" : "Ссылки на источники"}
					</h2>
					<ul>
						{article.references.map((reference, i) => (
							<li key={reference} className="mb-2 text-white">
								{i + 1 + ". "}
								<a
									href={reference}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-300 hover:underline"
								>
									{reference}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</section>
	);
}
