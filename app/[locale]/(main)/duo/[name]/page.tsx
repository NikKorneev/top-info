import AboutPage from "@/pages/duo";

const Page = async ({ params }: { params: Promise<{ name: string }> }) => {
	return <AboutPage params={params} />;
};

export default Page;
