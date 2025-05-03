import Image from "next/image";
import Link from "next/link";

const SectionClancyStory = () => {
	return (
		<section className="story-container">
			<h3 className="title">ИСТОРИЯ КЛЭНСИ</h3>
			<div className="pt-10 flex flex-col gap-16">
				<StepCard
					quote="«Trench — это наше письмо самому себе. Мы создали мир, в котором можно было бы выжить. Иногда, чтобы справиться с собой, нужно придумать другого себя.»"
					albumTitle="Trench"
					image="/img/trench.png"
					alt="Twenty One pilots - Trench style"
					paragraphs={[
						"Trench — это не просто альбом. Это история побега из тоталитарного города, контролируемого девятью епископами. Город называется Dema, и он стал метафорой депрессии, контроля и душевной боли. Главный герой — Клэнси — пытается сбежать. А вместе с ним — и слушатель.",
						"Музыкально альбом стал более зрелым, кинематографичным, тяжёлым. Эстетика Trench была завязана на жёлтом цвете, балаклавах, горных куртках и визуальной кодировке.",
					]}
				>
					<div className="xl:max-w-[300px]">
						<span className="text-mainYellow">
							апрель 2018 года
						</span>
						<p className="text-white mt-1.5 leading-[160%]">
							расшифровка сообщения на{" "}
							<a href="dmaorg.info">dmaorg.info</a>
						</p>
					</div>
					<div className="xl:max-w-[300px]">
						<span className="text-mainYellow">
							октябрь 2018 года
						</span>
						<p className="text-white mt-1.5 leading-[160%]">
							выход альбома{" "}
							<Link
								href="/albums/trench"
								className="underline text-[#e24444]"
							>
								“Trench”
							</Link>
						</p>
					</div>
				</StepCard>
				<StepCard
					quote="«Scaled and Icy — это наш способ спрятаться. Мы поняли, что если не можем победить страх, мы его перекрасим.»"
					albumTitle="Scaled And Icy"
					image="/img/scaledAndIcy.png"
					alt="Twenty One pilots - Scaled And Icy style"
					paragraphs={[
						"Новый альбом вышел цветным, легким, даже почти жизнерадостным — на первый взгляд. Альбом был записан дистанционно, во время пандемии. Тайлер — в подвале своего дома. Джош — на другой стороне страны.",
						"Музыка стала легче: синтезаторы, фанковая ритмика, мелодичность. Но — как и всегда у них — за внешним фасадом скрывается глубокая внутренняя драма. Треки рассказывают о тревоге, неуверенности, попытке казаться “нормальным” в ненормальном мире.",
					]}
				>
					<div className="xl:max-w-[300px]">
						<span className="text-mainYellow">май 2021 года</span>
						<p className="text-white mt-1.5 leading-[160%]">
							выход альбома{" "}
							<Link
								href="/albums/scaled-and-icy"
								className="underline text-[#e24444]"
							>
								“Scaled And Icy”
							</Link>
						</p>
					</div>
				</StepCard>
				<StepCard
					quote="«Clancy — это конец. Но не потому, что история закончилась. А потому, что мы готовы передать её дальше — тебе.»"
					albumTitle="Clancy"
					image="/img/clancy.png"
					alt="Twenty One pilots - Clancy style"
					paragraphs={[
						"Альбом Clancy — это кульминация десятилетнего путешествия группы. Это не просто музыкальный релиз, а заключительная глава нарратива, начатого в Trench и продолженного в Scaled and Icy. Здесь всё сходится: образы, символы, музыкальные идеи и внутренние монологи.",
						"Цитаты, метафоры, отсылки к прошлым альбомам — всё вплетено в поэтику, которую фанаты любят расшифровывать.",
						"Clancy звучит как синтез сырых, живых барабанов, глубокого баса, альтернативного рока, рэпа, и даже индастриала.",
						"Это альбом не о победе, а о способности не сдаться. Это звук человека, который научился смотреть в лицо страху — и не отводить взгляд. Это конец истории. И начало себя.",
					]}
				>
					<div className="xl:max-w-[300px]">
						<span className="text-mainYellow">май 2024 года</span>
						<p className="text-white mt-1.5 leading-[160%]">
							выход альбома{" "}
							<Link
								href="/albums/clancy"
								className="underline text-[#e24444]"
							>
								“Clancy”
							</Link>
						</p>
					</div>
				</StepCard>
			</div>
		</section>
	);
};

type StepCardProps = {
	paragraphs: string[];
	albumTitle: string;
	image: string;
	alt: string;
	quote: string;
	children?: React.ReactNode;
};

const StepCard = ({
	albumTitle,
	image,
	alt,
	quote,
	paragraphs,
	children,
}: StepCardProps) => {
	return (
		<div className="flex flex-col ">
			<p className="bg-mainRed px-2 ml-auto">{albumTitle}</p>
			<div className="w-full h-0.5 bg-mainRed" />
			<div className="grid grid-cols-3 gap-20 py-10 max-lg:grid-cols-2 max-md:gap-5 max-sm:grid-cols-1">
				<div>
					<div className="flex flex-col gap-10">{children}</div>

					<div className="overflow-hidden mt-5 relative lg:hidden">
						<Image
							src={image}
							width={500}
							height={500}
							quality={100}
							loading="lazy"
							className="object-cover max-sm:w-[550px] max-sm:h-[250px] mx-auto object-top-left"
							alt={alt}
						/>
					</div>
				</div>
				<div className=" max-lg:hidden">
					<Image
						src={image}
						width={500}
						height={500}
						loading="lazy"
						quality={100}
						className="object-cover max-sm:w-[350px] max-sm:h-[350px] mx-auto"
						alt={alt}
					/>
				</div>
				<div className="flex flex-col gap-4 text-grayMain max-lg:text-[14px] leading-[160%]">
					{paragraphs.map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}
				</div>
			</div>

			<div className="flex flex-col gap-2 border-l-2 border-mainYellow pl-3">
				<p className="text-white leading-[160%] lg:max-w-[700px]">
					{quote}
				</p>
				<span className="text-grayMain font-extralight">
					— Тайлер Джозеф
				</span>
			</div>
		</div>
	);
};

export default SectionClancyStory;
