import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface NewsCardProps {
	title: string;
	summary: string;
	image: string;
	date: Date;
	slug: string;
}

export default function NewsCard({
	title,
	summary,
	image,
	date,
	slug,
}: NewsCardProps) {
	const t = useTranslations("News");
	return (
		<div className="bg-neutral-900 rounded-xs overflow-hidden shadow-md transition hover:shadow-xl break-inside-avoid font-martian">
			<Link href={`/updates/${slug}`} className="block group">
				<div className="aspect-video overflow-hidden relative">
					<Image
						src={image}
						quality={50}
						fill
						alt={title}
						className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
					/>
				</div>
				<div className="p-4">
					<time className="text-xs text-gray-400">
						{new Date(date).toLocaleDateString(t("locale"), {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</time>
					<h3 className="text-lg font-semibold text-white mt-2 group-hover:underline">
						{title}
					</h3>
					<p className="text-sm text-gray-300 mt-1 line-clamp-3">
						{summary}
					</p>
				</div>
			</Link>
		</div>
	);
}
