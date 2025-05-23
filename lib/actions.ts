import { client } from "@/sanity/lib/client";
import { SEARCH } from "@/sanity/query/queries";

export async function searchGlobal(q: string, locale: string = "en") {
	if (!q) return [];
	const results = await client.fetch(SEARCH, { q: `*${q}*`, locale });

	return results;
}
