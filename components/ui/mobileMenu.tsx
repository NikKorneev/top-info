"use client";
import { useState } from "react";

const MobileMenu = () => {
	const [menuIsOpened, setMenuIsOpened] = useState(false);
	return (
		<div
			className={`menu flex md:hidden  ${menuIsOpened ? "open" : ""}`}
			onClick={() => {
				setMenuIsOpened(!menuIsOpened);
			}}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
};

export default MobileMenu;
