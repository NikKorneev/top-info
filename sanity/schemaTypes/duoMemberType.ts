import { defineField, defineType } from "sanity";

export const duoMemberType = defineType({
	name: "duoMember",
	title: "Duo Member",
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
			name: "name",
			type: "string",
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
