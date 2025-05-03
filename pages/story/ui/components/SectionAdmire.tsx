"use client";
import ModalVideo from "@/components/animated/modalVideo";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { LuPlay } from "react-icons/lu";

const SectionAdmire = () => {
	const [isOpened, setOpened] = useState(false);
	return (
		<section className="story-container">
			<div className="flex justify-between">
				<h3 className="title">МИРОВОЕ ПРИЗНАНИЕ</h3>
				<p className="story-subtitle">[2015-2017]</p>
			</div>
			<div className="grid grid-cols-3 gap-7 pt-10 relative max-md:grid-cols-2 max-sm:grid-cols-1">
				<div className="absolute bottom-[-60%] w-full h-full max-sm:hidden">
					<Image
						src="/icons/BLURRYFACE.svg"
						fill
						quality={100}
						className="-z-10"
						alt="Blurryface sign"
					/>
				</div>
				<div className="flex flex-col gap-4 text-grayMain max-lg:text-[14px] leading-[150%] ">
					<p>
						В мае 2015 года выходит Blurryface — альбом-концепт, в
						котором появляется персонаж, олицетворяющий внутренние
						страхи, тревоги и неуверенность.
					</p>
					<p>
						Он становится настоящим антагонистом и одновременно
						голосом альбома. Тайлер и Джош используют музыку как
						терапию — а образы, сценические решения и лирика
						начинают работать как единая художественная вселенная.
					</p>
				</div>
				<div className="flex flex-col gap-4 text-grayMain max-lg:text-[14px] leading-[150%] ">
					<p>
						Но особенно — «Stressed Out», ставшая глобальным хитом и
						открывшая группу миллионам новых слушателей. С её
						ироничным, почти детским припевом и тяжёлым поддоном
						тревоги — песня идеально отражала дух времени.
					</p>
					<p>
						Клип на Stressed Out стал вирусным, а альбом занял 1-е
						место в Billboard 200, что превратило дуэт в
						международную сенсацию.
					</p>
				</div>
				<div className="flex flex-col gap-10">
					<div>
						<span className="text-mainYellow">май 2015 года</span>
						<p className="text-white mt-1.5">
							выход альбома “Blurryface”
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center">
				<motion.div
					layoutId="stressedOut"
					layout
					onClick={() => setOpened(true)}
					className="mt-30 inline-block  relative cursor-pointer hover:scale-[101%] hover:shadow-2xl shadow-mainRed/45 transition-all max-sm:mt-10"
				>
					<Image
						src="/img/stressedOut.jpg"
						width={1200}
						height={500}
						quality={100}
						className="object-cover"
						alt="Blurryface sign"
					/>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-mainYellow text-5xl">
						<LuPlay size={60} className=" text-mainRed" />
					</div>
				</motion.div>
			</div>

			<AnimatePresence>
				{isOpened && (
					<ModalVideo
						setOpened={setOpened}
						url="https://www.youtube.com/embed/pXRviuL6vMY?si=cjGiOtODhbVH4icr"
					/>
				)}
			</AnimatePresence>
		</section>
	);
};

export default SectionAdmire;
