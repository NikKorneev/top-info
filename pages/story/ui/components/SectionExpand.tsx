"use client";

import ArrowedBtn from "@/components/ui/arrowedBtn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SectionExpand() {
	const container = useRef(null);
	const logo = useRef(null);
	const bg = useRef(null);
	const text = useRef(null);
	const logoText = useRef(null);
	const insideText = useRef(null);

	useGSAP(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: "top top",
					end: "+=2200px", // увеличили продолжительность scroll-пиннинга
					scrub: true,
					pin: true,
				},
			});

			tl.to(logo.current, {
				scale: 8,
				opacity: 0,
				ease: "linear",
			})
				.to(
					bg.current,
					{
						width: "100%",
						ease: "linear",
					},
					"<+0.35"
				)
				.to(
					logoText.current,
					{
						opacity: 1,
					},
					"<+0.25"
				)
				.to(
					insideText.current,
					{
						height: "100%",
					},
					"<+0.25"
				)
				.to(
					text.current,
					{
						opacity: 1,
						y: 0,
					},
					"<"
				);
		}, container);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={container}
			className="relative min-h-screen overflow-hidden bg-black "
		>
			<img
				ref={bg}
				src="/img/expand.png"
				className="absolute inset-0 w-0 h-full will-change-transform  object-cover  transition-opacity duration-500"
				alt="Concert"
			/>
			<div
				ref={logo}
				className="absolute will-change-transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
			>
				<img
					src="/top-logo.svg"
					alt="Twenty One Pilots"
					className="w-32 h-32"
				/>
			</div>
			<div
				ref={logoText}
				className="absolute top-[30%] opacity-0 uppercase font-bold left-1/2 text-center -translate-x-[50%] font-martian  z-10 text-8xl"
			>
				<div
					ref={insideText}
					className="absolute transition-all overflow-hidden h-0 will-change-auto top-0 left-0 text-mainRed  stroke-2"
				>
					twenty one pilots
				</div>
				<div className=" text-transparent stroke-red stroke-2">
					twenty one pilots
				</div>
			</div>
			<div
				ref={text}
				className="absolute will-change-transform inset-0 flex mt-80 items-center justify-center opacity-0 translate-y-4 text-white text-4xl font-bold z-20"
			>
				<Link href={"/albums"}>
					<ArrowedBtn className="w-[200px] bg-black">
						Все альбомы
					</ArrowedBtn>
				</Link>
			</div>
		</section>
	);
}
