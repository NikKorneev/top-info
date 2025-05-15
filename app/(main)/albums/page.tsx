import AlbumBack from "@/components/animated/albumBack";
import Albums from "@/components/animated/albums";

const Page = () => {
	return (
		<div>
			<AlbumBack text={"альбомы"} />
			<div className="relative z-50">
				<Albums title="Альбомы" titleOnce={false} />
			</div>
		</div>
	);
};

export default Page;
