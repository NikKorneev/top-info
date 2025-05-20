"use client";
import clsx from "clsx";
import Link from "next/link";

type Props = {
	className?: string;
	setMenuIsOpened?: (flag: boolean) => void;
};

const Navmenu = ({ className, setMenuIsOpened }: Props) => {
	return (
		<ul
			className={clsx(
				"hidden md:flex gap-8 text-[#ffffffd3] uppercase font-normal xl:text-[18px] text-sm sm:text-[16px] *:transition-colors *:cursor-pointer *:hover:text-mainYellow",
				className
			)}
		>
			<li className="menu-item">
				<Link
					scroll={true}
					href="/"
					onClick={() => setMenuIsOpened && setMenuIsOpened(false)}
				>
					Главная
				</Link>
			</li>
			<li className="menu-item">
				<Link
					scroll={true}
					href="/story"
					onClick={() => setMenuIsOpened && setMenuIsOpened(false)}
				>
					История
				</Link>
			</li>

			<li className="menu-item">
				<Link
					scroll={true}
					href="/albums"
					onClick={() => setMenuIsOpened && setMenuIsOpened(false)}
				>
					Альбомы
				</Link>
			</li>
			<li className="menu-item">
				<Link
					scroll={true}
					href="/duo/tyler-joseph"
					onClick={() => setMenuIsOpened && setMenuIsOpened(false)}
				>
					Био
				</Link>
			</li>
		</ul>
	);
};

export default Navmenu;
