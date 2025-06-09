import Accordion from "@/components/animated/accordion";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import SectionBanner from "./components/banner";

const NewQuote = dynamic(() => import("./components/newQuote"));
const SectionAdmire = dynamic(() => import("./components/SectionAdmire"));
const SectionClancyStory = dynamic(
	() => import("./components/SectionClancyStory")
);
const SectionContract = dynamic(() => import("./components/SectionContract"));
const SectionDuoCreation = dynamic(
	() => import("./components/SectionDuoCreation")
);
const SectionExpand = dynamic(() => import("./components/SectionExpand"));
const SectionFirstAlbum = dynamic(
	() => import("./components/SectionFirstAlbum")
);
const SectionFirstMembers = dynamic(
	() => import("./components/SectionFirstMembers")
);
const SectionName = dynamic(() => import("./components/SectionName"));
const SectionSecondAlbum = dynamic(
	() => import("./components/SectionSecondAlbum")
);

const StoryPage = ({ id, locale }: { id: number; locale: "en" | "ru" }) => {
	const t = useTranslations("StoryPage");
	return (
		<div className="flex flex-col gap-40 relative mb-[2200px] max-sm:gap-28">
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
