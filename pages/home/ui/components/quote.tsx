"use client";
import { motion } from "motion/react";
import Image from "next/image";

const Quote = () => {
	return (
		<div className="bg-[#141212] w-full h-[405px] relative max-xl:h-[300px] max-sm:h-[250px] overflow-hidden">
			<motion.div
				className="w-full h-full absolute top-0 left-0"
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: 100 }}
				transition={{ delay: 0.5, duration: 0.3 }}
				viewport={{ once: true, amount: 0.5 }}
			>
				<Image
					src="/img/tylerQuote.png"
					width={454}
					height={405}
					alt="tyler's quote"
					className=" object-right object-contain absolute right-0 top-0 bottom-0 h-full"
				/>
			</motion.div>

			<div className="container mx-auto max-sm:px-4 font-martian text-white flex items-center h-full gap-5 relative z-10 max-sm:flex-col max-sm:justify-center">
				<p className="xl:text-[19px] text-[14px] font-inter">
					Тайлер Р. Джозеф
				</p>
				<p className="2xl:text-[64px] xl:text-[58px] lg:text-[3vw] md:text-[40px] sm:text-[32px] text-[24px]  font-light leading-[130%] max-sm:text-center">
					Начало цели лежит <br /> в создании чего-то, <br />
					<span className="bg-mainRed">понятного только вам.</span>
				</p>
			</div>
		</div>
	);
};

export default Quote;
