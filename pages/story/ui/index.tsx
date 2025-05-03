import Banner from "./components/banner";
import DuoCreation from "./components/duoCreation";
import FirstAlbum from "./components/firstAlbum";
import FirstMembers from "./components/firstMembers";
import Name from "./components/name";
import SecondAlbum from "./components/secondAlbum";

const StoryPage = () => {
	return (
		<div className="flex flex-col gap-40">
			<Banner />
			<FirstMembers />
			<FirstAlbum />
			<Name />
			<DuoCreation />
			<SecondAlbum />
		</div>
	);
};

export default StoryPage;
