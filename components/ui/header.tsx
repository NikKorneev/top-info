import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobileMenu";
import Navmenu from "./navmenu";
import Search from "./search";

const Header = () => {
	return (
		<header className="header font-martian">
			<div className="container mx-auto items-center flex justify-between 2xl:px-0 px-6">
				<Link href="/" scroll={true}>
					<Image
						src={"/top-logo.svg"}
						width={64}
						height={64}
						alt="Twenty one pilots' logo"
						className="max-sm:size-10"
					/>
				</Link>
				<nav className="flex items-center gap-8 max-sm:gap-4">
					<Navmenu />
					<MobileMenu />

					<Search />
				</nav>
			</div>
		</header>
	);
};

export default Header;
