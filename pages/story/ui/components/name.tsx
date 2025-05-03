import Image from "next/image";
import TextLined from "./textLined";

const Name = () => {
	return (
		<section className="story-container">
			<div className="flex justify-between">
				<p className="title">НАЗВАНИЕ ГРУППЫ</p>
			</div>
			<div className="grid grid-cols-[3fr_1fr_3fr] gap-20 pt-10 grid-rows-[254px_381px] max-lg:gap-10 max-md:gap-x-5 max-md:gap-y-10 max-md:grid-cols-2 max-md:grid-rows-2 max-sm:grid-cols-1  max-sm:gap-x-5">
				<TextLined
					end="-=195%"
					paragraphs={[
						"Название “Twenty One Pilots” придумал фронтмен группы Тайлер Джозеф, вдохновившись пьесой Артура Миллера «Все мои сыновья».  ",
						"В центре сюжета — бизнесмен, который продал бракованные детали для военной авиации во время Второй мировой войны, что привело к гибели 21 пилота.",
					]}
				/>
				<div className="w-full h-full relative col-span-2 max-md:col-auto max-sm:hidden">
					<Image
						src={"/img/naming-1.png"}
						fill
						quality={100}
						className="object-cover"
						alt={"Naming"}
					/>
				</div>
				<div className="w-full h-full relative col-span-2 max-md:col-auto max-sm:col-span-1">
					<Image
						src={"/img/naming-2.png"}
						fill
						quality={100}
						className="object-cover object-top"
						alt={"Naming"}
					/>
				</div>
				<TextLined
					end="-=135%"
					paragraphs={[
						"Эта трагедия глубоко задела Тайлера: в ней он увидел борьбу между моралью и личной выгодой — темой, которая часто звучит и в творчестве группы. ",
						"Название Twenty One Pilots стало для него напоминанием о последствиях принятых решений и ответственности за них.",
						"Группа с самого начала несла в себе этот философский, почти этический посыл — и именно этим отличается от множества других коллективов: они не просто поют, они задают вопросы.",
					]}
				/>
			</div>
		</section>
	);
};

export default Name;
