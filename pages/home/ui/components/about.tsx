"use client";
import ArrowedBtn from "@/components/ui/arrowedBtn";
import Card from "@/components/ui/tiltCard";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/img/about-1.png", "/img/about-1-2.png"];
const images2 = ["/img/about-2.png", "/img/about-2-1.png"];

const About = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % images.length);
		}, 6000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className="container mx-auto grid pt-20  grid-cols-[1fr_2fr_2fr] gap-4 max-lg:grid-cols-[1fr_2fr] max-lg:pt-20 max-sm:grid-cols-[1fr_2fr] max-sm:px-4">
			<Card>
				<div className="bg-gray-600/25 h-[525px] max-lg:h-[425px] w-full">
					<AnimatePresence mode="wait">
						<motion.div
							key={images[currentIndex]}
							className="absolute inset-0 w-full h-full"
							initial={{
								opacity: 0,
								scale: 1.02,
								filter: "blur(10px)",
							}}
							animate={{
								opacity: 1,
								scale: 1,
								filter: "blur(0px)",
							}}
							exit={{
								opacity: 0,
								scale: 0.98,
								filter: "blur(10px)",
							}}
							transition={{ duration: 1.2, ease: "easeInOut" }}
						>
							<Image
								src={images[currentIndex]}
								alt="Twenty one pilots about picture 1"
								width={198}
								height={525}
								quality={100}
								className="w-full h-full object-cover"
							/>
						</motion.div>
					</AnimatePresence>
					{/* <Image
						src="/img/about-1.png"
						alt="Next.js Logo"
						width={198}
						height={525}
						quality={100}
						className="w-full h-full object-cover"
					/> */}
				</div>
			</Card>
			<Card className="max-lg:hidden max-sm:flex">
				<div className="bg-gray-600/25 max-h-[525px] w-full">
					<AnimatePresence mode="wait">
						<motion.div
							key={images2[currentIndex]}
							className="absolute inset-0 w-full h-full"
							initial={{
								opacity: 0,
								scale: 1.02,
								filter: "blur(10px)",
							}}
							animate={{
								opacity: 1,
								scale: 1,
								filter: "blur(0px)",
							}}
							exit={{
								opacity: 0,
								scale: 0.98,
								filter: "blur(10px)",
							}}
							transition={{ duration: 1.2, ease: "easeInOut" }}
						>
							<Image
								src={images2[currentIndex]}
								alt="Twenty one pilots about picture 2"
								width={525}
								height={525}
								quality={100}
								className="w-full h-full object-cover"
							/>
						</motion.div>
					</AnimatePresence>
				</div>
			</Card>

			<div className="flex flex-col gap-4 max-sm:col-span-2">
				<div className="flex justify-between font-martian text-white text-sm max-xl:text-[12px]">
					<p className="uppercase">twenty Øne pilØts</p>
					<p>[2009 - настоящее время]</p>
				</div>
				<h2 className="font-extrabold text-5xl text-mainRed uppercase font-martian max-sm:text-4xl">
					о группе
				</h2>
				<div className="flex flex-col gap-4 font-martian font-light leading-[160%] text-[#C5C5C5] mb-auto max-xl:text-sm">
					<p>
						Twenty One Pilots — американская музыкальная группа,
						образованная в 2009 году в Коламбусе, штат Огайо. Состав
						группы - барабанщик Джош Дан и вокалист Тайлер Джозеф,
						который также является автором песен.
					</p>
					<p>
						Их музыка сочетает элементы рока, хип-хопа, попа и
						альтернативы. Группа известна своими эмоциональными
						текстами, которые затрагивают темы психического
						здоровья, борьбы с депрессией и внутренними
						переживаниями.
					</p>
				</div>
				<div>
					<ArrowedBtn>Читать подробнее</ArrowedBtn>
				</div>
			</div>
		</div>
	);
};

export default About;
