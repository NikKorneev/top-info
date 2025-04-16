"use client";
import { motion } from "motion/react";
const MainTitle = () => {
	return (
		<div className="container mx-auto  pt-28 relative flex items-end flex-col">
			<motion.div
				initial={{
					x: 200,
					opacity: 0,
				}}
				animate={{
					x: 0,
					opacity: 1,
				}}
				className="pr-[85px]"
			>
				<p className="text-white">
					[неофициальный информационный сайт]
				</p>
			</motion.div>

			<h1
				data-text="twenty Øne pilØts"
				id="title"
				className="cursor-pointer glitch is-glitching 2xl:text-[205px] xl:text-[166px] md:text-[12vw] text-[10vw] font-bold  uppercase text-mainRed leading-[92%] tracking-[-3%] text-center "
			>
				twenty Øne pilØts
			</h1>

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
