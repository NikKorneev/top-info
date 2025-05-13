"use client";
import { useUrlParams } from "@/lib/hooks";
import { AccordionItemType } from "@/types/accordion";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { RiLoader3Line } from "react-icons/ri";
import AccordionContent from "./accordionContent";

export const AccordionItems = ({
	items,
	id,
	description,
	image,
}: {
	items: AccordionItemType[];
	id: number;
	description?: string;
	image?: string;
}) => {
	const [index, setIndex] = useState(id);
	const [isLoading, setLoading] = useState(false);
	const { setParam } = useUrlParams("id", "1");

	useEffect(() => {
		setLoading(true);
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 500);
		return () => clearTimeout(timeout);
	}, [index]);

	return (
		<>
			{items.map((item) => (
				<div key={item.id}>
					<AccordionItem
						onClick={() => {
							setParam(item.id + "");
							setIndex(item.id);
						}}
						id={item.id + ""}
						isLoading={item.id == index && isLoading}
						active={item.id == index}
						title={item.title}
					/>
					<div className="lg:hidden">
						<AnimatePresence mode="wait">
							{item.id == id && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ height: 0, opacity: 0 }}
								>
									<AccordionContent
										{...item}
										key={item.id + "mobile"}
										description={description || ""}
										image={image || ""}
									/>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			))}
		</>
	);
};

export const AccordionItem = ({
	title,
	active,
	onClick,
	isLoading,
}: {
	onClick: () => void;
	title: string;
	id: string;
	active: boolean;
	isLoading: boolean;
}) => {
	return (
		<div
			onClick={onClick}
			className={clsx(
				"flex  transition-colors  items-center justify-between bg-grayMain/65 py-4 px-4 cursor-pointer hover:bg-[#be6562] hover:text-mainYellow",
				active && "text-mainYellow bg-mainRed"
			)}
		>
			<h4>{title}</h4>
			{isLoading ? (
				<RiLoader3Line className="animate-spin text-2xl text-mainYellow" />
			) : (
				<LiaEyeSolid
					className={clsx(
						"transition-colors text-2xl ",
						active && "text-mainYellow "
					)}
				/>
			)}
		</div>
	);
};
