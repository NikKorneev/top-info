"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ParallaxSection() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	// Один элемент движется медленно
	const slowY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

	// Второй элемент — быстрее
	const fastY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

	return (
		<section
			ref={ref}
			className="relative h-[200vh] bg-black text-white overflow-hidden"
		>
			{/* Фон (медленный) */}
			<motion.div
				style={{ y: slowY }}
				className="absolute inset-0 bg-gradient-to-b from-purple-600 to-pink-600"
			/>

			{/* Контент (быстрый) */}
			<motion.div
				style={{ y: fastY }}
				className="relative z-10 flex items-center justify-center h-screen text-5xl font-bold"
			>
				PARALLAX
			</motion.div>
		</section>
	);
}
