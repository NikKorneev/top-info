import Image from "next/image";

const ParticipantSection = () => {
	return (
		<div>
			<Participant
				alt="tyler joseph pictures"
				info="text"
				srcs={[
					"/img/p-tyler-1.png",
					"/img/p-tyler-2.png",
					"/img/p-tyler-3.png",
				]}
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
			/>
		</div>
	);
};

const Participant = ({ alt, info, srcs, position }: ParticipantProps) => {
	return (
		<div
			className={`container mx-auto flex h-[660px] ${position == "right" ? "flex-row-reverse" : ""}`}
		>
			<ParticipantImages srcs={srcs} alt={alt} position={position} />
			<div>{info}</div>
		</div>
	);
};

type ParticipantProps = {
	info: string;
} & ImagesProps;

const ParticipantImages = ({ srcs, alt, position = "left" }: ImagesProps) => {
	return (
		<div className="relative w-full h-full max-w-[800px] overflow-hidden">
			<div
				className={`absolute w-[620px] h-[420px] z-[5]   rounded-full blur-3xl top-[28%] right-[15%] ${position == "right" ? "bg-mainYellow/80" : "bg-mainRed/80"}`}
			/>

			<div
				className={`absolute w-[420px] h-[420px] z-30 top-0 ${position === "right" ? "left-[20%]" : "left-[30%]"}`}
			>
				<Image
					src={srcs[0]}
					fill
					alt={alt}
					className="w-full h-full object-cover"
				/>
			</div>
			<div
				className={`absolute w-[420px] h-[420px] z-10 ${position == "right" ? "right-0" : "left-0"}  top-[50%] translate-y-[-50%]`}
			>
				<Image
					src={srcs[1]}
					fill
					alt={alt}
					className="w-full h-full object-cover"
				/>
			</div>
			<div
				className={`absolute w-[420px] h-[420px] z-20  bottom-0 ${position == "left" ? "right-0" : "left-0"}`}
			>
				<Image
					src={srcs[2]}
					fill
					alt={alt}
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
};

type ImagesProps = { srcs: string[]; alt: string; position?: "right" | "left" };

export default ParticipantSection;
