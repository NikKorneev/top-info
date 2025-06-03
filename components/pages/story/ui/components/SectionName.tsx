import { useTranslations } from "next-intl";
import Image from "next/image";
import TextLined from "./textLined";

const Name = () => {
	const t = useTranslations("StoryPage.Name");
	return (
		<section className="story-container">
			<div className="flex justify-between">
				<h3 className="title">{t("t")}</h3>
			</div>
			<div className="grid grid-cols-[1fr_2fr] gap-[80px] pt-10  max-lg:gap-10 max-md:gap-x-5 max-md:gap-y-10 max-lg:grid-cols-2 max-sm:grid-cols-1  max-sm:gap-x-5">
				<TextLined
					paragraphs={[t("p1"), t("p2"), t("p3"), t("p4"), t("p5")]}
				/>
				<div className="grid grid-cols-2 gap-5  max-lg:grid-cols-1 max-lg:gap-0 max-sm:gap-5">
					<Image
						src={"/img/namin-3.jpg"}
						width={500}
						height={500}
						quality={100}
						loading="eager"
						className="object-cover max-sm:hidden"
						alt={"Naming"}
					/>
					<Image
						src={"/img/naming-2.png"}
						width={500}
						height={500}
						quality={100}
						loading="eager"
						className="object-cover object-left"
						alt={"Naming"}
					/>
				</div>
			</div>
		</section>
	);
};

export default Name;
