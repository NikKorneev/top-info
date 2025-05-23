import { useTranslations } from "next-intl";
import Image from "next/image";
import Socials from "./Socials";

type Props = {
	links: { link: string; name: string }[];
	releaseDate: Date;
	title: string;
	albumCover: string;
};

const AlbumCard = ({ links, releaseDate, albumCover, title }: Props) => {
	const linkList =
		links?.length > 0
			? links
					?.map((obj) => ({
						[obj?.name]: obj?.link,
					}))
					.reduce((a, b) => Object.assign(a, b))
			: undefined;
	const t = useTranslations("AlbumCard");
	return (
		<div className="font-martian shrink-0 flex gap-5 flex-col  max-w-[400px]">
			<div className="relative">
				<Image
					src={albumCover || "/img/clancyAlbumCover.png"}
					alt="album-card"
					className="mask-alpha mask-b-from-45%"
					width={400}
					height={400}
				/>
				<div className="absolute bottom-0 px-4">
					<h2 className="text-white font-bold text-2xl">{title}</h2>
					<div className="flex gap-2 text-grayMain/90">
						<p className="font-bold">{t("t")}</p>
						<span className="capitalize">
							{new Date(releaseDate).toLocaleDateString(
								t("locale"),
								{
									year: "numeric",
									month: "long",
									day: "numeric",
								}
							)}
						</span>
					</div>
				</div>
			</div>
			<div className="flex flex-col">
				<div className="mt-auto flex flex-col gap-2">
					{linkList && (
						<Socials
							apple={linkList.apple}
							spotify={linkList.spotify}
							soundcloud={linkList.soundcloud}
							yandex={linkList.yandex}
							youtube={linkList.youtube}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default AlbumCard;
