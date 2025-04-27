const Footer = () => {
	return (
		<footer className="bg-[#0F0F0F]">
			<div className="container pt-20 mx-auto text-[#FFFFFF] font-martian">
				<div>
					<nav className="flex gap-[100px]">
						<ul className="flex flex-col gap-[14px] text-3xl">
							<div className="flex flex-col gap-[7px]">
								<li>Участники группы</li>
								<span className="text-[16px]">
									Тайлер Джозеф
								</span>
								<span className="text-[16px]">Джош Дан</span>
							</div>
							<li>Альбомы</li>
							<li>История группы</li>
							<li>FAQ</li>
						</ul>
						<ul>
							<div className="flex flex-col gap-[7px]">
								<li className="text-3xl">Контакты</li>
								<span>Email: nickkorneevspace@gmail.com</span>
								<span>
									Location: Bryansk, Russian Federation
								</span>
							</div>
						</ul>
						<ul className="ml-auto text-right flex flex-col">
							<li className="text-mainRed uppercase font-extrabold text-6xl">
								TØP
							</li>
							<li>информационный сайт</li>
							<li className="mt-auto text-xs text-gray-100">
								© Nikita Korneev 2025, all rights reserved.
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
