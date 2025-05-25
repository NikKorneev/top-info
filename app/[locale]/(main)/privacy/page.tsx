import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {
	const t = useTranslations("PrivacyPolicy");

	return (
		<section className="max-w-3xl mx-auto px-4 py-24 text-sm leading-relaxed text-gray-300">
			<h1 className="text-3xl font-bold mb-6 dark:text-white">
				{t("title")}
			</h1>

			<p className="mb-4">
				{t.rich("lastUpdate", {
					strong: (chunks) => <strong>{chunks}</strong>,
				})}
			</p>

			<p className="mb-6">{t("intro")}</p>

			<h2 className="text-xl font-semibold mb-2 mt-8">
				{t.rich("noDataTitle", {
					red: (chunks) => (
						<span className="text-red-500">{chunks}</span>
					),
				})}
			</h2>

			<ul className="list-disc pl-6 mb-6">
				{t.raw("noDataList").map((item: string, index: number) => (
					<li key={index}>{item}</li>
				))}
			</ul>

			<p className="mb-6">{t("noAccount")}</p>

			<h2 className="text-xl font-semibold mb-2 mt-8">
				{t("analyticsTitle")}
			</h2>
			<p className="mb-6">
				{t.rich("analyticsIntro", {
					strong: (chunks) => <strong>{chunks}</strong>,
				})}
			</p>
			<ul className="list-disc pl-6 mb-6">
				{t.raw("analyticsList").map((item: string, index: number) => (
					<li key={index}>{item}</li>
				))}
			</ul>

			<h2 className="text-xl font-semibold mb-2 mt-8">
				{t("contactTitle")}
			</h2>
			<p className="mb-6">
				{t.rich("contactText", {
					strong: (chunks) => <strong>{chunks}</strong>,
					underline: (chunks) => (
						<span className="underline">{chunks}</span>
					),
				})}
			</p>

			<h2 className="text-xl font-semibold mb-2 mt-8">
				{t("externalContentTitle")}
			</h2>
			<p className="mb-6">{t("externalContentText")}</p>

			<h2 className="text-xl font-semibold mb-2 mt-8">
				{t("updatesTitle")}
			</h2>
			<p className="mb-6">{t("updatesText")}</p>

			<h2 className="text-xl font-semibold mb-2 mt-8">
				{t("contactEmailTitle")}
			</h2>
			<p>
				{t("contactEmailText")}{" "}
				<a
					href="mailto:nickkorneevspace@gmail.com"
					className="text-blue-400 hover:underline"
				>
					nickkorneevspace@gmail.com
				</a>
			</p>
		</section>
	);
}
