import { Link } from "@/i18n/navigation";
import Image from "next/image";
import LocaleSwitcher from "./localeSwitcher";
import MobileMenu from "./mobileMenu";
import Navmenu from "./navmenu";
import Search from "./search";

const Header = () => {
	return (
		<header className="header font-martian">
			<div className="container mx-auto items-center py-1  flex justify-between 2xl:px-0 px-6">
				<nav className="flex items-center gap-8 max-sm:gap-4">
					<Link href="/" scroll={true}>
						<Image
							src={"/top-logo.svg"}
							width={55}
							height={55}
							alt="Twenty one pilots' logo"
							className="max-sm:size-12"
						/>
					</Link>
					<Navmenu />
				</nav>
				<div className="flex gap-4 items-center">
					<MobileMenu />
					<div className="max-md:hidden flex items-center">
						<LocaleSwitcher />
					</div>
					<Search />
				</div>
			</div>
		</header>
	);
};

export default Header;
