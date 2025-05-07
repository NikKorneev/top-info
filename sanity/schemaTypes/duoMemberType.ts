import { defineField, defineType } from "sanity";

export const duoMemberType = defineType({
	name: "duoMember",
	title: "Duo Member",
	type: "document",
	fields: [
		defineField({
			name: "name",
			type: "string",
		}),
		defineField({
			name: "slug",
			type: "slug",
			options: {
				source: "name",
			},
		}),
		defineField({
			name: "imageUrl",
			type: "url",
		}),
		defineField({
			name: "fullName",
			type: "string",
		}),
		defineField({
			name: "dateOfBirth",
			type: "date",
		}),
		defineField({
			name: "placeOfBirth",
			type: "string",
		}),
		defineField({
			name: "instruments",
			type: "string",
		}),
		defineField({
			name: "bio",
			description: "A	rich markdown field with image uploading",
			type: "markdown",
		}),
	],
});
