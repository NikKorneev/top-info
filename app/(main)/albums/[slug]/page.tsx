import AlbumBack from "@/components/animated/albumBack";
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
				text={info[0].title}
				image={info[0].imageUrl}
				className={info[0].classNames}
				titleSVG={info[0].titleSVG}
			/>
		</div>
	);
};

export default Page;
