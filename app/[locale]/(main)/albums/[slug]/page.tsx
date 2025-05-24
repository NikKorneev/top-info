import Accordion from "@/components/animated/accordion";
import AlbumBack from "@/components/animated/albumBack";
import { DragCards } from "@/components/animated/dragCardGallery";
import RunningLine from "@/components/animated/runningLine";
import AlbumCard from "@/pages/album/ui/AlbumCard";
import { client } from "@/sanity/lib/client";
import { GET_ALBUM_BY_SLUG } from "@/sanity/query/queries";
import { getLocale } from "next-intl/server";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

interface AlbumInfo {
	title: string;
	promoDescription: string;
	image?: string;
	releaseDate?: string;
	artist: string;
	albumCover: string;
}

interface GenerateMetadataProps {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params }: GenerateMetadataProps) {
	const { slug } = params;
	const locale = await getLocale();
	const headersList = await headers();
	const pathname = headersList.get("x-pathname") || "/";

	// Base URL configuration
	const baseUrl =
		process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
	const fullUrl = `${baseUrl}${pathname}`;

	// Fetch album data (replace with your actual data fetching logic)
	const albumInfo: AlbumInfo = await client.fetch(GET_ALBUM_BY_SLUG, {
		slug,
		locale,
	});

	// Default fallback image
	const defaultOgImage =
		"https://i.postimg.cc/qRpZbhmV/og-clancy-3552517413.png";
	const ogImage = albumInfo.albumCover || defaultOgImage;

	// Generate dynamic title and description
	const title = `${albumInfo.title} - ${locale === "ru" ? "Альбомы" : "Albums"} - Twenty One Pilots Info`;
	const description = albumInfo.promoDescription;

	// Generate keywords based on album info
	const keywords = [
		"tyler Joseph",
		"josh Dun",
		albumInfo.title.toLowerCase(),
		"album",
		"music",
		"songs",
		"lyrics",
		locale === "ru" ? "музыка" : "music",
		locale === "ru" ? "альбом" : "album",
		locale === "ru" ? "тайлер джозеф" : "Tyler Joseph",
		locale === "ru" ? "джош дан" : "Josh Dun",
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

		// Canonical URL
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
			type: "music.album",
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: `Twenty One Pilots - ${albumInfo.title} Album Cover`,
					type: "image/png",
				},
			],
			// Music-specific Open Graph tags
			...(albumInfo.releaseDate && {
				music: {
					releaseDate: albumInfo.releaseDate,
					musician: [albumInfo.artist],
				},
			}),
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
					url: ogImage,
					alt: `Twenty One Pilots - ${albumInfo.title} Album Cover`,
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

		// Additional SEO tags
		category: "Music",
		classification: "Music Album Information",

		// Schema.org structured data (as metadata)
		other: {
			"application/ld+json": JSON.stringify({
				"@context": "https://schema.org",
				"@type": "MusicAlbum",
				name: albumInfo.title,
				byArtist: {
					"@type": "MusicGroup",
					name: albumInfo.artist,
				},
				description: description,
				image: ogImage,
				url: fullUrl,
				...(albumInfo.releaseDate && {
					datePublished: albumInfo.releaseDate,
				}),
				inLanguage: locale,
				publisher: {
					"@type": "Organization",
					name: "Twenty One Pilots Info",
					url: baseUrl,
				},
			}),
		},
	};
}

const Page = async ({
	params,
	searchParams,
}: {
	params: Promise<{ slug: string; locale: "en" | "ru" }>;
	searchParams: Promise<{ slug: string }>;
}) => {
	const awaitedParams = await params;
	const slug = awaitedParams.slug;
	const locale = awaitedParams.locale;
	const songSlug = (await searchParams).slug;

	const info = await client.fetch(GET_ALBUM_BY_SLUG, { slug, locale });

	if (!info) {
		return notFound();
	}
	return (
		<div>
			<AlbumBack
				text={info.title}
				image={info.imageUrl}
				className={info.classNames}
				titleSVG={info.titleSVG}
			/>
			<RunningLine items={info.songs} />
			<div className="mx-auto flex justify-center gap-5 pt-20 max-w-[1000px] max-md:flex-col max-md:items-center max-lg:max-w-full max-lg:px-10 max-md:px-4">
				<AlbumCard
					albumCover={info.albumCover}
					title={info.title}
					links={info.links}
					releaseDate={info.releaseDate}
				/>
				<div className=" text-grayMain flex flex-col leading-[160%] text-[20px] gap-2 max-md:text-[16px] ">
					<Markdown
						components={{
							p: ({ children }) => (
								<p className="mb-2 text-grayMain leading-[150%]">
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
						}}
					>
						{info.albumDescription}
					</Markdown>
				</div>
			</div>

			<div
				id="tracklist"
				className="max-w-[1000px] mx-auto py-20 @container max-lg:px-10 max-md:px-0"
			>
				{info.songs?.length > 0 && (
					<Accordion
						title={"Треклист"}
						type="album"
						id={1}
						locale={locale}
						slug={songSlug || info.songs[0].slug.current}
						songs={info.songs}
					/>
				)}
			</div>

			{info.gallery?.length > 0 && (
				<div>
					<DragCards srcs={info.gallery} title={"Галлерея"} />
				</div>
			)}
		</div>
	);
};

export default Page;
