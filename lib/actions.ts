import { client } from "@/sanity/lib/client";
import { SEARCH } from "@/sanity/query/queries";

export async function searchGlobal(q: string, locale: string = "en") {
	if (!q) return [];
	const unique = [];
	const seen = new Set();
	const results = await client.fetch(SEARCH, { q: `*${q}*`, locale });
	for (const item of results) {
		if (!seen.has(item.slugCurrent)) {
			seen.add(item.slugCurrent);
			unique.push(item);
		}
	}

	return unique.slice(0, 5);
}
