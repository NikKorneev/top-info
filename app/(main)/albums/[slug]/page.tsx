import AlbumBack from "@/components/animated/albumBack";
import RunningLine from "@/components/animated/runningLine";
import { client } from "@/sanity/lib/client";
import { GET_ALBUM_BY_SLUG } from "@/sanity/query/queries";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const slug = (await params).slug;

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
		</div>
	);
};

export default Page;
