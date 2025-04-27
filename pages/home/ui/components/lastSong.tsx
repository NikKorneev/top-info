"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const LastSong = () => {
	const [isOpened, setOpened] = useState(false);
	return (
		<section className="overflow-hidden relative">
			<div className="container mx-auto py-20 font-martian max-sm:px-4">
				<div className="flex w-full items-center justify-between">
					<h5 className="font-extrabold text-5xl uppercase text-mainRed max-sm:text-4xl">
						Последняя работа
					</h5>
					<p className="font-light text-3xl text-white max-sm:text-xl">
						(2024)
					</p>
				</div>
				<motion.div
					className="w-full mx-auto aspect-video bg-amber-700 mt-10 relative lg:max-w-[60%]"
					onClick={() => setOpened(true)}
					layoutId="lastSong"
					layout
				>
					<Image
						src="/img/lastSongCover.png"
						alt="last song"
						fill
						className="hover:scale-105 transition-all cursor-pointer hover:grayscale-100"
					/>
				</motion.div>
			</div>
			<div className="bg-mainRed/50 blur-3xl size-[300px] rounded-full absolute -right-[150px] -top-[150px]" />
			<div className="bg-mainRed/50 blur-3xl size-[300px] rounded-full absolute right-[20%] bottom-[150px] -z-10" />

			<AnimatePresence>
				{isOpened && (
					<motion.div
						initial={{ opacity: 0, filter: "blur(100px)" }}
						animate={{ opacity: 1, filter: "blur(0px)" }}
						exit={{ opacity: 0 }}
						className="fixed top-0 left-0 w-full h-screen z-[100] bg-black/60 flex items-center justify-center"
						onClick={() => setOpened(false)}
					>
						<motion.div
							layoutId="lastSong"
							className="w-[80vw] aspect-video"
							onClick={(e) => e.stopPropagation()}
							transition={{
								layout: { duration: 0.5, ease: "easeInOut" },
							}}
						>
							<iframe
								className="w-full h-full"
								src="https://www.youtube.com/embed/XCz7WUotXs8?si=Az6-AaM8QqJOLVvw"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							></iframe>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default LastSong;
