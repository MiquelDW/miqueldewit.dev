import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex justify-between px-10 pt-5">
          <p>Miquel de Wit.</p>
          <p>*Change Theme*</p>
        </div>

        <div className="flex flex-col space-y-3 md:grid md:grid-cols-2 md:space-x-3 px-10 pt-8 md:pt-14">
          {/* image */}
          <div>
            <Image
              src="https://via.placeholder.com/400x400.png?text=Placeholder"
              alt="Placeholder Image"
              width={400}
              height={400}
              // fill
            />
          </div>

          {/* landing text  */}
          <div className="flex flex-col space-y-4 col-start-2">
            <p>I'm Miquel de Wit, and I enjoy</p>
            <h1>
              Building great looking, functional and{" "}
              <span className="">interactive</span> apps ❤️‍🔥
            </h1>
            <p>Software developer</p>

            <div className="flex justify-center items-end space-x-1">
              <Link href="#">
                <FaLinkedin className="h-6 w-6" />
              </Link>
              <Link href="#">
                <Mail className="h-6 w-6" />
              </Link>
              <Link href="#">
                <BsFillFileEarmarkPersonFill className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
