"use client";
import ArrowedBtn from "@/components/ui/arrowedBtn";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { AlbumType } from "@/types/album";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

type Props = {
	title: string;
	titleOnce?: boolean;
	albumPage?: boolean;
	albums: AlbumType[];
	subtitle?: string;
};

const Albums = ({
	title,
	titleOnce = true,
	albumPage,
	albums,
	subtitle,
}: Props) => {
	const [selected, setSelected] = useState<null | AlbumType>(null);
	const t = useTranslations("AlbumsComponent");
	return (
		<section>
			<div className="bg-[url(/img/albumsBack.png)] py-20 max-md:px-2">
				<div className="container mx-auto font-martian">
					<div>
						<motion.h3
							initial={{ y: -100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.35 }}
							viewport={{ once: titleOnce, amount: 1 }}
							className="text-mainRed text-5xl max-sm:text-4xl font-extrabold uppercase"
						>
							{title}
						</motion.h3>
						<motion.p
							initial={{ y: -50, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.45, delay: 0.2 }}
							viewport={{ once: true, amount: 0.9 }}
							className="text-[18px] font-light text-[#D9D9D9] pt-2"
						>
							{subtitle}
						</motion.p>
					</div>
					<div className="grid grid-cols-[1fr_1fr_1fr] lg:gap-5 sm:gap-3 max-sm:grid-cols-1 mt-10 overflow-hidden">
						<div className="w-full h-full relative aspect-square">
							<Image
								src={albums[0].albumCover}
								loading="lazy"
								fill
								alt="albums"
								className="object-cover h-[412px] max-lg:w-[200px] max-lg:h-full max-sm:w-full max-sm:h-[200px]"
							/>
						</div>
						<div className="font-martian album-card px-[30px] py-[20px] flex flex-col max-sm:px-[15px] col-span-2">
							<h5 className="text-mainRed text-[36px] font-extrabold">
								{albums[0].title}
							</h5>
							<p className="font-medium text-[#FAFAFA]">
								{t("release")}{" "}
								{new Date(
									albums[0].releaseDate
								).toLocaleDateString(t("dateLocale"), {
									day: "numeric",
									month: "long",
									year: "numeric",
								})}
							</p>
							<p className="xl:max-w-[70%] font-light text-[#BFBFBF] mt-2 max-lg:text-[14px]">
								{albums[0].promoDescription}
							</p>
							<Link
								scroll={true}
								href={
									albumPage
										? "/" + albums[0].slug.current
										: "/albums/" + albums[0].slug.current
								}
								className="mt-auto pt-4"
							>
								<ArrowedBtn>{t("btn")}</ArrowedBtn>
							</Link>
						</div>
					</div>
					<div className="grid  grid-cols-3 max-sm:grid-cols-2 mt-5 lg:gap-5 gap-3">
						{[...albums].splice(1).map((item) => (
							<motion.div
								key={item.slug.current}
								layoutId={`card-${item.slug.current}`}
								className={`aspect-square rounded-xl group cursor-pointer relative transition-colors bg-neutral-800 hover:border-4 hover:border-grayMain`}
								onClick={() => setSelected(item)}
							>
								<Image
									src={
										item.albumCover ||
										"/img/clancyAlbumCover.png"
									}
									loading="eager"
									fill
									alt="albums"
									className="object-cover  group-hover:scale-[90%]  transition-transform hover:mask-alpha group-hover:mask-b-from-45%"
								/>
								<div className="uppercase  left-5 transition-all absolute bottom-[-20%] text-5xl max-xl:text-3xl max-md:text-4xl max-sm:text-2xl font-bold text-white opacity-0 group-hover:bottom-5  group-hover:opacity-100">
									{item.title}
								</div>
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
							layoutId={`card-${selected.slug.current}`}
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
										src={selected.albumCover}
										alt="album"
										fill
										loading="eager"
										className="object-cover"
									/>
								</div>
								<div className="flex flex-col">
									<h5 className="text-mainRed text-[36px] font-extrabold px-[30px] mt-[10px] max-sm:text-[24px] max-sm:px-[15px]">
										{selected.title}
									</h5>
									<p className="font-medium text-[#FAFAFA] px-[30px] max-sm:px-[15px]">
										{t("release")}{" "}
										{new Date(
											selected.releaseDate
										).toLocaleDateString(t("dateLocale"), {
											day: "numeric",
											month: "long",
											year: "numeric",
										})}
									</p>
									<p className=" font-light text-[#BFBFBF] mt-2 max-lg:text-[14px] px-[30px] max-sm:px-[15px]">
										{selected.promoDescription}
									</p>

									<Link
										scroll={true}
										href={
											albumPage
												? "/" + selected.slug.current
												: "/albums/" +
													selected.slug.current
										}
										className="mt-auto pt-4 px-[30px] pb-[20px] max-sm:px-[15px]"
									>
										<ArrowedBtn>{t("btn")}</ArrowedBtn>
									</Link>
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
