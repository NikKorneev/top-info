"use client";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const Btn = () => {
	const ref = useRef(null);
	const { scrollY } = useScroll();
	const titleY = useTransform(scrollY, [0, 1000], [0, -200]);
	return (
		<motion.div
			style={{ y: titleY }}
			ref={ref}
			className="flex justify-center relative z-50 pt-72 max-lg:hidden"
		>
			<Button className="bg-mainYellow py-[25px] px-[42px] ">
				<p className="text-black font-martian text-[16px] uppercase">
					Подробнее
				</p>
				<Image
					src={"icons/arrowTopRight.svg"}
					width={16}
					height={16}
					alt={"arrow"}
					className="rotate-90"
				/>
			</Button>
		</motion.div>
	);
};

export default Btn;
