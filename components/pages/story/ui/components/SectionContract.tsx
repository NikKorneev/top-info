import ArrowedBtn from "@/components/ui/arrowedBtn";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SectionContract = () => {
	const t = useTranslations("StoryPage.Contract");
	return (
		<section className="story-container relative">
			<div className="flex justify-between max-sm:flex-col max-sm:gap-2.5">
				<h3 className="title">{t("t")}</h3>
				<p className="story-subtitle">[2011-2013]</p>
			</div>
			<div className="grid grid-cols-3 gap-7 pt-10 max-md:grid-cols-2 max-sm:grid-cols-1">
				<div className="flex flex-col gap-10 xl:max-w-[400px]">
					<div>
						<span className="text-mainYellow">{t("date")}</span>
						<p className="text-white mt-1.5 max-sm:text-[14px]">
							{t("p1")}
						</p>
					</div>
					<div>
						<span className="text-mainYellow ">{t("date2")}</span>
						<p className="text-white mt-1.5 ">{t("p2")}</p>
					</div>
					<div className="mt-auto max-sm:mt-0 max-sm:mb-2">
						<Link href="/albums/vessel">
							<ArrowedBtn className="overflow-visible bg-back">
								{t("btn")}
							</ArrowedBtn>
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-4 text-grayMain max-lg:text-[14px] leading-[160%] ">
					<p>{t("p4")}</p>
					<p>{t("p5")}</p>
				</div>
				<Image
					src="/img/storyLabelContract.png"
					width={500}
					height={300}
					loading="eager"
					className="object-cover h-[300px] max-sm:w-[550px] max-sm:h-[250px] sm:hidden md:block mx-auto object-top-left"
					alt="Josh and Tyler picture"
				/>
				<Image
					src="/img/vesselCover.png"
					width={500}
					loading="eager"
					height={500}
					className="object-cover col-start-2  max-sm:w-[550px] max-md:col-start-2 max-sm:h-[250px] max-sm:mx-auto object-top-left max-sm:col-auto max-sm:row-start-5"
					alt="Twenty one pilots' vessel album cover"
				/>
				<div className="flex flex-col gap-4 text-grayMain max-lg:text-[14px] leading-[160%] sm:col-start-1 md:col-auto sm:row-start-2 md:row-auto">
					<p>{t("p6")}</p>
					<p>{t("p7")}</p>
				</div>
			</div>
			<div>
				<Image
					src="/icons/VESSEL.svg"
					fill
					alt="vessel sign"
					className="-z-10 opacity-50 max-sm:hidden"
				/>
			</div>
		</section>
	);
};

export default SectionContract;
