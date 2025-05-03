import Image from "next/image";
import TextLined from "./textLined";

const Name = () => {
	return (
		<section className="story-container">
			<div className="flex justify-between">
				<p className="title">НАЗВАНИЕ ГРУППЫ</p>
			</div>
			<div className="grid grid-cols-[1fr_2fr] gap-[80px] pt-10  max-lg:gap-10 max-md:gap-x-5 max-md:gap-y-10 max-md:grid-cols-2 max-sm:grid-cols-1  max-sm:gap-x-5">
				<TextLined
					end="-=55%"
					paragraphs={[
						"Название “Twenty One Pilots” придумал фронтмен группы Тайлер Джозеф, вдохновившись пьесой Артура Миллера «Все мои сыновья».  ",
						"В центре сюжета — бизнесмен, который продал бракованные детали для военной авиации во время Второй мировой войны, что привело к гибели 21 пилота.",
						"Эта трагедия глубоко задела Тайлера: в ней он увидел борьбу между моралью и личной выгодой — темой, которая часто звучит и в творчестве группы. ",
						"Название Twenty One Pilots стало для него напоминанием о последствиях принятых решений и ответственности за них.",
						"Группа с самого начала несла в себе этот философский, почти этический посыл — и именно этим отличается от множества других коллективов: они не просто поют, они задают вопросы.",
					]}
				/>
				<div className="grid grid-cols-2 gap-5  max-md:grid-cols-1 max-md:gap-0 max-sm:gap-5">
					<Image
						src={"/img/namin-3.jpg"}
						width={500}
						height={500}
						quality={100}
						className="object-cover max-sm:hidden"
						alt={"Naming"}
					/>
					<Image
						src={"/img/naming-2.png"}
						width={500}
						height={500}
						quality={100}
						className="object-cover object-left"
						alt={"Naming"}
					/>
				</div>
			</div>
		</section>
	);
};

export default Name;
