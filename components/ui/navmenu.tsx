"use client";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./localeSwitcher";

type Props = {
	className?: string;
	setMenuIsOpened?: (flag: boolean) => void;
};

const Navmenu = ({ className, setMenuIsOpened }: Props) => {
	const t = useTranslations("Header");
	return (
		<ul
			className={clsx(
				"hidden md:flex gap-8 text-[#ffffffd3] uppercase font-normal xl:text-[18px] text-sm max-md:text-[20px]  *:transition-colors *:cursor-pointer *:hover:text-mainYellow",
				className
			)}
		>
			<li className="menu-item">
				<Link
					scroll={true}
					href="/"
					onClick={() => setMenuIsOpened && setMenuIsOpened(false)}
				>
					{t("main")}
				</Link>
			</li>
			<li className="menu-item">
				<Link
					scroll={true}
					href="/story"
					onClick={() => setMenuIsOpened && setMenuIsOpened(false)}
				>
					{t("story")}
				</Link>
			</li>

			<li className="menu-item">
				<Link
					scroll={true}
					href="/albums"
					onClick={() => setMenuIsOpened && setMenuIsOpened(false)}
				>
					{t("albums")}
				</Link>
			</li>
			<li className="menu-item">
				<Link
					scroll={true}
					href="/duo/tyler-joseph"
					onClick={() => setMenuIsOpened && setMenuIsOpened(false)}
				>
					{t("bio")}
				</Link>
			</li>
			<li className="menu-item">
				<Link
					scroll={true}
					href="/updates"
					onClick={() => setMenuIsOpened && setMenuIsOpened(false)}
				>
					{t("news")}
				</Link>
			</li>
			<li className="md:hidden">
				<LocaleSwitcher className="text-black" />
			</li>
		</ul>
	);
};

export default Navmenu;
