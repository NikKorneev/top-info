import Marquee from "react-fast-marquee";

type Props = {
	items: { title: string }[];
};

const RunningLine = ({ items }: Props) => {
	return (
		<Marquee
			gradient
			gradientColor="#171717"
			className="w-full py-8 bg-neutral-900 uppercase text-grayMain overflow-hidden whitespace-nowrap z-50 relative text-[20px]"
		>
			{items?.map((item) => (
				<span
					key={item.title}
					className="mx-10 font-bold max-sm:text-[12px]"
				>
					{item.title}
				</span>
			))}
		</Marquee>
	);
};

export default RunningLine;
