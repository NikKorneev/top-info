import NewsCard from "@/pages/news/components/NewsCard";
import { client } from "@/sanity/lib/client";
import { GET_ALL_ARTICLES_BY_LANG } from "@/sanity/query/queries";
import { Article } from "@/types/article";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
	const t = await getTranslations("News");

	return {
		title: t("t") + " - Twenty One Pilots Info",
		description: t("desc"),
		keywords: t("keywords").split(","),
	};
}

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
	const locale = (await params).locale;
	const news = await client.fetch<Article[]>(GET_ALL_ARTICLES_BY_LANG, {
		locale,
	});
	const t = await getTranslations("News");
	return (
		<div className="pt-32 pb-20">
			<h1 className="title mb-10 container mx-auto max-sm:px-4">
				{t("t")}
			</h1>
			{news.length > 0 ? (
				<div className="container mx-auto grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-4 gap-y-8 max-sm:px-4">
					{news.map((article) => (
						<NewsCard
							key={article.slug.current}
							date={article.date}
							title={article.title}
							summary={article.promo}
							image={article.imageUrl}
							slug={article.slug.current}
						/>
					))}
				</div>
			) : (
				<div className="flex justify-center items-center text-grayMain min-h-[200px]">
					<h2>{t("noNews")}</h2>
				</div>
			)}
		</div>
	);
};

export default Page;
