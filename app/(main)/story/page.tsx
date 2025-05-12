import StoryPage from "@/pages/story/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "История группы Twenty One Pilots",
	description: "!To do",
};

const Page = async ({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string }>;
}) => {
	const id = +(await searchParams).id || 1;
	return (
		<main>
			<StoryPage id={id} />
		</main>
	);
};

export default Page;
