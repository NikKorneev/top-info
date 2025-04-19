"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
const MainTitle = () => {
	const ref = useRef(null);
	const { scrollY } = useScroll();

	const titleY = useTransform(scrollY, [0, 1000], [0, -200]); // больше сдвиг
	// const titleX = useTransform(scrollY, [0, 1000], [0, -200]); // больше сдвиг
	const scale = useTransform(scrollY, [0, 1000], [1, 0.7]);
	return (
		<div
			className="container mx-auto  pt-28 relative flex lg:items-end items-center flex-col"
			ref={ref}
		>
			<motion.div
				initial={{
					x: 200,
					opacity: 0,
				}}
				animate={{
					x: 0,
					opacity: 1,
				}}
				className="lg:pr-[85px]"
			>
				<p className="text-white text-[12px] sm:text-[14px]">
					[неофициальный информационный сайт]
				</p>
			</motion.div>

			<motion.h1
				data-text="twenty Øne pilØts"
				id="title"
				style={{ y: titleY, scaleX: scale }}
				className="cursor-default origin-center glitch is-glitching 2xl:text-[205px] xl:text-[166px] md:text-[12vw] text-[12vw] font-bold  uppercase text-mainRed leading-[92%] tracking-[-3%] text-center "
			>
				twenty Øne pilØts
			</motion.h1>

			<div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm font-light text-[#ffffff44]">
				<div className="flex flex-col gap-[12px]">
					<p>Regional at Best</p>
					<p>Vessel</p>
					<p>Blurryface</p>
				</div>
				<div className="flex flex-col gap-[12px]">
					<p>Trench</p>
					<p>Scaled and Icy</p>
					<p>Clancy</p>
				</div>
			</div>
		</div>
	);
};

export default MainTitle;
