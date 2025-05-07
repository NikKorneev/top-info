"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxWrapperProps {
	children: React.ReactNode;
	speed?: number; // Чем больше число — тем сильнее параллакс
	direction?: "up" | "down"; // направление параллакса
	className?: string;
}

export default function ParallaxWrapper({
	children,
	speed = 100,
	direction = "up",
	className = "",
}: ParallaxWrapperProps) {
	const container = useRef(null);

	useGSAP(
		() => {
			const yMovement = direction === "up" ? -speed : speed;

			gsap.to(container.current, {
				y: yMovement,
				ease: "none",
				scrollTrigger: {
					trigger: container.current,
					start: "top bottom", // когда элемент входит снизу
					end: "bottom top", // когда элемент уходит вверх
					scrub: true,
				},
			});
		},
		{ scope: container }
	);

	return (
		<div ref={container} className={className}>
			{children}
		</div>
	);
}
