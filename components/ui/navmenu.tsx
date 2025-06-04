"use client";
import { Link, usePathname } from "@/i18n/navigation";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./localeSwitcher";

type Props = {
	className?: string;
	setMenuIsOpened?: (flag: boolean) => void;
};

const Navmenu = ({ className, setMenuIsOpened }: Props) => {
	const t = useTranslations("Header");
	const pathname = usePathname();
	return (
		<ul
			className={clsx(
				"hidden md:flex gap-8 text-[#ffffffd3] uppercase font-normal xl:text-[18px] text-sm max-md:text-[20px]  *:transition-colors *:cursor-pointer *:hover:text-mainYellow",
				className
			)}
		>
			<li className={clsx("menu-item", pathname === "/" && "active")}>
				<Link
					scroll={true}
					href="/"
					onClick={() => setMenuIsOpened && setMenuIsOpened(false)}
				>
					{t("main")}
				</Link>
			</li>
			<li
				className={clsx("menu-item", pathname === "/story" && "active")}
			>
				<Link
					scroll={true}
					href="/story"
					onClick={() => setMenuIsOpened && setMenuIsOpened(false)}
				>
					{t("story")}
				</Link>
			</li>

			<li
				className={clsx(
					"menu-item",
					pathname.includes("albums") && "active"
				)}
			>
				<Link
					scroll={true}
					href="/albums"
					onClick={() => setMenuIsOpened && setMenuIsOpened(false)}
				>
					{t("albums")}
				</Link>
			</li>
			<li
				className={clsx(
					"menu-item",
					pathname.includes("duo") && "active"
				)}
			>
				<Link
					scroll={true}
					href="/duo/tyler-joseph"
					onClick={() => setMenuIsOpened && setMenuIsOpened(false)}
				>
					{t("bio")}
				</Link>
			</li>
			<li
				className={clsx(
					"menu-item",
					pathname.includes("updates") && "active"
				)}
			>
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
