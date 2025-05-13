"use client";
import { AccordionContentType } from "@/types/accordion";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Markdown from "react-markdown";

type Props = AccordionContentType;

const AccordionContent = ({ description, id, image, title }: Props) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={id}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
				exit={{ opacity: 0 }}
				className="flex flex-col bg-[#4e4e4e] bg-blend-hard-light bg-center overflow-hidden  relative"
			>
				<motion.div
					initial={{ opacity: 0, y: -400 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.2 }}
					exit={{ y: -400 }}
					className="relative h-[20vw]  aspect-video  max-md:h-[200px]"
				>
					<Image
						src={image || "/img/naming-4.jpg"}
						fill
						alt="interesting fact image"
						quality={100}
						loading="lazy"
						className="object-cover w-full h-full mask-alpha  mask-b-from-45%  "
					/>
					<motion.h3
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						exit={{ opacity: 0, y: -100 }}
						className="font-bold absolute bottom-[10px] text-white text-2xl uppercase  pt-6 px-4 line-clamp-1 max-md:text-xl"
					>
						{title}
					</motion.h3>
					<div className="absolute bottom-0 left-0 w-full h-[1px] bg-white opacity-40"></div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					exit={{ opacity: 0, y: -100 }}
					className="text-grayMain leading-[150%] mt-3 px-4 pb-6 max-sm:text-[14px]"
				>
					<Markdown
						components={{
							p: ({ children }) => (
								<p className="mb-2 text-grayMain leading-[150%]">
									{children}
								</p>
							),
						}}
					>
						{description}
					</Markdown>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};
const LoadingCard = () => {
	return (
		<div className="w-full pb-6  bg-[#4e4e4e] animate-pulse">
			<div className="w-full h-[20vw]  aspect-video bg-grayMain animate-pulse"></div>
			<div className=" h-[36px] mt-6 mx-4  bg-grayMain animate-pulse"></div>
			<div className=" h-[200px] mt-3 mx-4  bg-grayMain animate-pulse"></div>
		</div>
	);
};

export default AccordionContent;
