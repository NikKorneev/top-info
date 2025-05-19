export type AccordionContentType = {
	title: string;
	id: number;
	description: string;
	image: string;
	slug?: { current: string };
};

export type AccordionItemType = Pick<
	AccordionContentType,
	"title" | "id" | "slug"
>;
