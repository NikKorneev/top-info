import { defineField, defineType } from "sanity";

export const albumType = defineType({
	name: "album",
	title: "Album",
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
			name: "title",
			type: "string",
		}),
		defineField({
			name: "albumDescription",
			type: "markdown",
		}),
		defineField({
			name: "promoDescription",
			type: "markdown",
		}),
		defineField({
			name: "albumCover",
			type: "url",
		}),
		defineField({
			name: "releaseDate",
			type: "date",
		}),
		defineField({
			name: "links",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ name: "name", type: "string" },
						{ name: "link", type: "url" },
					],
				},
			],
		}),
		defineField({
			name: "slug",
			type: "slug",
			options: {
				source: "name",
				isUnique: () => true,
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
		defineField({
			name: "songs",
			title: "Песни",
			type: "array",
			of: [{ type: "reference", to: [{ type: "song" }] }],
		}),
		defineField({
			name: "gallery",
			title: "Галерея",
			type: "array",
			of: [{ type: "url" }],
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
