"use client";
import { motion } from "motion/react";

const Background = () => {
	return (
		<div className="w-full h-[115vh] overflow-hidden -z-20 pointer-events-none">
			<div className="absolute w-full overflow-hidden h-screen -z-20 mask  top-0">
				<motion.img
					src="/icons/a.svg"
					alt="background decorative element"
					className="right-[20%] bottom-[10%] absolute"
					{...anima1}
				/>
				<motion.img
					src="/icons/b.svg"
					alt="background decorative element"
					className="absolute right-0 top-0"
					{...anima2}
				/>
				<motion.img
					src="/icons/c.svg"
					alt="background decorative element"
					className="absolute left-0 top-0"
					{...anima3}
				/>

				<motion.img
					src="/icons/er.svg"
					alt="background decorative element"
					className="absolute left-0 bottom-[-15%] z-[0]"
					{...anima4}
				/>
			</div>
			<div className="noise mask w-full h-[120vh] absolute top-0 -z-[1]">
				<div className="w-full h-[120vh]" />
			</div>
		</div>
	);
};

const anima1 = {
	animate: {
		x: [0, 100, 50, 20, 0],
		y: [0, 50, -50, -20, 30, 0],
	},
	transition: {
		repeat: Infinity,
		duration: 3.5,
		ease: "linear",
	},
};

const anima2 = {
	animate: {
		x: [0, 150, 0, 20, 0],
		y: [0, -100, 0, 55, 0],
	},
	transition: {
		repeat: Infinity,
		duration: 5.5,
		ease: "linear",
	},
};
const anima3 = {
	animate: {
		x: [0, 15, 0, -15, 0],
		y: [0, 15, 0, -15],
	},
	transition: {
		repeat: Infinity,
		duration: 2.5,
		ease: "linear",
	},
};

const anima4 = {
	animate: {
		x: [0, 5, 10, -10, 0],
		y: [0, 50, 100, 0, -25, -50, 0],
	},
	transition: {
		repeat: Infinity,
		duration: 3.5,
		ease: "linear",
	},
};
export default Background;
