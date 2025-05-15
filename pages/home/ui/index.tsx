import Albums from "@/components/animated/albums";
import About from "./components/about";
import Background from "./components/background";
import Btn from "./components/button";
import Duo from "./components/duo";
import Info from "./components/info";
import LastSong from "./components/lastSong";
import MainTitle from "./components/mainTitle";
import ParticipantSection from "./components/participant";
import Quote from "./components/quote";
const HomePage = () => {
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
				<Albums title="Дискография" />
			</div>

			<LastSong />

			{/* <ParallaxSection /> */}
		</>
	);
};

export default HomePage;
