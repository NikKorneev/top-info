export type AccordionContentType = {
	title: string;
	id: number;
	description: string;
	image: string;
};

export type AccordionItemType = Pick<AccordionContentType, "title" | "id">;
