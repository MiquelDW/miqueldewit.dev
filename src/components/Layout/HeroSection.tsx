import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { ChevronDown, Mail } from "lucide-react";
import ThemeToggler from "../Theming/theme-toggler";
import RotatingText from "../Animations/RotatingText";

const ROTATINGTEXTS = [
  "Software Development",
  "Front-end Development",
  "Back-end Development",
  "Full-stack Development",
  "User Experience",
];

const HeroSection = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex items-center justify-between px-5 pt-5">
          <p className="font-bold sm:text-lg lg:text-xl">Miquel de Wit.</p>
          <ThemeToggler />
        </div>

        <div className="flex flex-col space-y-10 px-5 pb-14 pt-8 lg:grid lg:grid-cols-10 lg:space-x-10 lg:pt-32">
          {/* Image */}
          <div className="col-span-4 flex h-full w-full items-center justify-center">
            <Image
              src="https://via.placeholder.com/460x480.png?text=Placeholder"
              alt="Placeholder Image"
              width={400}
              height={500}
              className="h-[450px] w-[370px] rounded-md object-cover sm:w-[600px] lg:w-[400px]"
              // fill
            />
          </div>

          {/* Landing text  */}
          <div className="col-span-full col-start-5 flex flex-col space-y-8 font-bold lg:space-y-10">
            <div className="flex flex-col space-y-3 text-center lg:text-start">
              <p className="text-md lg:text-xl">
                I'm Miquel de Wit, and I enjoy
              </p>

              <h1 className="text-balance text-3xl !leading-tight tracking-tight md:text-4xl lg:text-5xl xl:text-6xl">
                Building great looking,{" "}
                <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 bg-clip-text text-transparent dark:from-blue-600 dark:via-blue-500 dark:to-gray-300">
                  functional
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 bg-clip-text text-transparent dark:from-purple-500 dark:via-purple-400 dark:to-gray-300">
                  interactive
                </span>{" "}
                apps ❤️‍🔥
              </h1>
            </div>

            <div className="flex flex-col space-y-2.5 text-center lg:text-start">
              <p className="text-md -mb-2 lg:text-xl">I'm passionate about,</p>
              <RotatingText rotatingTexts={ROTATINGTEXTS} />
            </div>

            <div className="flex h-10 items-end justify-center space-x-4 lg:justify-start">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/miquel-de-wit-95a684209/"
              >
                <FaLinkedin className="h-8 w-8 fill-[#0284c7] hover:opacity-85 dark:fill-[#bae6fd]" />
              </Link>
              <Link target="_blank" href="mailto:miquel.dewit@hotmail.com">
                <Mail className="h-8 w-8 text-[#ea580c] hover:opacity-85 dark:text-[#fdba74]" />
              </Link>
              <Link target="_blank" href="#">
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
