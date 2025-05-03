"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const Banner = () => {
	const { scrollY } = useScroll();

	const scrollByY = useTransform(scrollY, [0, 1000], [0, -80]);
	const scrollScale = useTransform(scrollY, [0, 1000], [1, 0.2]);
	return (
		<section className="font-martian min-h-[100vh] relative overflow-hidden">
			<div className="container mx-auto w-full pt-[350px] text-center">
				<motion.div className="absolute left-1/2 translate-x-[-50%] bottom-10 z-50 flex flex-col items-center">
					<motion.div
						style={{ y: scrollByY, scaleY: scrollScale }}
						className="h-14 w-0.5 bg-amber-50 origin-bottom"
					/>
					<span className="text-grayMain animate-pulse">
						Листайте вниз
					</span>
				</motion.div>
				<div className="flex flex-col justify-center items-center gap-3 relative z-50 h-full w-full">
					<motion.span
						initial={{ x: -400, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						className="text-black text-[20px] bg-mainRed font-semibold px-1"
					>
						TWENTY ØNE PILØTS
					</motion.span>
					<motion.h1
						initial={{ x: -400, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.2 }}
						className="text-mainRed text-[100px] font-bold leading-[100%] max-2xl:text-[80px] max-lg:text-[60px] max-md:text-[50px] max-sm:text-[40px] max-xs:text-[30px]"
					>
						ИСТОРИЯ ГРУППЫ
					</motion.h1>
					<motion.p
						initial={{ x: -400, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.4 }}
						className="text-[20px] text-grayMain shadowText max-md:p-2 max-md:backdrop-blur-md lg:max-w-[700px] max-lg:max-w-[500px] max-2xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] max-xs:text-[10px]"
					>
						Дуэт из Огайо, ставший голосом целого поколения. Сочетая
						инди-поп, хип-хоп, электронику и рок, они разрушили
						жанровые границы и построили уникальный музыкальный мир.
					</motion.p>
				</div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
			>
				<Image
					src={"/img/story-back.jpg"}
					alt={"story banner"}
					fill
					quality={100}
					className="object-cover w-full h-full z-0"
				/>
			</motion.div>
		</section>
	);
};

export default Banner;
