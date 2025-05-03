import { MdOutlineFormatQuote } from "react-icons/md";
const Quote = () => {
	return (
		<div className="font-martian bg-[url('/img/story-quote.png')] bg-right-top bg-no-repeat bg-cover">
			<div className="story-container py-10">
				<MdOutlineFormatQuote size={100} className="text-mainRed" />
				<blockquote className="font-bold text-mainRed text-shadow text-[29px] md:max-w-[600px] leading-[141%] max-md:text-[25px] uppercase">
					Музыка может быть мощным инструментом для исцеления и
					объединения людей.
				</blockquote>
				<span className="text-2xl inline-block mt-7 font-bold text-black bg-mainRed p-1 uppercase">
					Тайлер джозеф
				</span>
			</div>
		</div>
	);
};

export default Quote;
