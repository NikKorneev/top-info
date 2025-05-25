"use client";
import ModalVideo from "@/components/animated/modalVideo";
import ArrowedBtn from "@/components/ui/arrowedBtn";
import { Link } from "@/i18n/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { LuPlay } from "react-icons/lu";

const SecondAlbum = () => {
	const [isOpened, setOpened] = useState(false);
	const t = useTranslations("StoryPage.SecondAlbum");
	return (
		<section className="story-container">
			<div className="flex justify-between">
				<span className="story-subtitle">{t("subt")}</span>
				<h3 className="title">{t("t")}</h3>
			</div>
			<div className="grid grid-cols-3 gap-7 pt-10 max-md:grid-cols-2 max-sm:grid-cols-1 auto-rows-min">
				<div className="w-full">
					<span className="text-mainYellow">{t("date")}</span>
					<p className="text-white mt-1.5">{t("p1")}</p>
				</div>
				<div className="flex flex-col gap-4 text-grayMain max-lg:text-[14px] leading-[160%]">
					<p>{t("p2")}</p>
					<p>{t("p3")}</p>
				</div>
				<div className="flex flex-col gap-4 text-grayMain max-lg:text-[14px] leading-[160%]">
					<p>{t("p4")}</p>
					<p>{t("p5")}</p>
				</div>
				<div className="flex flex-col gap-4 max-sm:row-start-3 max-sm:text-center max-sm:items-center">
					<Image
						src="/img/regionalAtBest.jpg"
						width={300}
						height={300}
						loading="lazy"
						alt="regional at best cover"
					/>
					<span className="text-grayMain">{t("cover")}</span>
					<div className="mt-5 max-sm:mb-5">
						<Link href="/albums/regional-at-best">
							<ArrowedBtn>{t("btn")}</ArrowedBtn>
						</Link>
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
						url={t("videoUrl")}
					/>
				)}
			</AnimatePresence>
		</section>
	);
};

export default SecondAlbum;
