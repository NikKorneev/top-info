import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-[#0F0F0F]">
			<div className="container pt-20 mx-auto text-[#FFFFFF] font-martian max-md:px-4 ">
				<nav className="flex gap-[100px] max-lg:flex-wrap max-lg:gap-10 max-sm:flex-wrap-reverse">
					<ul className="flex flex-col gap-[14px] text-3xl max-lg:text-xl">
						<div className="flex flex-col gap-[7px]">
							<li>Участники группы</li>
							<span className="text-[16px] font-light text-white/80 max-md:text-sm">
								Тайлер Джозеф
							</span>
							<span className="text-[16px] font-light text-white/80 max-md:text-sm">
								Джош Дан
							</span>
						</div>
						<li>Альбомы</li>
						<li>История группы</li>
						<li>FAQ</li>
					</ul>
					<ul>
						<div className="flex flex-col gap-[7px] text-[16px]">
							<li className="text-3xl max-lg:text-xl">
								Контакты
							</li>
							<span className="font-light text-white/80 max-md:text-sm">
								Email: nickkorneevspace@gmail.com
							</span>
							<span className="font-light text-white/80 max-md:text-sm">
								Location: Bryansk, Russian Federation
							</span>
						</div>
					</ul>
					<ul className="ml-auto text-right flex flex-col gap-[7px] max-md:text-left max-md:ml-0">
						<li className="text-mainRed uppercase font-extrabold text-6xl">
							TØP
						</li>
						<li>информационный сайт</li>
						<li className="mt-auto text-xs text-gray-100">
							© Nikita Korneev 2025, all rights reserved.
						</li>
					</ul>
				</nav>

				<div className="w-full h-[1px] bg-white/10 my-10" />

				<div className="font-inter">
					<p className="text-sm text-[#73757B]">
						<span>Privacy policy</span> |{" "}
						<span>Terms and conditions</span>
					</p>
					<p className="text-sm text-[#73757B] w-full md:w-2/3 mt-7 mb-10">
						Отказ от ответственности и уведомление о добросовестном
						использовании (Fair Use). Этот сайт является
						некоммерческим фан-проектом, посвящённым творчеству
						Twenty One Pilots. Все товарные знаки, изображения,
						тексты песен и другие материалы принадлежат их законным
						владельцам. Сайт создан исключительно в информационных и
						образовательных целях и не связан с Twenty One Pilots,
						их менеджментом или лейблом. Использование материалов на
						этом сайте соответствует принципу добросовестного
						использования (Fair Use) (17 U.S.C. § 107) для целей
						комментариев, критики и образования. Если вы являетесь
						правообладателем и считаете, что какой-либо контент
						должен быть удалён, пожалуйста, свяжитесь с нами. Данный
						сайт может содержать ссылки на ресурсы, доступ к которым
						может быть ограничен на территории Российской Федерации
					</p>
				</div>
			</div>

			<div className="w-full bg-[url('/img/footer.png')] py-5">
				<div className="container mx-auto font-martian text-white uppercase flex flex-col md:flex-row md:justify-between items-center">
					<p className="w-full md:w-2/3 lg:w-1/4 text-[12px] text-center md:text-sm md:text-left">
						Этот сайт носит исключительно информационный характер и
						не является официальным ресурсом группы Twenty One
						Pilots
					</p>
					<div className="md:mt-0 mt-3">
						<p className="w-full text-[12px] text-center md:text-sm md:text-right">
							официальные ресурсы
						</p>
						<div className="flex gap-5 justify-center mt-1 md:justify-end">
							<a href="https://www.instagram.com/twentyonepilots/">
								<Image
									src="/icons/officialWebsiteLogo.svg"
									width={30}
									height={30}
									alt="twenty one pilots' website logo"
									loading="lazy"
								/>
							</a>
							<a href="https://www.instagram.com/twentyonepilots/">
								<Image
									src="/icons/officialSpotify.svg"
									width={30}
									height={30}
									loading="lazy"
									alt="spotify logo"
								/>
							</a>
							<a href="https://www.instagram.com/twentyonepilots/">
								<Image
									src="/icons/officialX.svg"
									width={30}
									height={30}
									loading="lazy"
									alt="twenty one pilots' X"
								/>
							</a>
							<a href="https://www.instagram.com/twentyonepilots/">
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
