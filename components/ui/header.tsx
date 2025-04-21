"use client";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
	const [menuIsOpened, setMenuIsOpened] = useState(false);
	return (
		<header className="header">
			<div className="container mx-auto items-center flex justify-between max-sm:px-3">
				<Image
					src={"/top-logo.svg"}
					width={64}
					height={64}
					alt="Twenty one pilots' logo"
					className="max-sm:size-10"
				/>
				<nav className="flex items-center gap-8">
					<ul className="hidden md:flex gap-8 text-[#ffffffd3] uppercase font-normal xl:text-[18px] text-sm sm:text-[16px] *:transition-colors *:cursor-pointer *:hover:text-mainYellow">
						<li>Главная</li>
						<li>Новости</li>
						<li>Альбомы</li>
						<li>Мерч</li>
					</ul>
					<div
						className={`menu flex md:hidden  ${menuIsOpened ? "open" : ""}`}
						onClick={() => {
							setMenuIsOpened(!menuIsOpened);
						}}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>

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
	);
};

export default Header;
