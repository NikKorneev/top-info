import Accordion from "@/components/animated/accordion";
import SectionBanner from "./components/banner";
import Quote from "./components/quote";
import SectionAdmire from "./components/SectionAdmire";
import SectionClancyStory from "./components/SectionClancyStory";
import SectionContract from "./components/SectionContract";
import SectionDuoCreation from "./components/SectionDuoCreation";
import SectionExpand from "./components/SectionExpand";
import SectionFirstAlbum from "./components/SectionFirstAlbum";
import SectionFirstMembers from "./components/SectionFirstMembers";
import SectionName from "./components/SectionName";
import SectionSecondAlbum from "./components/SectionSecondAlbum";

const StoryPage = ({ id }: { id: number }) => {
	return (
		<div className="flex flex-col gap-40 relative mb-[2200px]">
			<SectionBanner />
			<SectionFirstMembers />
			<SectionFirstAlbum />
			<div className="bg-[url('/img/clancy-back.png')] bg-cover bg-no-repeat py-20 ">
				<SectionName />
			</div>
			<SectionDuoCreation />
			<Quote />
			<SectionSecondAlbum />

			<SectionContract />
			<SectionAdmire />

			<SectionClancyStory />

			<div className="container mx-auto">
				<Accordion id={id} title={"Интересные факты"} type={"story"} />
			</div>
			<SectionExpand />
		</div>
	);
};

export default StoryPage;
