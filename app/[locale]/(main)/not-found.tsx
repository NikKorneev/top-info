import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
	const t = useTranslations("NotFound");

	return (
		<section className="min-h-screen flex flex-col items-center justify-center text-center px-4 font-martian">
			<h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
			<h2 className="text-2xl font-semibold mb-2 text-white">{t("t")}</h2>
			<p className="text-gray-400 mb-6">{t("desc")}</p>
			<Link
				href="/"
				className="px-6 py-2   border-2 border-mainRed hover:bg-mainYellow transition text-mainRed hover:text-black"
			>
				{t("backHome")}
			</Link>
		</section>
	);
}
