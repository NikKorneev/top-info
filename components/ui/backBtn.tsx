"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
const BackBtn = () => {
	const router = useRouter();
	return (
		<motion.div
			animate={{
				opacity: 1,
			}}
			initial={{
				opacity: 0,
			}}
			role="button"
			className="flex gap-2 items-center font-martian cursor-pointer group group "
			onClick={() => router.back()}
		>
			<BiArrowBack
				size={40}
				className="text-mainYellow transition-colors group-hover:text-grayMain"
			/>
			<p className="text-mainYellow text-[20px] transition-colors group-hover:text-grayMain">
				Назад
			</p>
		</motion.div>
	);
};

export default BackBtn;
