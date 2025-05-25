import Accordion from "@/components/animated/accordion";
import { useTranslations } from "next-intl";
import SectionBanner from "./components/banner";
import NewQuote from "./components/newQuote";
import SectionAdmire from "./components/SectionAdmire";
import SectionClancyStory from "./components/SectionClancyStory";
import SectionContract from "./components/SectionContract";
import SectionDuoCreation from "./components/SectionDuoCreation";
import SectionExpand from "./components/SectionExpand";
import SectionFirstAlbum from "./components/SectionFirstAlbum";
import SectionFirstMembers from "./components/SectionFirstMembers";
import SectionName from "./components/SectionName";
import SectionSecondAlbum from "./components/SectionSecondAlbum";

const StoryPage = ({ id, locale }: { id: number; locale: "en" | "ru" }) => {
	const t = useTranslations("StoryPage");
	return (
		<div className="flex flex-col gap-40 relative mb-[2200px]">
			<SectionBanner />
			<SectionFirstMembers />
			<SectionFirstAlbum />
			<div className="bg-[url('/img/clancy-back.png')] bg-cover bg-no-repeat py-20 ">
				<SectionName />
			</div>
			<SectionDuoCreation />
			<NewQuote />
			<SectionSecondAlbum />

			<SectionContract />
			<SectionAdmire />

			<SectionClancyStory />

			<div className="container mx-auto" id="facts">
				<Accordion
					locale={locale}
					id={id}
					title={t("Accordion")}
					type={"story"}
				/>
			</div>
			<SectionExpand />
		</div>
	);
};

export default StoryPage;
