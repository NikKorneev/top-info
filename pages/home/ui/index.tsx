import Albums from "@/components/animated/albums";
import { getAlbums } from "@/lib/api";
import About from "./components/about";
import Background from "./components/background";
import Btn from "./components/button";
import Duo from "./components/duo";
import Info from "./components/info";
import LastSong from "./components/lastSong";
import MainTitle from "./components/mainTitle";
import ParticipantSection from "./components/participant";
import Quote from "./components/quote";
const HomePage = async () => {
	const albums = await getAlbums();
	return (
		<>
			<div className="relative lg:min-h-screen font-martian">
				<MainTitle />
				<Btn />
				<Duo />
				<Background />
			</div>
			<Info />
			<About />
			<div className="my-40">
				<Quote />
			</div>
			<div>
				<ParticipantSection />
			</div>
			<div className="mt-40">
				<Albums albums={albums} title="Дискография" />
			</div>

			<LastSong />

			{/* <ParallaxSection /> */}
		</>
	);
};

export default HomePage;
