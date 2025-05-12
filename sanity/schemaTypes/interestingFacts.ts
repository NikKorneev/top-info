import { defineType } from "sanity";

export const interestingFacts = defineType({
	name: "interestingFact",
	title: "Interesting Fact",
	type: "document",
	fields: [
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
