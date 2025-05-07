"use client";
import { DuoMember } from "@/types/duoMember";
import { motion } from "motion/react";
import Image from "next/image";

type Props = {
	info: DuoMember;
};

const HeroBanner = ({ info }: Props) => {
	return (
		<section className="flex gap-5 justify-center font-martian py-10 relative">
			<motion.div
				initial={{ opacity: 0, filter: "blur(50px)" }}
				animate={{ opacity: 1, filter: "blur(0px)" }}
			>
				<Image
					src={info.imageUrl}
					width={417}
					height={616}
					className="object-cover "
					alt="Tyler Joseph"
				/>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, filter: "blur(50px)" }}
				animate={{ opacity: 1, filter: "blur(0px)" }}
			>
				<h2 className="title mb-5">{info.name}</h2>
				<ul className="flex flex-col gap-3">
					<DataItem title="Полное имя:" descr={info.fullName} />
					<DataItem
						title="Дата рождения:"
						descr={new Date(info.dateOfBirth).toLocaleDateString(
							"ru-RU"
						)}
					/>
					<DataItem
						title="Место рождения:"
						descr={info.placeOfBirth}
					/>
					<DataItem title="Инструменты:" descr={info.instruments} />
				</ul>
			</motion.div>
			<div className="absolute bottom-[-90%] opacity-25 -z-10 right-0 left-0">
				<Image
					src="/img/rock-1.png"
					width={1800}
					height={1082}
					className="object-cover h-full w-full"
					alt="rock background"
				/>
			</div>
			<div className="w-full h-0.5 bg-white absolute bottom-0 right-0 left-0" />
		</section>
	);
};

export const DataItem = ({
	title,
	descr,
}: {
	title: string;
	descr: string;
}) => {
	return (
		<div className="flex gap-2 text-white">
			<h3 className="font-bold">{title}</h3>
			<p className="text-grayMain">{descr}</p>
		</div>
	);
};

export default HeroBanner;
