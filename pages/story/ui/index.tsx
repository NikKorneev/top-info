import SectionBanner from "./components/banner";
import SectionAdmire from "./components/SectionAdmire";
import SectionContract from "./components/SectionContract";
import SectionDuoCreation from "./components/SectionDuoCreation";
import SectionFirstAlbum from "./components/SectionFirstAlbum";
import SectionFirstMembers from "./components/SectionFirstMembers";
import SectionName from "./components/SectionName";
import SectionSecondAlbum from "./components/SectionSecondAlbum";

const StoryPage = () => {
	return (
		<div className="flex flex-col gap-40">
			<SectionBanner />
			<SectionFirstMembers />
			<SectionFirstAlbum />
			<SectionName />
			<SectionDuoCreation />
			<SectionSecondAlbum />
			<SectionContract />
			<SectionAdmire />
		</div>
	);
};

export default StoryPage;
