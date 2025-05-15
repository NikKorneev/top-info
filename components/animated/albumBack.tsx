"use client";
import { urlFor } from "@/sanity/lib/client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type Props = {
	text: string;
	image?: string;
	className?: string;
	titleSVG?: any;
};

const AlbumBack = ({ text, image, titleSVG, className }: Props) => {
	const container = useRef(null);
	const title = useRef(null);
	const showTitle = text && !titleSVG;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useGSAP(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: "top top",
					end: "bottom top", // увеличили продолжительность scroll-пиннинга
					scrub: true,
				},
			});

			tl.to(title.current, {
				opacity: 0,
			});
		}, container);

		return () => ctx.revert();
	}, []);

	return (
		<motion.div
			ref={container}
			transition={{ duration: 0.4, delay: 0.2 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="w-full h-screen absolute top-0 left-0 "
		>
			<div
				ref={title}
				className="fixed top-[100px] left-1/2  font-martian -translate-x-1/2 "
			>
				{showTitle && (
					<h1 className="text-mainRed leading-[100%] font-bold text-[200px] uppercase max-sm:text-2xl">
						{text}
					</h1>
				)}
				{titleSVG && (
					<Image
						width={933}
						height={217}
						src={urlFor(titleSVG).width(933).url()}
						alt={"album title"}
					/>
				)}

				<p className="text-black text-5xl max-sm:text-2xl">
					{showTitle ? "[2009-2024]" : "альбом"}
				</p>
			</div>
			<Image
				alt={"albums background"}
				fill
				className="object-cover  -z-20"
				src={image || "/img/albums-background.png"}
			/>
		</motion.div>
	);
};

export default AlbumBack;
