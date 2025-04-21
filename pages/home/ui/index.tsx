import Header from "@/components/ui/header";
import About from "./components/about";
import Background from "./components/background";
import Btn from "./components/button";
import Duo from "./components/duo";
import Info from "./components/info";
import MainTitle from "./components/mainTitle";
const HomePage = () => {
	return (
		<>
			<div className="relative lg:min-h-screen font-martian">
				<Header />
				<MainTitle />
				<Btn />
				<Duo />
				<Background />
			</div>
			<Info />
			<About />
			{/* <ParallaxSection /> */}
		</>
	);
};

export default HomePage;
