"use client";

import ArrowedBtn from "@/components/ui/arrowedBtn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function LogoReveal() {
	const container = useRef(null);
	const logo = useRef(null);
	const bg = useRef(null);
	const text = useRef(null);

	useGSAP(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: "top top",
					end: "+=1300px", // увеличили продолжительность scroll-пиннинга
					scrub: true,
					pin: true,
				},
			});

			tl.to(logo.current, {
				scale: 30,
				opacity: 0,
				ease: "linear",
			})
				.to(
					bg.current,
					{
						opacity: 1,
						width: "100%",
					},
					"<+0.2"
				)
				.to(
					text.current,
					{
						opacity: 1,
						y: 0,
					},
					"<+0.25"
				);
		}, container);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={container}
			className="relative min-h-screen overflow-hidden bg-black"
		>
			<img
				ref={bg}
				src="/img/expand.png"
				className="absolute inset-0 w-0 h-full  object-cover opacity-0 transition-opacity duration-500"
				alt="Concert"
			/>
			<div
				ref={logo}
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
			>
				<img
					src="/top-logo.svg"
					alt="Twenty One Pilots"
					className="w-32 h-32"
				/>
			</div>
			<div
				ref={text}
				className="absolute inset-0 flex mt-80 items-center justify-center opacity-0 translate-y-4 text-white text-4xl font-bold z-20"
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
