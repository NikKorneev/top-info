import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

type Props = {
	tyler: Pick<ParticipantProps, "born" | "descr" | "instruments" | "name">;
	josh: Pick<ParticipantProps, "born" | "descr" | "instruments" | "name">;
	btn: string;
};

const ParticipantSection = ({ josh, tyler, btn }: Props) => {
	return (
		<div className="space-y-20 max-md:space-y-16 max-sm:space-y-6 overflow-hidden">
			<Participant
				href="/duo/tyler-joseph"
				alt="tyler joseph pictures"
				info="text"
				srcs={[
					"/img/p-tyler-1.png",
					"/img/p-tyler-2.png",
					"/img/p-tyler-3.png",
				]}
				{...tyler}
				btn={btn}
				signSrc="/icons/tylerSign.png"
			/>
			<Participant
				href="/duo/josh-dun"
				alt="josh dun pictures"
				info="text2"
				btn={btn}
				srcs={[
					"/img/p-josh-1.png",
					"/img/p-josh-3.png",
					"/img/p-josh-2.png",
				]}
				position="right"
				{...josh}
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
	href,
	btn,
}: ParticipantProps) => {
	return (
		<div
			className={`container mx-auto gap-10 max-lg:gap-5    flex h-[660px] ${position == "right" ? "flex-row-reverse" : ""} max-md:px-4 max-sm:flex-col`}
		>
			<ParticipantImages srcs={srcs} alt={alt} position={position} />
			<div
				className={`flex gap-2 flex-col  pt-[10%] ${position == "right" ? "items-end" : "items-start"} max-sm:items-center max-sm:*:text-center max-sm:pt-[5%]`}
			>
				<p className="text-[#D5D0C3] font-bold text-[13px] uppercase font-martian">
					{instruments}
				</p>
				<h3
					className={`text-[32px] font-bold  font-martian ${position == "right" ? "text-mainYellow" : "text-mainRed"} max-md:text-[27px]`}
				>
					{name}
				</h3>
				<p className="text-[#D5D0C3] font-bold font-martian">{born}</p>
				<p
					className={`leading-[150%] font-roboto text-[19px] text-[#c3c3c3d3] max-w-[526px] ${position == "right" ? "text-right" : "text-left"} max-md:text-[16px]`}
				>
					{descr}
				</p>
				<div
					className={`flex justify-between mt-20 w-full items-center max-md:flex-col ${position == "right" ? "flex-row-reverse max-md:items-end" : "max-md:items-baseline"} max-md:items-baseline max-md:gap-2 max-md:mt-10  max-sm:flex-row max-sm:mt-4 max-sm:items-center`}
				>
					<Link href={href}>
						<Button
							className={`bg-transparent font-martian border-2 py-6 ${position == "right" ? "text-mainYellow border-mainYellow" : "text-mainRed border-mainRed hover:bg-mainYellow"}`}
						>
							{btn}{" "}
							<div>
								<svg
									width="16"
									height="17"
									viewBox="0 0 16 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M14.8954 1.5626C14.8766 1.01063 14.4139 0.578437 13.8619 0.597261L4.86714 0.904012C4.31518 0.922835 3.88298 1.38555 3.90181 1.93751C3.92063 2.48948 4.38334 2.92167 4.93531 2.90285L12.9307 2.63018L13.2033 10.6255C13.2222 11.1775 13.6849 11.6097 14.2368 11.5909C14.7888 11.572 15.221 11.1093 15.2022 10.5574L14.8954 1.5626ZM1.7308 16.0859L14.6268 2.27928L13.1652 0.914085L0.269203 14.7207L1.7308 16.0859Z"
										fill={
											position == "right"
												? "#ffd800"
												: "#db2422"
										}
									/>
								</svg>
							</div>
						</Button>
					</Link>
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
	href: string;
	btn: string;
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
					loading="eager"
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
					loading="eager"
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
					loading="eager"
					alt={alt}
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
};

type ImagesProps = { srcs: string[]; alt: string; position?: "right" | "left" };

export default ParticipantSection;
