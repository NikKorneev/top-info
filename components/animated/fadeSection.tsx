"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const FadeSection = ({ children }: { children: React.ReactNode }) => {
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.fromTo(
				container.current,
				{ opacity: 0 },
				{
					opacity: 1,
					ease: "power1.out",
					scrollTrigger: {
						trigger: container.current,
						start: "top 80%",
						end: "top top",
						scrub: true, // <<— делает анимацию зависящей от прокрутки!
					},
				}
			);
		},
		{ scope: container }
	);

	return <div ref={container}>{children}</div>;
};

export default FadeSection;
