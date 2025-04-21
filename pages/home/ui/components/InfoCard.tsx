"use client";
import { motion } from "motion/react";
import Image from "next/image";

type Props = {
	title: string;
	add?: string;
	color?: string;
	description?: string;
	icon?: string;
	subtitle?: string;
	className?: string;
	isHeader?: boolean;
};
const InfoCard = ({
	title,
	add,
	color,
	description,
	icon,
	subtitle,
	isHeader,
	className,
}: Props) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 100,
				scale: 0.5,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
				scale: 1,
				transition: { duration: 0.5 },
			}}
			viewport={{ once: true }}
			className={`${color ? color : "bg-grayMain "} py-8 flex flex-col justify-between w-full h-full ${className ? className : ""}`}
		>
			<div className="px-8 flex justify-between mb-auto max-sm:flex-col max-sm:items-start max-sm:justify-baseline">
				<div className="flex  items-end ">
					<p
						className={`${isHeader ? "lg:text-[48px] text-[32px] font-martian font-extrabold uppercase text-white" : "lg:text-[110px] md:text-7xl text-5xl font-oswald font-bold text-gradient"} leading-none`}
					>
						{title}
					</p>
					<p className="lg:text-[48px] md:text-4xl text-2xl font-oswald leading-none font-bold">
						{add}
					</p>
				</div>
				<div className="sm:text-right max-sm:mt-4 md:text-[16px] font-bold font-martian uppercase text-[14px] xl:max-w-[30%]  md:max-w-[50%] max-w-[70%]">
					<p>{subtitle}</p>
					{icon && (
						<Image src={icon} alt="logo" width={64} height={64} />
					)}
				</div>
			</div>
			{description && (
				<>
					<div className="w-full h-0.5 bg-black mb-4"></div>
					<div className="px-8 text-sm font-light font-martian">
						{description
							?.split("\n")
							.map((line, idx) => <p key={idx}>{line}</p>)}
					</div>
				</>
			)}
		</motion.div>
	);
};

export default InfoCard;
