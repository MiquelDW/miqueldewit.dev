import MaxWidthWrapper from "../MaxWidthWrapper";

const ROTATINGTEXTS = ["Stack", "Technologies", "Skills"];

const ICONS_TOP = [
  {
    icon: () => {
      return (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="white"
          stroke="white"
        >
          <title>Express</title>
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
        </svg>
      );
    },
  },
  {
    icon: () => {
      return (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="white"
          stroke="white"
        >
          <title>Prisma</title>
          <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z" />
        </svg>
      );
    },
  },
];

const AboutSection = () => {
  return (
    <section>
      <div className="bg-white dark:bg-[#18181b] h-full w-full">
        {/* visual seperator */}
        <div className="border-t dark:border-gray-200 border-zinc-700 w-full border-2" />

        <MaxWidthWrapper className="mt-10">
          <div className="grid grid-cols-2 space-x-2">
            {/* slide animation */}
            <div className="flex space-x-2">
              {ICONS_TOP.map((icon, i) => (
                <div key={i}>
                  <icon.icon />
                </div>
              ))}
            </div>

            <div>
              <p>
                I'm flexible to learn new technologies that fit the needs of the
                project at hand. I've worked with a range of programming
                languages and genuinely enjoy learning new things. I'm confident
                that I can quickly adapt to new tools or frameworks as needed
                for building great apps, and I'm always open to learning and
                improving along the way.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default AboutSection;
