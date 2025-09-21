import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SectionClancyStory = () => {
  const t = useTranslations("StoryPage.Clancy");
  return (
    <section className="story-container">
      <h3 className="title">{t("t")}</h3>
      <div className="pt-10 flex flex-col gap-16">
        <StepCard
          quote={t("q1")}
          author={t("a1")}
          albumTitle="Trench"
          image="/img/trench.png"
          alt="Twenty One pilots - Trench style"
          paragraphs={[t("p1-1"), t("p1-2")]}
        >
          <div className="xl:max-w-[300px]">
            <span className="text-mainYellow">{t("d1-1")}</span>
            <p className="text-white mt-1.5 leading-[160%]">
              {t("d1-2")} <a href="dmaorg.info">dmaorg.info</a>
            </p>
          </div>
          <div className="xl:max-w-[300px]">
            <span className="text-mainYellow">{t("d2-1")}</span>
            <p className="text-white mt-1.5 leading-[160%]">
              {t("d2-2")}{" "}
              <Link href="/albums/trench" className="underline text-[#e24444]">
                “Trench”
              </Link>
            </p>
          </div>
        </StepCard>
        <StepCard
          author={t("a1")}
          quote={t("q2")}
          albumTitle="Scaled And Icy"
          image="/img/scaledAndIcy.png"
          alt="Twenty One pilots - Scaled And Icy style"
          paragraphs={[t("p2-1"), t("p2-2")]}
        >
          <div className="xl:max-w-[300px]">
            <span className="text-mainYellow">{t("d3-1")}</span>
            <p className="text-white mt-1.5 leading-[160%]">
              {t("d2-2")}{" "}
              <Link
                href="/albums/scaled-and-icy"
                className="underline text-[#e24444]"
              >
                “Scaled And Icy”
              </Link>
            </p>
          </div>
        </StepCard>
        <StepCard
          quote={t("q3")}
          author={t("a2")}
          albumTitle="Clancy"
          image="/img/clancy.png"
          alt="Twenty One pilots - Clancy style"
          paragraphs={[t("p3-1"), t("p3-2"), t("p3-3"), t("p3-4")]}
        >
          <div className="xl:max-w-[300px]">
            <span className="text-mainYellow">{t("d4-1")}</span>
            <p className="text-white mt-1.5 leading-[160%]">
              {t("d2-2")}{" "}
              <Link href="/albums/clancy" className="underline text-[#e24444]">
                “Clancy”
              </Link>
            </p>
          </div>
        </StepCard>
        <StepCard
          quote={t("q4")}
          author={t("a2")}
          albumTitle="Breach"
          image="/img/breach.jpg"
          alt="Twenty One pilots - Breach style"
          paragraphs={[t("p4-1"), t("p4-2")]}
        >
          <div className="xl:max-w-[300px]">
            <span className="text-mainYellow">{t("d5-1")}</span>
            <p className="text-white mt-1.5 leading-[160%]">
              {t("d2-2")}{" "}
              <Link href="/albums/breach" className="underline text-[#e24444]">
                “Breach”
              </Link>
            </p>
          </div>
        </StepCard>
      </div>
    </section>
  );
};

type StepCardProps = {
  author: string;
  paragraphs: string[];
  albumTitle: string;
  image: string;
  alt: string;
  quote: string;
  children?: React.ReactNode;
};

const StepCard = ({
  albumTitle,
  image,
  alt,
  quote,
  author,
  paragraphs,
  children,
}: StepCardProps) => {
  return (
    <div className="flex flex-col ">
      <p className="bg-mainRed px-2 ml-auto">{albumTitle}</p>
      <div className="w-full h-0.5 bg-mainRed" />
      <div className="grid grid-cols-3 gap-20 py-10 max-lg:grid-cols-2 max-md:gap-5 max-sm:grid-cols-1">
        <div>
          <div className="flex flex-col gap-10">{children}</div>

          <div className="overflow-hidden mt-5 relative lg:hidden">
            <Image
              src={image}
              loading="eager"
              width={500}
              height={500}
              quality={100}
              className="object-cover max-sm:w-[550px] max-sm:h-[250px] mx-auto object-top-left"
              alt={alt}
            />
          </div>
        </div>
        <div className=" max-lg:hidden">
          <Image
            src={image}
            width={500}
            height={500}
            loading="lazy"
            quality={100}
            className="object-cover max-sm:w-[350px] max-sm:h-[350px] mx-auto"
            alt={alt}
          />
        </div>
        <div className="flex flex-col gap-4 text-grayMain max-lg:text-[14px] leading-[160%]">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 border-l-2 border-mainYellow pl-3">
        <p className="text-white leading-[160%] lg:max-w-[700px]">“{quote}”</p>
        <span className="text-grayMain font-extralight">— {author}</span>
      </div>
    </div>
  );
};

export default SectionClancyStory;
