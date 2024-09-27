import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { Mail } from "lucide-react";
import ThemeToggler from "../Theming/theme-toggler";
import RotatingTexts from "../RotatingTexts";

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
        <div className="flex justify-between items-center px-5 pt-5">
          <p className="font-bold text-lg">Miquel de Wit.</p>
          <ThemeToggler />
        </div>

        <div className="flex flex-col space-y-10 lg:grid lg:grid-cols-10 lg:space-x-10 px-5 pt-8 pb-14 lg:pt-32 lg:pb-56">
          {/* Image */}
          <div className="w-full h-full col-span-4 flex justify-center items-center">
            <Image
              src="https://via.placeholder.com/460x480.png?text=Placeholder"
              alt="Placeholder Image"
              width={400}
              height={500}
              className="rounded-md object-cover w-[400px] h-[500px] sm:w-[600px] lg:w-[400px]"
              // fill
            />
          </div>

          {/* Landing text  */}
          <div className="flex flex-col space-y-10 col-start-5 col-span-full font-bold ">
            <div className="flex flex-col space-y-3 text-center lg:text-start">
              <p className="text-md lg:text-xl">
                I'm Miquel de Wit, and I enjoy
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-balance !leading-tight tracking-tight">
                Building great looking, functional and{" "}
                <span className="bg-gradient-to-r dark:from-purple-500 dark:via-purple-400 from-blue-600 via-blue-500 dark:to-gray-200  to-blue-400 bg-clip-text text-transparent">
                  interactive
                </span>{" "}
                apps ❤️‍🔥
              </h1>
            </div>

            <div className="flex flex-col text-center lg:text-start space-y-2.5">
              <p className="text-md lg:text-xl -mb-2">I'm passionate about,</p>
              <RotatingTexts rotatingTexts={ROTATINGTEXTS} />
            </div>

            <div className="flex justify-center items-end space-x-4 lg:justify-start h-10">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/miquel-de-wit-95a684209/"
              >
                <FaLinkedin className="h-8 w-8 hover:opacity-85 fill-[#0284c7] dark:fill-[#bae6fd]" />
              </Link>
              <Link target="_blank" href="mailto:miquel.dewit@hotmail.com">
                <Mail className="h-8 w-8 hover:opacity-85 text-[#ea580c] dark:text-[#fdba74]" />
              </Link>
              <Link target="_blank" href="#">
                <BsFillFileEarmarkPersonFill className="h-8 w-8 hover:opacity-85 mb-[2.5px] fill-[#e55374] dark:fill-[#e0929c]" />
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
