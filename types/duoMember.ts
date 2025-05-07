export type DuoMember = {
	name: string;
	slug: {
		current: string;
	};
	image: {
		asset: {
			url: string;
		};
	};
	imageUrl: string;
	fullName: string;
	dateOfBirth: string;
	placeOfBirth: string;
	instruments: string;
	bio: string;
};
