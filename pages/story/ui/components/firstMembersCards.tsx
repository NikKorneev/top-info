"use client";
import { motion } from "motion/react";
import Image from "next/image";

const FirstMembersCards = () => {
	return (
		<div className="flex gap-5 min-h-[340px] mt-2 max-md:text-[14px] text-center max-md:gap-2 max-sm:flex-col max-sm:gap-5">
			<motion.div
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true, margin: "0px 0px -60%" }}
				className="relative flex flex-col items-center"
			>
				<Image
					src="/img/chris.png"
					width={198}
					height={301}
					quality={100}
					className="object-cover"
					alt="Chris Salih in 2009"
				/>
				<p className="text-grayMain mt-1 text-[14px]  max-md:text-[12px]">
					Барабанщин
				</p>
				<p className="text-mainYellow ">Крис Салих</p>
			</motion.div>
			<motion.div
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				viewport={{ once: true, margin: "0px 0px -60%" }}
				className="relative flex flex-col items-center"
			>
				<Image
					src="/img/story-tyler-2009.png"
					width={198}
					height={301}
					quality={100}
					className="object-cover"
					alt="Tyler joseph in 2009"
				/>
				<p className="text-grayMain mt-1 text-[14px] max-md:text-[12px]">
					Вокалист
				</p>
				<p className="text-mainYellow ">Тайлер Джозеф</p>
			</motion.div>
			<motion.div
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				viewport={{ once: true, margin: "0px 0px -60%" }}
				className="relative flex flex-col items-center"
			>
				<Image
					src="/img/nick.png"
					width={198}
					height={301}
					quality={100}
					className="object-cover"
					alt="Nick Thomas in 2009"
				/>
				<p className="text-grayMain mt-1 text-[14px] max-md:text-[12px]">
					Гитара
				</p>
				<p className="text-mainYellow">Ник Томас</p>
			</motion.div>
		</div>
	);
};

export default FirstMembersCards;
