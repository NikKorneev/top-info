"use client";
import { useUrlParams } from "@/lib/hooks";
import { AccordionItemType } from "@/types/accordion";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { RiLoader3Line } from "react-icons/ri";

export const AccordionItems = ({
	items,
	id,
}: {
	items: AccordionItemType[];
	id: number;
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
				<AccordionItem
					onClick={() => {
						setParam(item.id + "");
						setIndex(item.id);
					}}
					id={item.id + ""}
					key={item.id}
					isLoading={item.id == index && isLoading}
					active={item.id == index}
					title={item.title}
				/>
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
