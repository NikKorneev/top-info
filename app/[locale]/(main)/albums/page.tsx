import AlbumBack from "@/components/animated/albumBack";
import Albums from "@/components/animated/albums";
import { getAlbums } from "@/lib/api";

const Page = async () => {
	const albums = await getAlbums();
	return (
		<div>
			<AlbumBack text={"альбомы"} />
			<div className="relative z-50">
				<Albums title="Альбомы" albums={albums} titleOnce={false} />
			</div>
		</div>
	);
};

export default Page;
