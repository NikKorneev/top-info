import ArrowedBtn from "@/components/ui/arrowedBtn";
import Image from "next/image";
import TextLined from "./textLined";

const DuoCreation = () => {
	return (
		<section className="container mx-auto pt-30 max-sm:px-4 font-martian">
			<div className="flex justify-between max-sm:flex-col max-sm:gap-2">
				<h4 className="title">ФОРМИРОВАНИЕ ДУЭТА</h4>
				<p className="text-grayMain text-2xl max-sm:text-[16px]">
					[2011 год]
				</p>
			</div>
			<div className="grid grid-cols-3 gap-20 py-10 max-lg:grid-cols-2 max-md:gap-5 max-sm:grid-cols-1">
				<div>
					<p className="text-gray-50 text-2xl mb-5">Джош Дан</p>
					<ArrowedBtn>Подробнее</ArrowedBtn>
					<div className="overflow-hidden mt-5 lg:hidden">
						<Image
							src="/img/story-josh.png"
							width={500}
							height={500}
							quality={100}
							className="object-cover max-sm:w-[550px] max-sm:h-[250px] mx-auto object-top-left"
							alt="Josh Dun"
						/>
					</div>
				</div>
				<div className="overflow-hidden max-lg:hidden">
					<Image
						src="/img/story-josh.png"
						width={500}
						height={500}
						quality={100}
						className="object-cover max-sm:w-[350px] max-sm:h-[350px] mx-auto"
						alt="Josh Dun"
					/>
				</div>
				<TextLined
					end="-=115%"
					paragraphs={[
						"Салих и Томас покинули группу в 2011 году, чтобы сосредоточиться на работе и учебе. Оба написали прощальные записки на официальной странице группы в Facebook.",
						"Перед тем как покинуть проект, Салих пригласил друга, Джоша Дана (бывшего гастролирующего барабанщика House of Heroes) занять его место в группе.",
						"Впечатленный потенциалом группы и творческим видением Джозефа, Дан присоединился к проекту.",
					]}
				/>
			</div>
		</section>
	);
};

export default DuoCreation;
