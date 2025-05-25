import { credits } from "@/lib/const";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("MetaCredits");

	return {
		title: t("t"),
		description: t("desc"),
	};
}

export default function CreditsPage() {
	const t = useTranslations("Credits");

	return (
		<main className="max-w-3xl mx-auto px-4 py-20">
			<h1 className="text-3xl font-bold mb-2 text-grayMain">{t("t")}</h1>
			<p className="mb-1 text-grayMain">{t("subt")}</p>
			<p className="text-grayMain mb-8 ">{t("subt2")}</p>
			<ul className="space-y-6">
				{credits.map((credit, index) => (
					<li
						key={index}
						className=" bg-neutral-500 text-white p-4 rounded-lg shadow-sm"
					>
						<p>
							<a
								href={credit.link}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-300 hover:underline"
							>
								{credit.author}
							</a>
						</p>
					</li>
				))}
			</ul>
		</main>
	);
}
