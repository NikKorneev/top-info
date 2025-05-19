import { defineField, defineType } from "sanity";

export const songType = defineType({
	name: "song",
	title: "Song",
	type: "document",
	fields: [
		defineField({
			name: "id",
			type: "number",
		}),
		defineField({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "slug",
			type: "slug",
			options: {
				source: "title",
			},
		}),
		defineField({
			name: "description",
			type: "markdown",
		}),
		defineField({
			name: "album",
			type: "reference",
			to: [{ type: "album" }],
		}),
	],
});
