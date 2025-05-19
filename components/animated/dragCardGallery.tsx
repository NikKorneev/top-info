"use client";
import { motion } from "motion/react";
import { RefObject, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type CardsProps = {
	title: string;
	srcs: string[];
};

export const DragCards = ({ title, srcs }: CardsProps) => {
	return (
		<section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
			<h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
				{title}
			</h2>
			<Cards srcs={srcs} />
		</section>
	);
};

type CardProp = {
	srcs: string[];
};

const params = [
	{
		rotate: "6deg",
		top: "20%",
		left: "25%",
		className: "w-36 md:w-56",
	},
	{
		rotate: "12deg",
		top: "45%",
		left: "60%",
		className: "w-24 md:w-48",
	},
	{
		rotate: "-6deg",
		top: "20%",
		left: "40%",
		className: "w-52 md:w-80",
	},
	{
		rotate: "8deg",
		top: "50%",
		left: "40%",
		className: "w-48 md:w-72",
	},
	{
		rotate: "18deg",
		top: "20%",
		left: "65%",
		className: "w-40 md:w-64",
	},
	{
		rotate: "-3deg",
		top: "35%",
		left: "55%",
		className: "w-24 md:w-48",
	},
];

const Cards = ({ srcs }: CardProp) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	return (
		<div className="absolute inset-0 z-10" ref={containerRef}>
			{srcs.map((src, index) => (
				<Card
					key={index}
					containerRef={containerRef}
					src={src}
					alt="Example image"
					{...params[index]}
				/>
			))}
		</div>
	);
};

interface Props {
	containerRef: RefObject<HTMLDivElement | null>;
	src: string;
	alt: string;
	top: string;
	left: string;
	rotate: string;
	className?: string;
}

const Card = ({
	containerRef,
	src,
	alt,
	top,
	left,
	rotate,
	className,
}: Props) => {
	const [zIndex, setZIndex] = useState(0);

	const updateZIndex = () => {
		const els = document.querySelectorAll(".drag-elements");

		let maxZIndex = -Infinity;

		els.forEach((el) => {
			const zIndex = parseInt(
				window.getComputedStyle(el).getPropertyValue("z-index")
			);

			if (!isNaN(zIndex) && zIndex > maxZIndex) {
				maxZIndex = zIndex;
			}
		});

		setZIndex(maxZIndex + 1);
	};

	return (
		<motion.img
			onMouseDown={updateZIndex}
			style={{
				top,
				left,
				rotate,
				zIndex,
			}}
			className={twMerge(
				"drag-elements cursor-grab hover:border-mainRed border-[2px] hover:shadow-mainRed/50 shadow-md  absolute w-48  bg-neutral-200 p-1 pb-4",
				className
			)}
			src={src}
			alt={alt}
			drag
			dragConstraints={containerRef}
			// Uncomment below and remove dragElastic to remove movement after release
			//   dragMomentum={false}
			dragElastic={0.65}
			whileDrag={{ scale: 2 }} // 👈 Добавлено увеличение
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
		/>
	);
};
