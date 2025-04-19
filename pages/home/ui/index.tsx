import Header from "@/components/ui/header";
import Background from "./components/background";
import Btn from "./components/button";
import Duo from "./components/duo";
import Info from "./components/info";
import MainTitle from "./components/mainTitle";
const HomePage = () => {
	return (
		<>
			<div className="relative min-h-screen font-martian">
				<Header />
				<MainTitle />
				<Btn />
				<Duo />
				<Background />
			</div>
			<Info />
			{/* <ParallaxSection /> */}
		</>
	);
};

export default HomePage;
