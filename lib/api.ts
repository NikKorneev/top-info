import { client } from "@/sanity/lib/client";
import { GET_ALBUMS } from "@/sanity/query/queries";
import { AlbumType } from "@/types/album";

export async function getAlbums() {
	return client.fetch<AlbumType[]>(GET_ALBUMS);
}
