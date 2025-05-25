export type Article = {
	_id: Readonly<string>;
	title: string;
	slug: { current: string };
	imageUrl: string;
	content: string;
	date: Date;
	references: string[];
	promo: string;
	lang: "ru" | "en";
};
