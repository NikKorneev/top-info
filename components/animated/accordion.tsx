import { client } from "@/sanity/lib/client";
import { GET_FACT_BY_ID, GET_FACTS } from "@/sanity/query/queries";
import { AccordionContentType, AccordionItemType } from "@/types/accordion";
import AccordionContent from "./accordionContent";
import { AccordionItems } from "./accordionItem";

type Props = {
	title: string;
	type: "story";
	id: number;
};

const Accordion = async ({ title, type, id = 1 }: Props) => {
	const items = await client.fetch<AccordionItemType[]>(GET_FACTS);
	const content = await client.fetch<[AccordionContentType]>(GET_FACT_BY_ID, {
		id,
	});

	return (
		<section className="max-w-[75%]  mx-auto font-martian max-sm:max-w-full">
			<h3 className="title text-center mb-10">{title}</h3>
			<div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1 max-md:gap-2.5 max-sm:px-4">
				<div className="max-lg:hidden">
					<AccordionContent
						id={content[0].id}
						description={content[0].description}
						image={content[0].image}
						title={content[0].title}
						key={content[0].id + "gridContent"}
					/>
				</div>
				<div className="flex flex-col gap-2 ">
					<AccordionItems
						items={items}
						id={id}
						description={content[0].description}
						image={content[0].image}
					/>
				</div>
			</div>
		</section>
	);
};

export default Accordion;
