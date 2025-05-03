import ArrowedBtn from "@/components/ui/arrowedBtn";
import Image from "next/image";

const SectionContract = () => {
	return (
		<section className="story-container relative">
			<div className="flex justify-between max-sm:flex-col max-sm:gap-2.5">
				<h3 className="title">КОНТРАКТ С ЛЕЙБЛОМ И СТУДИЙНЫЙ АЛЬБОМ</h3>
				<p className="story-subtitle">[2011-2013]</p>
			</div>
			<div className="grid grid-cols-3 gap-7 pt-10 max-md:grid-cols-2 max-sm:grid-cols-1">
				<div className="flex flex-col gap-10 xl:max-w-[400px]">
					<div>
						<span className="text-mainYellow">
							апрель 2012 года
						</span>
						<p className="text-white mt-1.5 max-sm:text-[14px]">
							подписание контракта с лейблом “Fueled By Ramen”
						</p>
					</div>
					<div>
						<span className="text-mainYellow ">
							январь 2013 года
						</span>
						<p className="text-white mt-1.5 ">
							Выход альбома “Vessel”
						</p>
					</div>
					<div className="mt-auto max-sm:mt-0 max-sm:mb-2">
						<ArrowedBtn className="overflow-visible bg-back">
							Посмотреть альбом
						</ArrowedBtn>
					</div>
				</div>
				<div className="flex flex-col gap-4 text-grayMain max-lg:text-[14px] leading-[160%] ">
					<p>
						К концу 2011 года дуэт уже невозможно было игнорировать.
						Независимая группа из Огайо, собирающая залы без помощи
						лейблов? Это казалось невозможным — и стало сигналом для
						музыкальной индустрии.
					</p>
					<p>
						Они подписали контракт с Fueled By Ramen, лейблом,
						который в своё время открыл миру Fall Out Boy и Panic!
						at the Disco. Это стало отправной точкой: началась
						работа над первым студийным альбомом с полноценной
						продюсерской поддержкой.
					</p>
				</div>
				<Image
					src="/img/storyLabelContract.png"
					width={500}
					height={300}
					className="object-cover h-[300px] max-sm:w-[550px] max-sm:h-[250px] sm:hidden md:block mx-auto object-top-left"
					alt="Josh and Tyler picture"
				/>
				<Image
					src="/img/vesselCover.png"
					width={500}
					height={500}
					className="object-cover col-start-2  max-sm:w-[550px] max-md:col-start-2 max-sm:h-[250px] max-sm:mx-auto object-top-left max-sm:col-auto max-sm:row-start-5"
					alt="Twenty one pilots' vessel album cover"
				/>
				<div className="flex flex-col gap-4 text-grayMain max-lg:text-[14px] leading-[160%] sm:col-start-1 md:col-auto sm:row-start-2 md:row-auto">
					<p>
						Так появился альбом “Vessel”. Он вышел 8 января 2013
						года и стал мостом между сырой эмоцией раннего периода и
						продуманным, маниакально точным звучанием, которое
						сделало группу глобальной. В альбом вошли обновлённые
						версии песен из Regional at Best — в том числе “Ode to
						Sleep”, “Guns for Hands” и “Car Radio”.
					</p>
					<p>
						Обложка Vessel — две старые фигуры на сером фоне. Это
						деды Тайлера и Джоша. Символ преемственности, жизни,
						возраста, борьбы — тем, которые всегда будут проходить
						сквозь их музыку.
					</p>
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
