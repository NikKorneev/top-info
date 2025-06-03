"use client";
import ArrowedBtn from "@/components/ui/arrowedBtn";
import { Link } from "@/i18n/navigation";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TextLined from "./textLined";

const FirstAlbum = () => {
	const t = useTranslations("StoryPage.FirstAlbum");
	return (
		<section className="story-container">
			<div className="flex justify-between ">
				<h3 className="title">{t("t")}</h3>
				<span className="story-subtitle">{t("subt")}</span>
			</div>
			<div className="mt-10 grid grid-cols-[2fr_2fr_1fr] gap-5 max-lg:grid-cols-2 xl:gap-20 lg:gap-10 max-sm:grid-cols-1 max-sm:gap-10 overflow-hidden">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ amount: 0.5 }}
				>
					<Image
						src={"/img/story-first-album.png"}
						width={632}
						loading="eager"
						height={355}
						alt="Twenty one pilots first members"
					/>
				</motion.div>
				<div className="sm:max-w-[436px]">
					<TextLined paragraphs={[t("p1"), t("p2")]} />
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.9 }}
					className="ml-auto max-lg:ml-0"
				>
					<p></p>
					<Link href="/albums/twenty-one-pilots" scroll={true}>
						<ArrowedBtn>{t("btn")}</ArrowedBtn>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default FirstAlbum;
