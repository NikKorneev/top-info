import { defineField, defineType } from "sanity";

export const articleType = defineType({
	name: "article",
	title: "Article",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Заголовок статьи",
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
			name: "imageUrl",
			title: "Обложка статьи",
			type: "url",
		}),
		defineField({
			name: "promo",
			title: "О чем статья кратко",
			type: "text",
		}),
		defineField({
			name: "content",
			title: "Содержание статьи",
			description: "A	rich markdown field with image uploading",
			type: "markdown",
		}),
		defineField({
			name: "references",
			title: "Ссылки на источники",
			type: "array",
			of: [{ type: "url" }],
		}),
		defineField({
			name: "date",
			title: "Дата публикации",
			type: "date",
			initialValue: () => new Date().toISOString().split("T")[0], // YYYY-MM-DD
		}),
		defineField({
			name: "lang",
			type: "string",
			options: {
				list: [
					{ title: "Russian", value: "ru" },
					{ title: "English", value: "en" },
				],
			},
			initialValue: () => "ru",
		}),
	],
});
