import RotatingText from "../Animations/RotatingText";
import SmoothScroll from "../Animations/SmoothScroll";
import MaxWidthWrapper from "../MaxWidthWrapper";

const ROTATINGTEXTS = ["Stack", "Technologies", "Skills"];

const ICONS_TOP = [
  {
    iconLight: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Next.js</title>
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
      </svg>
    ),
    iconDark: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Next.js</title>
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
      </svg>
    ),
    name: "Next.js",
  },
];

// const ICONS_BOTTOM = [{}];

const AboutSection = () => {
  return (
    <section>
      <div className="bg-white dark:bg-[#18181b] h-full w-full">
        {/* visual seperator */}
        <div className="border-t dark:border-gray-200 border-zinc-700 w-full border-2" />

        <MaxWidthWrapper className="pt-36">
          <div className="w-full flex justify-center items-center mx-auto">
            <RotatingText rotatingTexts={ROTATINGTEXTS} />
          </div>

          <div className="space-y-10 lg:grid lg:grid-cols-2 lg:space-x-10 w-full lg:space-y-0 lg:items-center">
            {/* slide animation */}
            <div className="flex flex-col space-y-3 w-full relative">
              {/* fade effects to make scroll animation look better */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 z-10 w-12 h-full bg-gradient-to-r dark:from-[#18181b] from-[#fff] to-transparent"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 z-10 w-12 h-full bg-gradient-to-l dark:from-[#18181b] from-[#fff] to-transparent"
              />

              <SmoothScroll icons={ICONS_TOP} direction="leftToRight" />
              {/* <SmoothScroll direction="rightToLeft" /> */}
            </div>

            <p className="text-[20px] text-wrap lg:text-left max-w-prose">
              I'm adaptable and enjoy learning new technologies to meet project
              needs. I'm confident in my ability to quickly adapt to new tools
              or frameworks to build great apps. I'm always eager to learn and
              improve!
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default AboutSection;
