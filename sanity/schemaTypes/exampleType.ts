import { defineField, defineType } from "sanity";

export const eventType = defineType({
	name: "event",
	title: "Event",
	type: "document",
	fields: [
		defineField({
			name: "name",
			type: "string",
		}),
	],
});

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
			name: "image",
			type: "image",
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
	],
});
