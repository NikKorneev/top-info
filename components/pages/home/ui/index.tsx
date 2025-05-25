import Albums from "@/components/animated/albums";
import { getAlbums } from "@/lib/api";
import { getTranslations } from "next-intl/server";
import About from "./components/about";
import Background from "./components/background";
import Btn from "./components/button";
import Duo from "./components/duo";
import Info from "./components/info";
import LastSong from "./components/lastSong";
import MainTitle from "./components/mainTitle";
import ParticipantSection from "./components/participant";
import Quote from "./components/quote";

type Props = {
	params: Promise<{ locale: string }>;
};
const HomePage = async ({ params }: Props) => {
	const locale = (await params).locale;
	const albums = await getAlbums(locale);
	const t = await getTranslations("HomePage");
	return (
		<>
			<div className="relative lg:min-h-screen font-martian">
				<MainTitle title={t("MainBanner.infoSubtitle")} />
				<Btn s={t("MainBanner.btn")} />
				<Duo />
				<Background />
			</div>
			<Info
				card1={{ title: t("InfoGrid.firstCard") }}
				card2={{
					title: t("InfoGrid.secCardTitle"),
					descr: t("InfoGrid.secCardDesc"),
				}}
				card3={{
					title: t("InfoGrid.thirdCardTitle"),
					descr: t("InfoGrid.thirdCardDesc"),
				}}
				card4={{
					title: t("InfoGrid.fourthCardTitle"),
					descr: t("InfoGrid.fourthCardDesc"),
				}}
				card5={{
					title: t("InfoGrid.fifthCardTitle"),
					descr: t("InfoGrid.fifthCardDesc"),
				}}
			/>
			<About
				btn={t("About.btn")}
				p1={t("About.p1")}
				p2={t("About.p2")}
				subtitle={t("About.subtitle")}
				title={t("About.title")}
			/>
			<div className="my-40">
				<Quote
					name={t("Quote.name")}
					p1={t("Quote.quote1")}
					p2={t("Quote.quote2")}
					p3={t("Quote.quote3")}
				/>
			</div>
			<div>
				<ParticipantSection
					btn={t("Duos.btn")}
					josh={{
						born: t("Duos.Josh.born"),
						descr: t("Duos.Josh.descr"),
						instruments: t("Duos.Josh.instruments"),
						name: t("Duos.Josh.name"),
					}}
					tyler={{
						born: t("Duos.Tyler.born"),
						descr: t("Duos.Tyler.descr"),
						instruments: t("Duos.Tyler.instruments"),
						name: t("Duos.Tyler.name"),
					}}
				/>
			</div>
			<div className="mt-40 overflow-hidden">
				<Albums
					albums={albums}
					subtitle={t("Albums.subtitle")}
					title={t("Albums.title")}
				/>
			</div>

			<LastSong title={t("LastWork.title")} url={t("LastWork.url")} />
		</>
	);
};

export default HomePage;
