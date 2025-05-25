import { useTranslations } from "next-intl";
import InfoCard from "./InfoCard";

type Props = {
	card1: {
		title: string;
	};
	card2: {
		title: string;
		descr: string;
	};
	card3: {
		title: string;
		descr: string;
	};
	card4: {
		title: string;
		descr: string;
	};
	card5: {
		title: string;
		descr: string;
	};
};

const Info = ({ card1, card2, card3, card4, card5 }: Props) => {
	const t = useTranslations("HomePage.InfoGrid");
	return (
		<section
			id="info"
			className="container max-sm:px-4 info-grid max-lg:py-0 max-md:-mt-10 max-lg:-mt-10 gap-4 mx-auto pb-20 relative z-50 grid-rows-[324px]  auto-rows-[324px] "
		>
			<InfoCard
				animate={false}
				title={card1.title}
				color={"bg"}
				icon="/icons/logo-white.png"
				isHeader
				className="info-card font-martian"
			/>
			<InfoCard
				animate={false}
				subtitle={card2.title}
				description={card2.descr}
				title={"15+"}
				color={"bg-mainYellow"}
			/>
			<InfoCard
				animate={false}
				subtitle={card3.title}
				description={card3.descr}
				title={"7"}
			/>

			<InfoCard
				subtitle={card4.title}
				description={card4.descr}
				title={"3+"}
				add={t("billions")}
			/>
			<InfoCard
				subtitle={card5.title}
				description={card5.descr}
				title={"28+"}
				add={t("millions")}
			/>
		</section>
	);
};

export default Info;
