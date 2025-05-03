import FirstMembersCards from "./firstMembersCards";
import TextLined from "./textLined";

const FirstMembers = () => {
	return (
		<section className="story-container">
			<div className="flex justify-between">
				<h2 className="title">КОНЦЕРТЫ В ПОДВАЛАХ</h2>
				<p className="text-grayMain text-2xl">[2009-2011]</p>
			</div>
			<div className="grid grid-cols-3 gap-20 pt-10 max-md:grid-cols-2 max-md:gap-5 max-sm:grid-cols-1">
				<TextLined
					end="-=100%"
					paragraphs={[
						"Всё началось в городе Колумбус, штат Огайо в 2009",
						"Тайлер Джозеф, вокалист и мультиинструменталист, собрал первую версию группы вместе с друзьями.",
						"Тогда никто из них не знал, что эта группа переживёт состав и станет мировым явлением.",
					]}
				/>
				<div className="flex flex-col col-span-2 pt-10 max-sm:text-center max-sm:items-center">
					<p className="text-grayMain text-2xl ">ПЕРВИЧНЫЙ СОСТАВ</p>
					<FirstMembersCards />
				</div>
			</div>
		</section>
	);
};

export default FirstMembers;
