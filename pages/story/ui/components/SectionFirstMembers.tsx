import { useTranslations } from "next-intl";
import FirstMembersCards from "./firstMembersCards";
import TextLined from "./textLined";

const FirstMembers = () => {
	const t = useTranslations("StoryPage.FirstMembers");
	return (
		<section className="story-container">
			<div className="flex justify-between">
				<h2 className="title">{t("title")}</h2>
				<p className="story-subtitle">{t("subtitle")}</p>
			</div>
			<div className="grid grid-cols-3 gap-20 pt-10 max-md:grid-cols-2 max-md:gap-5 max-sm:grid-cols-1">
				<TextLined
					end="-=60%"
					paragraphs={[
						t("description1"),
						t("description2"),
						t("description3"),
					]}
				/>
				<div className="flex flex-col col-span-2 pt-10 max-sm:text-center max-sm:items-center">
					<p className="text-grayMain text-2xl ">{t("members")}</p>
					<FirstMembersCards />
				</div>
			</div>
		</section>
	);
};

export default FirstMembers;
