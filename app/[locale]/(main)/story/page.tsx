import StoryPage from "@/pages/story/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "История группы Twenty One Pilots",
	description: "!To do",
};

const Page = async ({
	params,
	searchParams,
}: {
	params: Promise<{ locale: "ru" | "en" }>;
	searchParams: Promise<{ [key: string]: string }>;
}) => {
	const locale = (await params).locale || "en";
	const id = +(await searchParams).id || 1;
	return (
		<main>
			<StoryPage id={id} locale={locale} />
		</main>
	);
};

export default Page;
