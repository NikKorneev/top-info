export type SearchedType = {
	_id: string;
	id?: number;
	_type: "album" | "song" | "duoMember" | "interestingFact" | "article";
	slug: {
		current: string;
	};
	title?: string;
	name?: string;
	album?: {
		slug: {
			current: string;
		};
	};
};
