import ArrowedBtn from "@/components/ui/arrowedBtn";
import Card from "@/components/ui/tiltCard";
import Image from "next/image";

const About = () => {
	return (
		<div className="container mx-auto grid  grid-cols-[1fr_2fr_2fr] gap-4 max-lg:grid-cols-[1fr_2fr] max-lg:pt-20 max-sm:grid-cols-[1fr_2fr] max-sm:px-4">
			<Card>
				<div className="bg-red-500 max-h-[525px] max-lg:max-h-[425px] w-full">
					<Image
						src="/img/about-1.png"
						alt="Next.js Logo"
						width={198}
						height={525}
						quality={100}
						className="w-full h-full object-cover"
					/>
				</div>
			</Card>
			<Card className="max-lg:hidden max-sm:flex">
				<div className="bg-mainYellow max-h-[525px] w-full">
					<Image
						src="/img/about-2.png"
						alt="Next.js Logo"
						width={525}
						height={525}
						quality={100}
						className="w-full h-full object-cover"
					/>
				</div>
			</Card>

			<div className="flex flex-col gap-4 max-sm:col-span-2">
				<div className="flex justify-between font-martian text-white text-sm max-xl:text-[12px]">
					<p className="uppercase">twenty Øne pilØts</p>
					<p>[2009 - настоящее время]</p>
				</div>
				<h2 className="font-extrabold text-5xl text-mainRed uppercase font-martian max-sm:text-4xl">
					о группе
				</h2>
				<div className="flex flex-col gap-4 font-martian font-light leading-[160%] text-[#C5C5C5] mb-auto max-xl:text-sm">
					<p>
						Twenty One Pilots — американская музыкальная группа,
						образованная в 2009 году в Коламбусе, штат Огайо. Состав
						группы - барабанщик Джош Дан и вокалист Тайлер Джозеф,
						который также является автором песен.
					</p>
					<p>
						Их музыка сочетает элементы рока, хип-хопа, попа и
						альтернативы. Группа известна своими эмоциональными
						текстами, которые затрагивают темы психического
						здоровья, борьбы с депрессией и внутренними
						переживаниями.
					</p>
				</div>
				<div>
					<ArrowedBtn>Читать подробнее</ArrowedBtn>
				</div>
			</div>
		</div>
	);
};

export default About;
