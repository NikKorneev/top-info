import Markdown from "react-markdown";

const Content = ({ content }: any) => {
	return (
		<div className="max-w-[640px] bg-[#232324] px-6 py-4  shadow-2xl rounded-xl max-sm:max-w-[100%] mt-10 mx-auto">
			<Markdown
				components={{
					h1: ({ children }) => (
						<h2 className="title mb-2">{children}</h2>
					),
					p: ({ children }) => (
						<p className="mb-4 text-grayMain leading-[150%]">
							{children}
						</p>
					),
					img: ({ node, ...props }) => (
						<img
							{...props}
							className="rounded-xl max-h-[400px] shadow-md mx-auto my-4 max-w-full"
							loading="lazy"
							alt={props.alt || ""}
						/>
					),
				}}
			>
				{content}
			</Markdown>
		</div>
	);
};

export default Content;
