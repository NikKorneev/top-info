"use client";
import ModalVideo from "@/components/animated/modalVideo";
import ArrowedBtn from "@/components/ui/arrowedBtn";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { LuPlay } from "react-icons/lu";

const SecondAlbum = () => {
	const [isOpened, setOpened] = useState(false);
	return (
		<section className="story-container">
			<div className="flex justify-between">
				<span className="story-subtitle">[2013 год]</span>
				<h3 className="title">ВТОРОЙ АЛЬБОМ</h3>
			</div>
			<div className="grid grid-cols-3 gap-7 pt-10 max-md:grid-cols-2 max-sm:grid-cols-1 auto-rows-min">
				<div className="w-full">
					<span className="text-mainYellow">июнь 2011 года</span>
					<p className="text-white mt-1.5">
						выход альбома “Regional At best”
					</p>
				</div>
				<div className="flex flex-col gap-4 text-grayMain max-lg:text-[14px] leading-[150%]">
					<p>
						В 2011 году вышел второй, полностью независимый альбом —
						“Regional at Best”.
					</p>
					<p>
						И хотя его позже снимут с распространения, именно он
						заложил фундамент звучания группы.
					</p>
				</div>
				<div className="flex flex-col gap-4 text-grayMain max-lg:text-[14px] leading-[150%]">
					<p>
						Именно тогда родилась песня “Car Radio”, которую фанаты
						называют гимном одиночества и внутренней борьбы.
					</p>
					<p>
						На горизонте уже маячил контракт с лейблом. Но пока это
						была только история двух друзей и маленькой сцены.
					</p>
				</div>
				<div className="flex flex-col gap-4 max-sm:row-start-3 max-sm:text-center max-sm:items-center">
					<Image
						src="/img/regionalAtBest.jpg"
						width={300}
						height={300}
						loading="lazy"
						alt="regional at best cover"
					/>
					<span className="text-grayMain">
						Обложка альбома “Regional At best”
					</span>
					<div className="mt-5 max-sm:mb-10">
						<ArrowedBtn>Посмотреть альбом</ArrowedBtn>
					</div>
				</div>
				<motion.div
					layout
					onClick={() => setOpened(true)}
					layoutId="carRadio"
					className="col-span-2 relative cursor-pointer hover:scale-[101%] hover:shadow-2xl shadow-blue-900/75 transition-all max-sm:col-span-1"
				>
					<Image
						src="/img/carRadioCover.jpg"
						width={1200}
						height={500}
						loading="lazy"
						quality={100}
						alt="car radio cover"
					/>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-mainYellow text-5xl">
						<LuPlay size={60} color="#fff" />
					</div>
				</motion.div>
			</div>
			<AnimatePresence>
				{isOpened && (
					<ModalVideo
						layoutId="carRadio"
						setOpened={setOpened}
						url="https://www.youtube.com/embed/92XVwY54h5k?si=HM6BfMTltSQzEMcE"
					/>
				)}
			</AnimatePresence>
		</section>
	);
};

export default SecondAlbum;
