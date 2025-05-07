"use client";
import clsx from "clsx";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
	tabs: [{ label: string; href: string }, { label: string; href: string }];
};

const DuoNavTab = ({ tabs }: Props) => {
	const pathname = usePathname();

	return (
		<motion.div
			animate={{ opacity: 1 }}
			transition={{ delay: 0.4 }}
			initial={{ opacity: 0 }}
			className="flex border-mainYellow border-b-2"
		>
			{tabs.map((tab) => {
				const isActive = pathname === tab.href;

				return (
					<motion.div
						key={tab.href}
						className="relative w-[170px] h-[54px]  font-martian "
					>
						<Link
							href={tab.href}
							replace
							className={clsx(
								" text-sm font-bold w-full h-full flex items-center justify-center  transition-all relative z-10",
								isActive
									? " text-black"
									: "border-transparent text-grayMain hover:text-mainYellow hover:bg-gray-50/5"
							)}
						>
							{tab.label}
						</Link>
						{isActive && (
							<motion.div
								layout
								layoutId="underline"
								className="top-0 right-0 bg-mainYellow absolute bottom-0 left-0"
							/>
						)}
					</motion.div>
				);
			})}
		</motion.div>
	);
};

export default DuoNavTab;
