"use client";
import ModalVideo from "@/components/animated/modalVideo";
import ArrowedBtn from "@/components/ui/arrowedBtn";
import { Link } from "@/i18n/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { LuPlay } from "react-icons/lu";

const SectionAdmire = () => {
	const [isOpened, setOpened] = useState(false);
	const t = useTranslations("StoryPage.Admire");
	return (
		<section className="story-container">
			<div className="flex justify-between">
				<h3 className="title">{t("t")}</h3>
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
				<div className="flex flex-col gap-4 text-grayMain max-lg:text-[14px] leading-[160%] ">
					<p>{t("p1")}</p>
					<p>{t("p2")}</p>
				</div>
				<div className="flex flex-col gap-4 text-grayMain max-lg:text-[14px] leading-[160%] ">
					<p>{t("p3")}</p>
					<p>{t("p4")}</p>
				</div>
				<div className="flex flex-col gap-10">
					<div>
						<span className="text-mainYellow">{t("date")}</span>
						<p className="text-white mt-1.5">{t("p5")}</p>
					</div>
					<Link href="/albums/blurryface" scroll={true}>
						<ArrowedBtn>{t("btn")}</ArrowedBtn>
					</Link>
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
						loading="eager"
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
						layoutId="stressedOut"
						setOpened={setOpened}
						url={t("url")}
					/>
				)}
			</AnimatePresence>
		</section>
	);
};

export default SectionAdmire;
