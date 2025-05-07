import HeroBanner from "./ui/HeroBanner";

const AboutPage = async ({ params }: { params: Promise<{ name: string }> }) => {
	const name = (await params).name;

	return (
		<main>
			<HeroBanner />
		</main>
	);
};

export default AboutPage;
