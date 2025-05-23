import DuoNavTab from "@/components/animated/DuoNavTab";
import BackBtn from "@/components/ui/backBtn";
import LayoutBanner from "@/pages/duo/layoutBanner";
import React from "react";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="pt-30">
			<div className="container mx-auto pb-3.5">
				<BackBtn />
			</div>
			<LayoutBanner />
			<div className="flex justify-center items-center pt-14">
				<DuoNavTab
					tabs={[
						{ label: "ТАЙЛЕР ДЖОЗЕФ", href: "/duo/tyler-joseph" },
						{ label: "ДЖОШ ДАН", href: "/duo/josh-dun" },
					]}
				/>
			</div>
			{children}
		</div>
	);
};

export default Layout;
