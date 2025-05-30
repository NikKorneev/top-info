"use client";
import { useUrlParams } from "@/lib/hooks";
import { AccordionItemType } from "@/types/accordion";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { RiLoader3Line } from "react-icons/ri";
import AccordionContent from "./accordionContent";

export const AccordionItems = ({
	items,
	id = 1,
	description,
	image,
	paramName = "id",
}: {
	items: AccordionItemType[];
	id: number | string;
	description?: string;
	image?: string;
	paramName: "id" | "slug";
}) => {
	const [index, setIndex] = useState(0);
	const scrollTo = useRef(null);
	const { setParam, searchParams, isPending } = useUrlParams(
		paramName,
		id + ""
	);

	const handleClick = (item: AccordionItemType, index?: number) => {
		setIndex(index || 0);
		if (paramName == "id") {
			setParam(item.id + "");
		} else {
			setParam(item.slug?.current);
		}
	};

	const checkIfChoosen = (item: AccordionItemType) => {
		if (paramName == "id") {
			return item.id == id;
		} else {
			if (!searchParams?.get("slug"))
				return item.slug?.current === items[0].slug?.current;
			return item.slug?.current == searchParams?.get("slug");
		}
	};

	return (
		<>
			{items.map((item, i) => (
				<div
					id={item.id + "" || item.slug?.current}
					key={item.id || item.slug?.current}
				>
					<AccordionItem
						onClick={() => {
							handleClick(item, i);
						}}
						id={item.id + ""}
						isLoading={i == index && isPending}
						active={checkIfChoosen(item)}
						title={i + 1 + ". " + item.title}
					/>
					<div className="lg:hidden">
						<AnimatePresence mode="wait">
							{checkIfChoosen(item) && (
								<motion.div
									ref={scrollTo}
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
				"flex  transition-colors font-martian  items-center justify-between bg-grayMain/65 py-4 px-4 cursor-pointer hover:bg-[#be6562] hover:text-mainYellow",
				active && "text-mainYellow bg-mainRed",
				isLoading && "animate-pulse"
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
