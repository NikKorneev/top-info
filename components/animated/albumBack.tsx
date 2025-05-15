"use client";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
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
};

const AlbumBack = ({ text, image, className }: Props) => {
	const container = useRef(null);
	const title = useRef(null);

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
				fontSize: "5vw",
				ease: "linear",
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
			<div className="fixed top-[250px] left-1/2  font-martian -translate-x-1/2 -translate-y-1/2">
				<h1
					ref={title}
					className={clsx(
						" text-[15vw]  font-bold -z-10 uppercase  leading-[100%]",
						className || "text-mainRed"
					)}
				>
					{text}
				</h1>
				{image && (
					<p className="text-black text-5xl max-sm:text-2xl">
						альбом
					</p>
				)}
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
