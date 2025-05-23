import { client } from "@/sanity/lib/client";
import { GET_ALBUMS, SEARCH } from "@/sanity/query/queries";
import { AlbumType } from "@/types/album";

export async function getAlbums(locale: string = "en") {
	return client.fetch<AlbumType[]>(GET_ALBUMS, { locale });
}

export async function searchGlobal(q: string) {
	return client.fetch(SEARCH, { q });
}
