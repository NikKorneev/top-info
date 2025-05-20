"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import Navmenu from "./navmenu";

const MobileMenu = () => {
	const [menuIsOpened, setMenuIsOpened] = useState(false);
	return (
		<div className="relative">
			<motion.div
				layout
				layoutId="close"
				className={`menu flex md:hidden  ${menuIsOpened ? "open" : ""}  `}
				onClick={() => {
					setMenuIsOpened(!menuIsOpened);
				}}
			>
				<span></span>
				<span></span>
				<span></span>
			</motion.div>
			<AnimatePresence>
				{menuIsOpened && (
					<>
						<motion.div
							exit={{ x: "-100%" }}
							initial={{ x: "-100%", opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.25, ease: "linear" }}
							className="fixed top-0 left-0 w-[80dvw] h-[100dvh] bg-mainYellow z-[1010] px-4 pt-20 *:text-black *:text-2xl *:font-bold"
						>
							<motion.div
								onClick={() => setMenuIsOpened(false)}
								layoutId="close"
								className="absolute top-4 right-4 cursor-pointer"
							>
								<MdClose size={40} />
							</motion.div>
							<Navmenu
								setMenuIsOpened={setMenuIsOpened}
								className="md:hidden max-md:flex flex-col gap-5"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.25, ease: "linear" }}
							onClick={() => setMenuIsOpened(false)}
							className="w-full h-[100dvh] bg-black/50 fixed top-0 left-0 bottom-0 z-[1000] cursor-pointer"
						></motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
};

export default MobileMenu;
