import ArrowedBtn from "@/components/ui/arrowedBtn";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TextLined from "./textLined";

const DuoCreation = () => {
	const t = useTranslations("StoryPage.DuoCreation");
	return (
		<section className="story-container">
			<div className="flex justify-between max-sm:flex-col max-sm:gap-2">
				<h4 className="title">{t("t")}</h4>
				<p className="story-subtitle">{t("subt")}</p>
			</div>
			<div className="grid grid-cols-3 gap-20 py-10 max-lg:grid-cols-2 max-md:gap-5 max-sm:grid-cols-1">
				<div>
					<p className="text-gray-50 text-2xl mb-5">{t("name")}</p>
					<Link href="/duo/josh-dun" scroll={true}>
						<ArrowedBtn>{t("btn")}</ArrowedBtn>
					</Link>
					<div className="overflow-hidden mt-5 relative lg:hidden">
						<Image
							src="/img/story-josh.png"
							width={500}
							height={500}
							quality={100}
							className="object-cover max-sm:w-[550px] max-sm:h-[250px] mx-auto object-top-left"
							alt="Josh Dun"
						/>
						<Image
							src="/icons/joshSign.png"
							width={100}
							height={100}
							className="absolute top-0 left-0"
							alt="sign"
						/>
					</div>
				</div>
				<div className="overflow-hidden relative max-lg:hidden">
					<Image
						src="/img/story-josh.png"
						width={500}
						height={500}
						quality={100}
						className="object-cover max-sm:w-[350px] max-sm:h-[350px] mx-auto"
						alt="Josh Dun"
					/>
					<Image
						src="/icons/joshSign.png"
						width={150}
						height={150}
						className="absolute top-0 left-0"
						alt="sign"
					/>
				</div>
				<TextLined
					end="-=50%"
					paragraphs={[t("p1"), t("p2"), t("p3")]}
				/>
			</div>
		</section>
	);
};

export default DuoCreation;
