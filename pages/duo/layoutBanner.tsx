"use client";
import { motion } from "motion/react";
import Image from "next/image";

const LayoutBanner = () => {
	return (
		<motion.div
			initial={{ opacity: 0, filter: "blur(100px)" }}
			animate={{ opacity: 1, filter: "blur(0px)" }}
			transition={{ duration: 0.5, delay: 0.2 }}
			className="relative w-full min-h-[200px] flex items-center justify-center font-martian"
		>
			<Image
				src="/img/duoPageCover.jpg"
				fill
				className="object-cover -z-10"
				alt="Duo page cover"
			/>
			<div className="bg-mainRed text-white uppercase text-5xl font-bold py-[9px] px-[13px]">
				биография участников
			</div>
		</motion.div>
	);
};

export default LayoutBanner;
