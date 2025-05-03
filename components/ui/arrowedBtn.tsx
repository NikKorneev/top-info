import { MouseEventHandler } from "react";
import { Button } from "./button";

type Props = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: string;
	color?: string;
};
const ArrowedBtn = ({ onClick, color, children }: Props) => {
	return (
		<Button
			onClick={onClick}
			className={`border-2 ${color ? "border-[" + color + "]" : "border-mainRed"} bg-transparent py-[22px] hover:bg-mainYellow`}
		>
			<p
				className={`${color ? "text-[" + color + "]" : "text-mainRed"} font-martian uppercase`}
			>
				{children}
			</p>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="17"
				viewBox="0 0 16 17"
				fill="none"
			>
				<path
					d="M14.8954 1.5626C14.8766 1.01063 14.4139 0.578437 13.8619 0.597261L4.86714 0.904012C4.31518 0.922835 3.88298 1.38555 3.90181 1.93751C3.92063 2.48948 4.38334 2.92167 4.93531 2.90285L12.9307 2.63018L13.2033 10.6255C13.2222 11.1775 13.6849 11.6097 14.2368 11.5909C14.7888 11.572 15.221 11.1093 15.2022 10.5574L14.8954 1.5626ZM1.7308 16.0859L14.6268 2.27928L13.1652 0.914085L0.269203 14.7207L1.7308 16.0859Z"
					fill={color ? color : "#cf2f2f"}
				/>
			</svg>
		</Button>
	);
};

export default ArrowedBtn;
