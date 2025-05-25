import { client } from "@/sanity/lib/client";
import {
	GET_FACT_BY_ID,
	GET_FACTS,
	GET_SONG_BY_SLUG,
} from "@/sanity/query/queries";
import { AccordionContentType, AccordionItemType } from "@/types/accordion";
import AccordionContent from "./accordionContent";
import { AccordionItems } from "./accordionItem";

type Props = {
	type: "album" | "story";
	id: number | string;
	title: string;
	slug?: string;
	songs?: { title: string; slug: { current: string } }[];
	locale?: "en" | "ru";
};

const Accordion = async ({
	title,
	type,
	id = 1,
	slug,
	songs,
	locale = "en",
}: Props) => {
	const items =
		type === "album"
			? songs
			: await client.fetch<AccordionItemType[]>(GET_FACTS, { locale });

	const fetchObject = type === "album" ? GET_SONG_BY_SLUG : GET_FACT_BY_ID;
	const fetchParams = type === "album" ? { slug, locale } : { id, locale };
	const content = await client.fetch<[AccordionContentType]>(
		fetchObject,
		fetchParams
	);

	if (!content) return null;
	if (!items) return null;

	return (
		<section className="max-w-[75%] @md:max-w-[100%]  mx-auto font-martian max-sm:max-w-full">
			<h3 className="title text-center mb-10">{title}</h3>
			<div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1 max-md:gap-2.5 max-sm:px-4">
				<div className="max-lg:hidden">
					<AccordionContent
						id={content[0]?.id}
						description={content[0]?.description || ""}
						image={content[0]?.image}
						title={content[0]?.title}
						key={content[0]?.id + "gridContent"}
					/>
				</div>
				<div className="flex flex-col gap-2 ">
					<AccordionItems
						items={items as any}
						id={id}
						paramName={type === "album" ? "slug" : "id"}
						description={content[0]?.description || ""}
						image={content[0]?.image || ""}
					/>
				</div>
			</div>
		</section>
	);
};

export default Accordion;
