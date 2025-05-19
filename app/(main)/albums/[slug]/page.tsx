import Accordion from "@/components/animated/accordion";
import AlbumBack from "@/components/animated/albumBack";
import { DragCards } from "@/components/animated/dragCardGallery";
import RunningLine from "@/components/animated/runningLine";
import AlbumCard from "@/pages/album/ui/AlbumCard";
import { client } from "@/sanity/lib/client";
import { GET_ALBUM_BY_SLUG } from "@/sanity/query/queries";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

const Page = async ({
	params,
	searchParams,
}: {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ slug: string }>;
}) => {
	const slug = (await params).slug;
	const songSlug = (await searchParams).slug;

	const info = await client.fetch(GET_ALBUM_BY_SLUG, { slug });

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

			<div className="max-w-[1000px] mx-auto py-20 @container max-lg:px-10 max-md:px-0">
				<Accordion
					title={"Треклист"}
					type="album"
					id={1}
					slug={songSlug || info.songs[0].slug.current}
					songs={info.songs}
				/>
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
