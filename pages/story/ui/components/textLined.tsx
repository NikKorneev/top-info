"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const TextLined = ({
	paragraphs,
	itemsClass,
	wrapperClass,
	end,
	start,
}: {
	paragraphs: string[];
	itemsClass?: string;
	wrapperClass?: string;
	start?: string;
	end?: string;
}) => {
	const curSectionRef = useRef(null);
	const lineRef = useRef(null);
	const textMaskRef = useRef(null);
	const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

	useEffect(() => {
		const total = paragraphs.length;

		gsap.fromTo(
			lineRef.current,
			{ height: 0 },
			{
				height: "100%",
				ease: "none",
				scrollTrigger: {
					trigger: curSectionRef.current,
					start: start || "top bottom",
					end: end || "center center",
					scrub: true,
					onUpdate: (self) => {
						const progress = self.progress; // 0 to 1
						paragraphRefs.current.forEach((el, idx) => {
							const threshold = (idx + 1) / total;
							if (el) {
								if (progress >= threshold) {
									el.style.opacity = "1";
									el.style.transform = "translateY(0px)";
								} else {
									el.style.opacity = "0";
									el.style.transform = "translateY(20px)";
								}
							}
						});
					},
				},
			}
		);
	}, [paragraphs.length]);

	return (
		<div ref={curSectionRef}>
			<div
				ref={textMaskRef}
				className={`gap-4 flex flex-col relative pl-5 ${wrapperClass}`}
			>
				{paragraphs?.map((p, i) => (
					<p
						key={i}
						ref={(el) => (paragraphRefs.current[i] = el)}
						className={`${itemsClass} text-grayMain leading-[150%] opacity-0  transition-all duration-300 max-lg:text-[14px]`}
					>
						{p}
					</p>
				))}

				<div
					ref={lineRef}
					className="w-1 h-full origin-top bg-mainRed top-0 left-0 absolute"
				/>
			</div>
		</div>
	);
};

export default TextLined;
