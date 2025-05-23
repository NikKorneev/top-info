import { defineField, defineType } from "sanity";

export const songType = defineType({
	name: "song",
	title: "Song",
	type: "document",
	fields: [
		defineField({
			name: "lang",
			type: "string",
			options: {
				list: [
					{ title: "Russian", value: "ru" },
					{ title: "English", value: "en" },
				],
			},
			validation: (Rule) => Rule.required(),
			initialValue: "ru",
		}),
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
				isUnique: () => true,
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
	preview: {
		select: {
			title: "title",
			language: "lang",
		},
		prepare({ title, language }) {
			return {
				title: `${title} (${language})`,
			};
		},
	},
});
