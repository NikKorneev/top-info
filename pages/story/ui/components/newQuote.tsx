"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import { MdOutlineFormatQuote } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const NewQuote = () => {
	const containerRef = useRef(null);
	const expander = useRef(null);
	const text1 = useRef(null);
	const text2 = useRef(null);
	const text3 = useRef(null);
	const text4 = useRef(null);
	const text5 = useRef(null);
	const svgTop = useRef(null);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useGSAP(() => {
		const video = videoRef.current;
		const container = containerRef.current;

		if (!video || !container) return;

		video.pause();

		const ctx = gsap.context(() => {
			const videoDuration = video.duration || 1;

			// 🎬 Таймлайн видео
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					start: "top top",
					end: "+=1800px",
					scrub: 2,
					pin: expander.current,
					onUpdate: (self) => {
						const time = self.progress * videoDuration;
						video.currentTime = time;

						if ("requestVideoFrameCallback" in video) {
							(video as any).requestVideoFrameCallback(() => {});
						}
					},
				},
			});

			const fadeInText = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					start: "+=1800", // запускается после первой
					end: "bottom bottom",
					scrub: 2,
					pin: expander.current,
				},
			});

			fadeInText.to(
				expander.current,
				{
					opacity: 0.2,
				},
				"<+0.7"
			);

			// ✍️ Таймлайн текста и затемнения
			tl.to(
				svgTop.current,
				{
					width: "1000px",
					duration: 0.9,
				},
				"<"
			);

			tl.to(
				text1.current,
				{
					x: 0,
					opacity: 1,
					ease: "linear",
					duration: 0.2,
				},
				"<"
			)
				.to(
					text2.current,
					{
						x: 0,
						opacity: 1,
						ease: "linear",
						duration: 0.2,
					},
					"<+0.1"
				)
				.to(
					text3.current,
					{
						x: 0,
						opacity: 1,
						ease: "linear",
						duration: 0.2,
					},
					"<+0.1"
				)
				.to(
					text4.current,
					{
						x: 0,
						opacity: 1,
						ease: "linear",
						duration: 0.2,
					},
					"<+0.1"
				)
				.to(
					text5.current,
					{
						x: 0,
						opacity: 1,
						ease: "linear",
						duration: 0.2,
					},
					"<+0.05"
				);
		}, containerRef);

		const onMetadata = () => {
			ScrollTrigger.refresh();
		};

		if (video.readyState >= 1) {
			onMetadata();
		} else {
			video.addEventListener("loadedmetadata", onMetadata);
		}

		return () => {
			ctx.revert();
			video.removeEventListener("loadedmetadata", onMetadata);
		};
	}, []);

	return (
		<section
			ref={containerRef}
			className="min-h-[3200px]  relative overflow-hidden"
		>
			<div
				ref={expander}
				className="w-[100vw] overflow-hidden uppercase h-[100vh]  absolute top-0 left-0   justify-center items-center flex  text-[48px] font-bold max-xl:text-[35px] max-lg:items-end max-lg:py-10 max-sm:text-[24px] max-sm:items-center"
			>
				<div
					ref={svgTop}
					className="absolute overflow-hidden w-0 top-[10%] left-0 max-lg:bottom-0 max-lg:top-auto max-lg:opacity-50"
				>
					<svg
						width="1417"
						height="190"
						viewBox="0 0 1417 190"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.928711 116.929C25.9285 100.857 95.571 72.6428 174.143 88.3571C272.357 108 324.143 36.5714 388.429 31.2142C452.714 25.8571 436.643 124.071 524.143 106.214C611.643 88.3571 602.714 34.7857 750.929 52.6429C899.143 70.5 845.571 124.071 974.143 106.214C1102.71 88.3571 1068.79 -47.3571 1200.93 20.5C1333.07 88.3571 1188.43 213.357 1370.57 184.786C1516.29 161.929 1562.24 80.0238 1567 41.9286"
							stroke="#CF2F2F"
							strokeWidth="2"
						/>
					</svg>
				</div>

				<video
					ref={videoRef}
					src="/videos/output_3s_fullHd.mp4"
					className="absolute z-50   top-0 right-0 h-full  w-[50%] object-cover object-[95%_bottom] aspect-square  will-change-transform max-lg:aspect-video max-lg:h-auto max-lg:w-[70%] max-lg:top-[15%] max-md:w-full max-md:top-[10%] max-sm:aspect-square max-sm:top-[20px] max-sm:mask-alpha max-sm:mask-b-from-45%"
					playsInline
					tabIndex={-1}
					preload="auto"
					muted
					crossOrigin="anonymous"
					disablePictureInPicture
					controls={false}
				/>
				<div className="container mx-auto flex flex-col gap-5 text-white text-shadow max-lg:gap-2.5 max-sm:px-4">
					<div
						ref={text1}
						className="relative flex flex-col items-baseline justify-start w-[100%] translate-x-[20%]  leading-[100%] opacity-0 z-[55]"
					>
						<MdOutlineFormatQuote
							size={100}
							className="text-mainRed"
						/>
						<span>Музыка может быть</span>
					</div>
					<div
						ref={text2}
						className="relative flex justify-start translate-x-[20%] opacity-0 leading-[100%] z-[55] "
					>
						<span>мощным инструментом</span>
					</div>
					<div
						ref={text3}
						className="relative flex justify-start translate-x-[20%] opacity-0 leading-[100%] z-[55]"
					>
						<span>для исцеления</span>
					</div>
					<div
						ref={text4}
						className="relative flex justify-start translate-x-[20%] opacity-0 leading-[100%] z-[55]"
					>
						<span>и объединения людей.</span>
					</div>
					<div
						ref={text5}
						className="  relative  translate-x-[20%] opacity-0 mt-10 z-[55] max-lg:mt-6"
					>
						<Link
							href={"/duo/tyler-joseph"}
							className="bg-mainRed text-white px-1 transition-all cursor-pointer hover:bg-mainYellow hover:text-back "
						>
							Тайлер Джозеф
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewQuote;
