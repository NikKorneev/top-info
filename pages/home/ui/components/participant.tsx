import { Button } from "@/components/ui/button";
import Image from "next/image";

const ParticipantSection = () => {
	return (
		<div className="space-y-20 max-md:space-y-16 max-sm:space-y-6 overflow-hidden">
			<Participant
				alt="tyler joseph pictures"
				info="text"
				srcs={[
					"/img/p-tyler-1.png",
					"/img/p-tyler-2.png",
					"/img/p-tyler-3.png",
				]}
				born="Родился 1 декабря 1988"
				descr="Идеолог Twenty One Pilots. Его тексты переплетены с
					глубокими смыслами, а музыка балансирует между разными
					жанрами, создавая уникальный стиль группы. Узнайте больше о
					его творческом пути и влиянии на музыку на нашем сайте."
				instruments="Вокал, Клавишные, гитара"
				name="Тайлер Джозеф"
				signSrc="/icons/tylerSign.png"
			/>
			<Participant
				alt="josh dun pictures"
				info="text2"
				srcs={[
					"/img/p-josh-1.png",
					"/img/p-josh-3.png",
					"/img/p-josh-2.png",
				]}
				position="right"
				born="Родился 18 июня 1988"
				descr="Ударник и энергетический двигатель Twenty One Pilots. Его мощная игра на барабанах и сценическая харизма создают неповторимую атмосферу выступлений группы. Узнайте больше о его роли и вдохновении здесь."
				instruments="барабаны"
				name="Джош Дан"
				signSrc="/icons/joshSign.png"
			/>
		</div>
	);
};

const Participant = ({
	alt,
	srcs,
	position,
	born,
	descr,
	instruments,
	name,
	signSrc,
}: ParticipantProps) => {
	return (
		<div
			className={`container mx-auto gap-10 max-lg:gap-5    flex h-[660px] ${position == "right" ? "flex-row-reverse" : ""} max-md:px-4 max-sm:flex-col`}
		>
			<ParticipantImages srcs={srcs} alt={alt} position={position} />
			<div
				className={`flex gap-2 flex-col font-martian pt-[10%] ${position == "right" ? "items-end" : "items-start"} max-sm:items-center max-sm:*:text-center max-sm:pt-[5%]`}
			>
				<p className="text-[#D5D0C3] font-bold text-[13px] uppercase">
					{instruments}
				</p>
				<h3
					className={`text-[32px] font-bold  ${position == "right" ? "text-mainYellow" : "text-mainRed"} max-md:text-[27px]`}
				>
					{name}
				</h3>
				<p className="text-[#D5D0C3] font-bold">{born}</p>
				<p
					className={`leading-[160%] text-[#c3c3c3d3] max-w-[526px] ${position == "right" ? "text-right" : "text-left"} max-md:text-[14px]`}
				>
					{descr}
				</p>
				<div
					className={`flex justify-between mt-20 w-full items-center max-md:flex-col ${position == "right" ? "flex-row-reverse max-md:items-end" : "max-md:items-baseline"} max-md:items-baseline max-md:gap-2 max-md:mt-10 max-sm:flex-row max-sm:mt-4 max-sm:items-center`}
				>
					<Button
						className={`bg-transparent border-2 py-5 ${position == "right" ? "text-mainYellow border-mainYellow  " : "text-mainRed border-mainRed hover:bg-mainYellow"}`}
					>
						Читать подробнее
					</Button>
					<Image
						src={signSrc}
						width={219}
						height={110}
						alt="tyler sign"
						className="max-md:scale-75"
					/>
				</div>
			</div>
		</div>
	);
};

type ParticipantProps = {
	info: string;
	name: string;
	descr: string;
	signSrc: string;
	born: string;
	instruments: string;
} & ImagesProps;

const ParticipantImages = ({ srcs, alt, position = "left" }: ImagesProps) => {
	return (
		<div className="relative w-full h-full max-w-[800px] overflow-hidden max-xl:max-w-[500px] max-lg:max-w-[400px] max-md:max-w-[40vw] max-sm:flex max-sm:max-w-[200px] max-sm:max-h-[200px] max-sm:mx-auto">
			<div
				className={`absolute w-[620px] h-[420px] z-[5]   rounded-full blur-3xl top-[28%] right-[15%] ${position == "right" ? "bg-mainYellow/80" : "bg-mainRed/80"}  max-xl:size-[350px] max-lg:hidden `}
			/>

			<div
				className={`absolute w-[420px] h-[420px] z-30 top-0 ${position === "right" ? "left-[20%]" : "left-[30%]"} max-xl:size-[350px] max-lg:size-[250px] max-sm:static`}
			>
				<Image
					quality={100}
					src={srcs[0]}
					loading="lazy"
					fill
					alt={alt}
					className="w-full h-full object-cover"
				/>
			</div>
			<div
				className={`absolute w-[420px] h-[420px] z-10 ${position == "right" ? "right-0" : "left-0"}  top-[50%] translate-y-[-50%]  max-xl:size-[350px] max-lg:size-[250px] max-sm:hidden`}
			>
				<Image
					src={srcs[1]}
					fill
					loading="lazy"
					alt={alt}
					className="w-full h-full object-cover"
				/>
			</div>
			<div
				className={`absolute w-[420px] h-[420px] z-20  bottom-0 ${position == "left" ? "right-0" : "left-0"}  max-xl:size-[350px] max-lg:size-[250px]  max-sm:hidden`}
			>
				<Image
					src={srcs[2]}
					fill
					loading="lazy"
					alt={alt}
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
};

type ImagesProps = { srcs: string[]; alt: string; position?: "right" | "left" };

export default ParticipantSection;
