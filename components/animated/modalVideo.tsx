"use client";
import { AnimatePresence, motion } from "motion/react";
import { Dispatch, SetStateAction, useState } from "react";
import { LuLoaderCircle } from "react-icons/lu";

type Props = {
	setOpened: Dispatch<SetStateAction<boolean>>;
	url: string;
	layoutId: string;
};

const ModalVideo = ({ setOpened, url, layoutId }: Props) => {
	const [loading, setLoading] = useState(true);
	return (
		<motion.div
			initial={{ opacity: 0, filter: "blur(100px)" }}
			animate={{ opacity: 1, filter: "blur(0px)" }}
			exit={{ opacity: 0 }}
			className="fixed top-0 left-0 w-full h-screen z-[100] bg-black/60 flex items-center justify-center"
			onClick={() => setOpened(false)}
		>
			<motion.div
				layoutId={layoutId}
				className="w-[80vw] aspect-video bg-black/50"
				onClick={(e) => e.stopPropagation()}
				transition={{
					layout: { duration: 0.5, ease: "easeInOut" },
				}}
			>
				<AnimatePresence>
					{loading && (
						<motion.div
							exit={{ opacity: 0, y: -100 }}
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
						>
							<LuLoaderCircle className="animate-spin text-mainYellow text-5xl" />
						</motion.div>
					)}
				</AnimatePresence>

				<iframe
					className="w-full h-full"
					src={url}
					onLoad={() => setLoading(false)}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			</motion.div>
		</motion.div>
	);
};

export default ModalVideo;
