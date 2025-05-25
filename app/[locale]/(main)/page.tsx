import HomePage from "@/components/pages/home/ui";

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	return (
		<main className="mb-10">
			<HomePage params={params} />
		</main>
	);
}
