import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobileMenu";
import Search from "./search";

const Header = () => {
	return (
		<header className="header font-martian">
			<div className="container mx-auto items-center flex justify-between 2xl:px-0 md:px-4  max-sm:px-3">
				<Link href="/" scroll={true}>
					<Image
						src={"/top-logo.svg"}
						width={64}
						height={64}
						alt="Twenty one pilots' logo"
						className="max-sm:size-10"
					/>
				</Link>
				<nav className="flex items-center gap-8">
					<ul className="hidden md:flex gap-8 text-[#ffffffd3] uppercase font-normal xl:text-[18px] text-sm sm:text-[16px] *:transition-colors *:cursor-pointer *:hover:text-mainYellow">
						<li className="menu-item">
							<Link scroll={true} href="/">
								Главная
							</Link>
						</li>
						<li className="menu-item">
							<Link scroll={true} href="/story">
								История
							</Link>
						</li>

						<li className="menu-item">
							<Link scroll={true} href="/albums">
								Альбомы
							</Link>
						</li>
						<li className="menu-item">
							<Link scroll={true} href="/duo/tyler-joseph">
								Био
							</Link>
						</li>
					</ul>
					<MobileMenu />

					<Search />
				</nav>
			</div>
		</header>
	);
};

export default Header;
