import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ContactModal from "./contactModal";

const Footer = () => {
	const t = useTranslations("Footer");
	return (
		<footer className="bg-[#0F0F0F]">
			<div className="container pt-20 mx-auto text-[#FFFFFF] font-martian max-md:px-4 ">
				<nav className="flex gap-[100px] max-lg:flex-wrap max-lg:gap-10 max-sm:flex-wrap-reverse">
					<ul className="flex flex-col gap-[14px] text-3xl max-lg:text-xl">
						<div className="flex flex-col gap-[7px]">
							<li>{t("duos.title")}</li>
							<Link
								href="/duo/tyler-joseph"
								className="transition-colors hover:*:text-mainYellow"
							>
								<span className="text-[16px] font-light text-white/80 max-md:text-sm">
									{t("duos.joseph")}
								</span>
							</Link>
							<Link
								href="/duo/josh-dun"
								className="transition-colors hover:*:text-mainYellow"
							>
								<span className="text-[16px] font-light text-white/80 max-md:text-sm">
									{t("duos.josh")}
								</span>
							</Link>
						</div>
						<li>
							<Link
								href="/albums"
								className="transition-colors hover:text-mainYellow"
							>
								{t("albums")}
							</Link>
						</li>
						<li>
							<Link
								href="/story"
								className="transition-colors hover:text-mainYellow"
							>
								{t("story")}
							</Link>
						</li>
					</ul>
					<ul>
						<div className="flex flex-col gap-[7px] text-[16px]">
							<li className="text-3xl max-lg:text-xl">
								{t("contacts")}
							</li>
							<span className="font-light text-white/80 max-md:text-sm">
								Email: nickkorneevspace@gmail.com
							</span>
							<span className="font-light text-white/80 max-md:text-sm">
								Location: Bryansk, Russian Federation
							</span>
							<li className="mt-5">
								<ContactModal />
							</li>
						</div>
					</ul>
					<ul className="ml-auto text-right flex flex-col gap-[7px] max-md:text-left max-md:ml-0">
						<li className="text-mainRed uppercase font-extrabold text-6xl">
							TØP
						</li>
						<li>{t("info")}</li>
						<li className="mt-auto text-xs text-gray-100">
							© Nikita Korneev 2025, all rights reserved.
						</li>
					</ul>
				</nav>

				<div className="w-full h-[1px] bg-white/10 my-10" />

				<div className="font-inter">
					<p className="text-sm text-[#73757B]">
						<Link href="/privacy">{t("privacy")}</Link> |{" "}
						<Link href="/credits">{t("credits")}</Link>
					</p>
					<p className="text-sm text-[#73757B] w-full md:w-2/3 mt-7 mb-10">
						{t("rights")}
					</p>
				</div>
			</div>

			<div className="w-full bg-[url('/img/footer.png')] py-5">
				<div className="container mx-auto font-martian text-white uppercase flex flex-col md:flex-row md:justify-between items-center">
					<p className="w-full md:w-2/3 lg:w-1/4 text-[12px] text-center md:text-sm md:text-left max-sm:max-w-[70%]">
						{t("caption")}
					</p>
					<div className="md:mt-0 mt-3">
						<p className="w-full text-[12px] text-center md:text-sm md:text-right">
							{t("official")}
						</p>
						<div className="flex gap-5 justify-center mt-2 md:justify-end">
							<a
								href="https://www.twentyonepilots.com/"
								target="_blank"
							>
								<Image
									src="/icons/officialWebsiteLogo.svg"
									width={30}
									height={30}
									alt="twenty one pilots' website logo"
									loading="lazy"
								/>
							</a>
							<a
								href="https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx"
								target="_blank"
							>
								<Image
									src="/icons/officialSpotify.svg"
									width={30}
									height={30}
									loading="lazy"
									alt="spotify logo"
								/>
							</a>
							<a
								href="https://x.com/twentyonepilots"
								target="_blank"
							>
								<Image
									src="/icons/officialX.svg"
									width={30}
									height={30}
									loading="lazy"
									alt="twenty one pilots' X"
								/>
							</a>
							<a
								href="https://www.youtube.com/twentyonepilots/videos"
								target="_blank"
							>
								<Image
									src="/icons/officialYT.svg"
									width={30}
									height={30}
									loading="lazy"
									alt="twenty one pilots' YT link"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
