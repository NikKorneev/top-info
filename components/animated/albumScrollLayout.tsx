"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AlbumScrollLayout = () => {
	const container = useRef(null);
	const scrollEl1 = useRef(null);

	const { scrollY } = useScroll();

	const duoY = useTransform(scrollY, [0, 1000], [0, 80]); // меньше сдвиг
	const scale = useTransform(scrollY, [0, 1000], [1, 0]); // меньше сдвиг

	return (
		<div ref={container} className="w-full h-screen relative   z-20">
			<motion.div
				animate={{ y: 0, opacity: 1 }}
				initial={{ y: 200, opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="absolute top-[50px] left-0 w-full h-full "
			>
				<Image
					alt={"rock"}
					fill
					className="object-cover z-20 "
					src={"/img/rock-album.png"}
				/>
			</motion.div>

			<motion.div
				style={{ y: duoY, scale: scale }}
				transition={{ delay: 0.3, duration: 0.5 }}
				animate={{ y: 0, opacity: 1 }}
				initial={{ y: 200, opacity: 0 }}
				className="absolute top-[50px]  left-0 w-full h-full -z-10"
			>
				<Image
					alt={"band"}
					fill
					ref={scrollEl1}
					className="object-cover -z-10 max-sm:hidden"
					src={"/img/rock-bandl1.png"}
				/>
			</motion.div>
		</div>
	);
};

export default AlbumScrollLayout;
