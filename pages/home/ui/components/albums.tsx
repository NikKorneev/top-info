"use client";
import ArrowedBtn from "@/components/ui/arrowedBtn";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

type Item = {
	id: number;
	title: string;
	desc: string;
	release: string;
	image: string;
};

const items: Item[] = [
	{
		id: 1,
		title: "Clancy",
		desc: `Cедьмой студийный альбом американского
								музыкального дуэта Twenty One Pilots, релиз
								которого состоялся 24 мая 2024 года на лейбле
								Fueled by Ramen. Альбом стал «заключительной
								главой» в серии концептуальных релизов группы, а
								его название отсылает к главному герою пятого
								студийного альбома Trench.`,
		release: "Релиз 24/05/2024",
		image: "/img/clancyAlbumCover.png",
	},
	{
		id: 2,
		title: "Clancy",
		desc: `Cедьмой студийный альбом американского
								музыкального дуэта Twenty One Pilots, релиз
								которого состоялся 24 мая 2024 года на лейбле
								Fueled by Ramen. Альбом стал «заключительной
								главой» в серии концептуальных релизов группы, а
								его название отсылает к главному герою пятого
								студийного альбома Trench.`,
		release: "Релиз 24/05/2024",
		image: "/img/clancyAlbumCover.png",
	},
	{
		id: 3,
		title: "Clancy",
		desc: `Cедьмой студийный альбом американского
								музыкального дуэта Twenty One Pilots, релиз
								которого состоялся 24 мая 2024 года на лейбле
								Fueled by Ramen. Альбом стал «заключительной
								главой» в серии концептуальных релизов группы, а
								его название отсылает к главному герою пятого
								студийного альбома Trench.`,
		release: "Релиз 24/05/2024",
		image: "/img/clancyAlbumCover.png",
	},
	{
		id: 4,
		title: "Clancy",
		desc: `Cедьмой студийный альбом американского
								музыкального дуэта Twenty One Pilots, релиз
								которого состоялся 24 мая 2024 года на лейбле
								Fueled by Ramen. Альбом стал «заключительной
								главой» в серии концептуальных релизов группы, а
								его название отсылает к главному герою пятого
								студийного альбома Trench.`,
		release: "Релиз 24/05/2024",
		image: "/img/clancyAlbumCover.png",
	},
	{
		id: 5,
		title: "Clancy",
		desc: `Cедьмой студийный альбом американского
								музыкального дуэта Twenty One Pilots, релиз
								которого состоялся 24 мая 2024 года на лейбле
								Fueled by Ramen. Альбом стал «заключительной
								главой» в серии концептуальных релизов группы, а
								его название отсылает к главному герою пятого
								студийного альбома Trench.`,
		release: "Релиз 24/05/2024",
		image: "/img/clancyAlbumCover.png",
	},
	{
		id: 6,
		title: "Clancy",
		desc: `Cедьмой студийный альбом американского
								музыкального дуэта Twenty One Pilots, релиз
								которого состоялся 24 мая 2024 года на лейбле
								Fueled by Ramen. Альбом стал «заключительной
								главой» в серии концептуальных релизов группы, а
								его название отсылает к главному герою пятого
								студийного альбома Trench.`,
		release: "Релиз 24/05/2024",
		image: "/img/clancyAlbumCover.png",
	},
	{
		id: 7,
		title: "Clancy",
		desc: `Cедьмой студийный альбом американского
								музыкального дуэта Twenty One Pilots, релиз
								которого состоялся 24 мая 2024 года на лейбле
								Fueled by Ramen. Альбом стал «заключительной
								главой» в серии концептуальных релизов группы, а
								его название отсылает к главному герою пятого
								студийного альбома Trench.`,
		release: "Релиз 24/05/2024",
		image: "/img/clancyAlbumCover.png",
	},
];

const Albums = () => {
	const [selected, setSelected] = useState<null | Item>(null);
	return (
		<section>
			<div className="bg-[url(/img/albumsBack.png)] py-20 max-md:px-2">
				<div className="container mx-auto font-martian">
					<div>
						<motion.h3
							initial={{ y: -100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.35 }}
							viewport={{ once: true, amount: 1 }}
							className="text-mainRed text-5xl max-sm:text-4xl font-extrabold uppercase"
						>
							Дискография
						</motion.h3>
						<motion.p
							initial={{ y: -50, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.45, delay: 0.2 }}
							viewport={{ once: true, amount: 0.9 }}
							className="text-[18px] font-light text-[#D9D9D9] pt-2"
						>
							Кликните на обложку, чтобы узнать подробности
							альбома
						</motion.p>
					</div>
					<div className="grid grid-cols-[1fr_1fr_1fr] lg:gap-5 sm:gap-3 max-sm:grid-cols-1 mt-10 overflow-hidden">
						<div className="w-full h-full relative aspect-square">
							<Image
								src={items[0].image}
								loading="lazy"
								fill
								alt="albums"
								className="object-cover h-[412px] max-lg:w-[200px] max-lg:h-full max-sm:w-full max-sm:h-[200px]"
							/>
						</div>
						<div className="font-martian album-card px-[30px] py-[20px] flex flex-col max-sm:px-[15px] col-span-2">
							<h5 className="text-mainRed text-[36px] font-extrabold">
								{items[0].title}
							</h5>
							<p className="font-medium text-[#FAFAFA]">
								{items[0].release}
							</p>
							<p className="xl:max-w-[70%] font-light text-[#BFBFBF] mt-2 max-lg:text-[14px]">
								{items[0].desc}
							</p>
							<div className="mt-auto pt-4">
								<ArrowedBtn>Страница альбома</ArrowedBtn>
							</div>
						</div>
					</div>
					<div className="grid  grid-cols-3 max-sm:grid-cols-2 mt-5 lg:gap-5 gap-3">
						{[...items].splice(1).map((item) => (
							<motion.div
								key={item.id}
								layoutId={`card-${item.id}`}
								className={`aspect-square rounded-xl cursor-pointer relative transition-colors hover:border-4 hover:border-grayMain`}
								onClick={() => setSelected(item)}
							>
								<Image
									src="/img/clancyAlbumCover.png"
									loading="lazy"
									fill
									alt="albums"
									className="object-cover  hover:scale-[98%]  transition-transform"
								/>
							</motion.div>
						))}
					</div>
				</div>
			</div>
			<AnimatePresence>
				{selected && (
					<motion.div
						className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]"
						onClick={() => setSelected(null)}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<motion.div
							layoutId={`card-${selected.id}`}
							className="bg-white w-[90vw] max-w-md  overflow-hidden shadow-xl relative lg:max-w-4xl"
							onClick={(e) => e.stopPropagation()}
							transition={{
								layout: { duration: 0.5, ease: "easeInOut" },
							}}
						>
							<div className="absolute right-2 z-[200]">
								<Button
									className="hover:opacity-75 transition-opacity cursor-pointer bg-gray-700"
									onClick={() => setSelected(null)}
								>
									X
								</Button>
							</div>

							<div className="font-martian album-card flex flex-col lg:grid lg:grid-cols-[1.5fr_2fr]">
								<div className="relative h-40 w-full lg:aspect-square lg:h-fit z-50">
									<Image
										src={selected.image}
										alt="album"
										fill
										className="object-cover"
									/>
								</div>
								<div className="flex flex-col">
									<h5 className="text-mainRed text-[36px] font-extrabold px-[30px] mt-[10px] max-sm:text-[24px] max-sm:px-[15px]">
										Альбом Clancy
									</h5>
									<p className="font-medium text-[#FAFAFA] px-[30px] max-sm:px-[15px]">
										Релиз 24/05/2024
									</p>
									<p className=" font-light text-[#BFBFBF] mt-2 max-lg:text-[14px] px-[30px] max-sm:px-[15px]">
										Cедьмой студийный альбом американского
										музыкального дуэта Twenty One Pilots,
										релиз которого состоялся 24 мая
									</p>
									<div className="mt-auto pt-4 px-[30px] pb-[20px] max-sm:px-[15px]">
										<ArrowedBtn>
											Страница альбома
										</ArrowedBtn>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Albums;
