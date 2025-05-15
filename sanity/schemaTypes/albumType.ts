import { defineField, defineType } from "sanity";

export const albumType = defineType({
	name: "album",
	title: "Album",
	type: "document",
	fields: [
		defineField({
			name: "title",
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
			name: "titleSVG",
			type: "image",
		}),
	],
});
