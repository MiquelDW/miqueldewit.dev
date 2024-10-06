import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { ChevronDown, Mail } from "lucide-react";
import ThemeToggler from "../Theming/theme-toggler";
import RotatingText from "../Animations/RotatingText";
import { useTranslations } from "next-intl";
import LanguageToggler from "../LanguageToggler";

const ROTATINGTEXTS = [
  "Software Development",
  "Front-end Development",
  "Back-end Development",
  "Full-stack Development",
  "User Experience",
];

const HeroSection = () => {
  const t = useTranslations("HomePage");

  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex items-center justify-between px-5 pt-5 lg:pt-32">
          <p className="font-bold sm:text-lg lg:text-xl">Miquel de Wit.</p>

          <div className="flex gap-x-4">
            <ThemeToggler />
            <LanguageToggler />
          </div>
        </div>

        <div className="flex flex-col space-y-10 px-5 pb-14 pt-8 lg:grid lg:grid-cols-[24rem,1fr] lg:space-x-10 lg:pt-32">
          {/* Image */}
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src="/Selfie_6.jpeg"
              alt="Image Miquel de Wit"
              width={400}
              height={500}
              className="h-[450px] w-[370px] rounded-md object-cover sm:w-[600px] lg:w-[400px]"
              // fill
            />
          </div>

          {/* Landing text  */}
          <div className="flex w-full flex-col space-y-8 font-bold lg:space-y-10">
            <div className="flex flex-col items-center space-y-3 text-center lg:items-start lg:text-start">
              <p className="text-md lg:text-xl">{t("introduce")}</p>

              <h1 className="w-full max-w-[600px] text-3xl !leading-tight tracking-tight md:text-4xl lg:text-5xl">
                {t("landingTextStart")}{" "}
                <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 bg-clip-text text-transparent dark:from-blue-600 dark:via-blue-500 dark:to-gray-300">
                  {t("landingTextFunc")}
                </span>{" "}
                {t("landingTextConj")}{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 bg-clip-text text-transparent dark:from-purple-500 dark:via-purple-400 dark:to-gray-300">
                  {t("landingTextInt")}
                </span>{" "}
                {t("landingTextEnd")}
              </h1>
            </div>

            <div className="flex flex-col space-y-2.5 text-center lg:text-start">
              <p className="text-md -mb-2 lg:text-xl">{t("passionateText")}</p>
              <RotatingText rotatingTexts={ROTATINGTEXTS} />
            </div>

            <div className="flex h-10 items-end justify-center space-x-4 lg:justify-start">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/miquel-de-wit"
              >
                <FaLinkedin className="h-8 w-8 fill-[#0284c7] hover:opacity-85 dark:fill-[#bae6fd]" />
              </Link>
              <Link target="_blank" href="mailto:miquel.dewit@hotmail.com">
                <Mail className="h-8 w-8 text-[#ea580c] hover:opacity-85 dark:text-[#fdba74]" />
              </Link>
              <Link target="_blank" href="/CV_Miquel_de_Wit.pdf">
                <BsFillFileEarmarkPersonFill className="mb-[2.5px] h-8 w-8 fill-[#e55374] hover:opacity-85 dark:fill-[#e0929c]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-[300px] mt-6 hidden w-full items-center justify-center lg:flex">
          <Link href="#about" className="px-6 py-3 font-bold">
            <ChevronDown className="h-8 w-8 animate-bounce" />
          </Link>
          <div className="transition-all hover:scale-[1.1]"></div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
