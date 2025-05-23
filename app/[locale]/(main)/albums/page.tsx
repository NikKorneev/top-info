import AlbumBack from "@/components/animated/albumBack";
import Albums from "@/components/animated/albums";
import { getAlbums } from "@/lib/api";
import { getTranslations } from "next-intl/server";

type Props = {
	params: Promise<{ locale: string }>;
};

const Page = async ({ params }: Props) => {
	const locale = (await params).locale;
	const albums = await getAlbums(locale);
	const t = await getTranslations("AlbumPage");
	return (
		<div>
			<AlbumBack text={"альбомы"} />
			<div className="relative z-50">
				<Albums
					title={t("t")}
					subtitle={t("subt")}
					albums={albums}
					titleOnce={false}
				/>
			</div>
		</div>
	);
};

export default Page;
