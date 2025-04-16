"use client";
import { motion } from "motion/react";
import { Button } from "../ui/button";

const ButtonAnimated = () => {
	return (
		<motion.div
			initial={{
				y: 100,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
			}}
		>
			<Button>This is animated</Button>
		</motion.div>
	);
};

export default ButtonAnimated;
