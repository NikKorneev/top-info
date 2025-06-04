import Markdown from "react-markdown";

const Content = ({ content }: any) => {
	return (
		<div className="max-w-3xl mb-20   bg-[#232324] px-6 py-4   shadow-2xl rounded-xl max-sm:max-w-[100%] mt-10 mx-auto">
			<Markdown
				components={{
					h1: ({ children }) => (
						<>
							<h2 className="uppercase text-mainRed font-bold mb-2 mt-8 text-2xl max-sm:text-2xl font-martian">
								{children}
							</h2>
							<div className="w-full h-[1px] bg-mainRed mb-2"></div>
						</>
					),
					p: ({ children }) => (
						<p className="mb-4 text-grayMain text-[18px] max-md:text-[16px] leading-[150%] font-roboto">
							{children}
						</p>
					),
					img: ({ src, alt, ...props }) => (
						<>
							<img
								src={src}
								className="rounded-xl max-h-[400px] shadow-md mx-auto my-4 max-w-full"
								loading="lazy"
								alt={alt}
								{...props}
							/>
							<span className="text-center block text-grayMain text-[14px]">
								{alt}
							</span>
						</>
					),
				}}
			>
				{content}
			</Markdown>
		</div>
	);
};

export default Content;
