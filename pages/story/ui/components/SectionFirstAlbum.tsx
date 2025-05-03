"use client";
import ArrowedBtn from "@/components/ui/arrowedBtn";
import { motion } from "motion/react";
import Image from "next/image";
import TextLined from "./textLined";

const FirstAlbum = () => {
	return (
		<section className="story-container">
			<div className="flex justify-between ">
				<h3 className="title">ПЕРВЫЙ АЛЬБОМ</h3>
				<p className="story-subtitle">[2009 год]</p>
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
						height={355}
						alt="Twenty one pilots first members"
					/>
				</motion.div>
				<div className="sm:max-w-[436px]">
					<TextLined
						end="-=185%"
						paragraphs={[
							`Дебютный альбом под названием “Twenty One Pilots” был выпущен 29 декабря 2009. Ни лейблов, ни продюсеров — только вера в идею.`,
							"Альбом был записан в домашних условиях и распространялся буквально из рук в руки после выступлений. А мать Джозефа стояла у здания Университета штата Огайо и раздавала билеты на их концерты.",
						]}
					/>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.9 }}
					className="ml-auto max-lg:ml-0"
				>
					<p></p>
					<ArrowedBtn>Страница альбома</ArrowedBtn>
				</motion.div>
			</div>
		</section>
	);
};

export default FirstAlbum;
