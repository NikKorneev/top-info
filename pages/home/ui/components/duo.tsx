"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const Duo = () => {
	const ref = useRef(null);
	const { scrollY } = useScroll();

	const tylerY = useTransform(scrollY, [0, 1000], [0, -100]); // больше сдвиг

	const joshY = useTransform(scrollY, [0, 1000], [0, -80]); // меньше сдвиг

	return (
		<div
			ref={ref}
			className="lg:absolute absolute max-md:bottom-0  md:top-0 w-full  overflow-hidden lg:h-[125vh] h-fit  pointer-events-none"
		>
			<Image
				src="/img/tylerMain.png"
				alt="Next.js Logo"
				quality={100}
				priority={true}
				width={789}
				height={859}
				className="invisible"
				// className="absolute  left-[47%] translate-x-[-50%] bottom-0 z-20"
			/>
			<motion.div
				style={{ y: tylerY }}
				initial={{
					y: 300,
					opacity: 0,
				}}
				animate={{
					y: 0,
					opacity: 1,
				}}
				className="absolute   left-[47%] translate-x-[-50%] lg:bottom-0 lg:top-[unset] bottom-0 z-20"
			>
				<Image
					src="/img/tylerTest.png"
					alt="Next.js Logo"
					quality={100}
					priority={true}
					loading="eager"
					width={789}
					height={859}
					className="max-md:scale-125"
				/>
				<motion.p
					animate={{
						x: [0, 10, 20, 0, 30, 40, 0],
						y: [0, 20, 40, 0, -20, -40, 0],
					}}
					transition={{
						repeat: Infinity,
						duration: 4.5,
						ease: "linear",
					}}
					className="absolute top-[30%] md:right-[-15%] right-[-35%] md:text-[16px] text-white font-light text-xs"
				>
					Tyler Joseph
				</motion.p>
			</motion.div>
			<motion.div
				style={{ y: joshY }}
				initial={{
					y: 300,
					opacity: 0,
				}}
				transition={{
					delay: 0.2,
					duration: 0.3,
				}}
				animate={{
					y: 0,
					opacity: 1,
				}}
				className="absolute left-[47%] translate-x-[-50%] lg:bottom-0 lg:top-[unset] z-10 bottom-0"
			>
				<Image
					src="/img/joshMain.png"
					alt="Next.js Logo"
					quality={100}
					priority={true}
					loading="eager"
					width={789}
					height={859}
					className="max-md:scale-125"
				/>
				<motion.p
					animate={{
						x: [0, 10, 20, 0, 30, 40, 0],
						y: [0, 20, 40, 0, -20, -40, 0],
					}}
					transition={{
						repeat: Infinity,
						duration: 4.5,
						ease: "linear",
					}}
					className="absolute top-[30%] md:left-[10%] left-[-10%] md:text-[16px] text-white font-light text-xs"
				>
					Josh Dun
				</motion.p>
			</motion.div>
		</div>
	);
};

export default Duo;
