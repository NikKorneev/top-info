import AboutPage from "@/pages/duo";

const Page = async ({
	params,
}: {
	params: Promise<{ name: string; locale: string }>;
}) => {
	return <AboutPage params={params} />;
};

export default Page;
