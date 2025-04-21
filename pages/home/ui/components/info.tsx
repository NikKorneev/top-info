import InfoCard from "./InfoCard";

const Info = () => {
	return (
		<div className="container max-sm:px-4 info-grid max-lg:py-0 max-md:-mt-10 max-lg:-mt-10 gap-4 mx-auto py-20 relative z-50 grid-rows-[324px]  auto-rows-[324px] ">
			<InfoCard
				title={"группа в цифрах"}
				color={"bg"}
				icon="/icons/logo-white.png"
				isHeader
				className="info-card font-martian"
			/>
			<InfoCard
				subtitle={"Лет в\nмузыке"}
				description={"Группа была образована\nв 2009 году"}
				title={"15+"}
				color={"bg-mainYellow"}
			/>
			<InfoCard
				subtitle={"студийных\nальбомов"}
				description={
					"группа изменяет фирменные цвета\nна каждом альбоме"
				}
				title={"7"}
			/>

			<InfoCard
				subtitle={"прослушиваний\nна одном треке"}
				description={
					"“stressed out” является самым\nпрослушиваемым треком группы "
				}
				title={"3+"}
				add={"млрд"}
			/>
			<InfoCard
				subtitle={"слушателей\nна spotify\nкаждый месяц"}
				description={
					"группа входит в топ 100\n популярных артистов на spotify каждый месяц"
				}
				title={"28+"}
				add={"млн"}
			/>
		</div>
	);
};

export default Info;
