import { client } from "@/sanity/lib/client";
import { GET_DUO_BY_NAME } from "@/sanity/query/queries";
import { notFound } from "next/navigation";
import HeroBanner from "./ui/HeroBanner";

const AboutPage = async ({ params }: { params: Promise<{ name: string }> }) => {
	const slug = (await params).name;

	const info = await client.fetch(GET_DUO_BY_NAME, { slug });

	if (!info || info.length === 0) {
		return notFound();
	}
	return (
		<main>
			<HeroBanner info={info[0]} />
		</main>
	);
};

export default AboutPage;
