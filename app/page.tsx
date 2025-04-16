import Background from "@/pages/home/ui/components/background";
import Duo from "@/pages/home/ui/components/duo";
import MainTitle from "@/pages/home/ui/components/mainTitle";
import ParallaxSection from "@/pages/home/ui/components/parallaxSection";
import Image from "next/image";

export default async function Home() {
	return (
		<div className="relative min-h-screen font-martian">
			<header className="header">
				<div className="container mx-auto items-center flex justify-between">
					<Image
						src={"/top-logo.svg"}
						width={64}
						height={64}
						alt="Twenty one pilots' logo"
					/>
					<nav className="flex items-center gap-8">
						<ul className="flex gap-8 text-[#ffffffd3] uppercase font-normal xl:text-[18px] text-sm sm:text-[16px] *:transition-colors *:cursor-pointer *:hover:text-mainYellow">
							<li>Главная</li>
							<li>Новости</li>
							<li>Альбомы</li>
							<li>Мерч</li>
						</ul>

						<div className="cursor-pointer hover:*:animate-bounce">
							<Image
								src="/icons/search.svg"
								width={20}
								height={20}
								alt="search icon"
								className="text-amber-50"
							/>
						</div>
					</nav>
				</div>
			</header>

			<MainTitle />
			<Duo />
			<Background />
			<ParallaxSection />
		</div>
	);
}
