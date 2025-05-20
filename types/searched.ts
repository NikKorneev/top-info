export type SearchedType = {
	_id: string;
	_type: "album" | "song" | "duoMember";
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
