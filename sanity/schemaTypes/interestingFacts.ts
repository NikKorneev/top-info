import { defineType } from "sanity";

export const interestingFacts = defineType({
	name: "interestingFact",
	title: "Interesting Fact",
	type: "document",
	fields: [
		{
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
		},
		{
			name: "id",
			type: "number",
			title: "ID",
		},
		{
			name: "title",
			type: "string",
			title: "Title",
		},
		{
			name: "description",
			type: "markdown",
			title: "Description",
		},
		{
			name: "image",
			type: "url",
			title: "Image link",
		},
	],
});
