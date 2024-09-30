import MaxWidthWrapper from "../MaxWidthWrapper";

const LATEST_WORKS = [
  {
    img: "/project_imgs/NeonCloud.png",
    alt: "NeonCloud image",
    title: "NeonCloud",
    description:
      "NeonCloud is a digital marketplace where users can buy and sell high-quality UI kits and icons. It offers a platform for creators to showcase their work, making it easy to find unique design assets for projects.",
    tools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "Clerk",
      "Prisma",
      "Supabase",
    ],
  },
  {
    img: "/project_imgs/GuardGear.png",
    alt: "GuardGear image",
    title: "GuardGear",
    description:
      "This e-commerce platform offers a clean, modern UI where users can design and customize phone cases with personalized images. Customers can easily create unique cases and purchase high-quality products tailored to their style.",
    tools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "Clerk",
      "Prisma",
      "NeonTech",
    ],
  },
  {
    img: "/project_imgs/Google-Clone.png",
    alt: "Google Clone image",
    title: "Google Clone",
    description:
      "My first project was a Google Clone project which is a web-based search engine imitation, replicating Google's layout and core features. Users can enter search queries to display mock results, it was a great learning tool for frontend development.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Google's Search Engine"],
  },
  {
    img: "/project_imgs/Chat-Webapp.png",
    alt: "Chat webapp image",
    title: "Chat webapp",
    description:
      "This chat app lets users send and receive messages with real-time updates across devices. Users can engage in one-on-one or group conversations and also receive notifications.",
    tools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Clerk",
      "Prisma",
      "Supabase",
      "Socket.IO",
      "Prisma Pulse",
    ],
  },
];

const LatestWork = () => {
  return (
    <section>
      <MaxWidthWrapper className="py-36">
        <div className="flex w-full items-center justify-center space-y-2">
          <div className="flex flex-col space-y-4 rounded-lg border border-black/50 bg-white px-5 py-10 shadow-lg dark:border-white/50 dark:bg-[#18181b] dark:shadow-[#18181b]">
            <h1 className="text-center text-3xl font-bold sm:text-4xl">
              Check out my latest work
            </h1>
            <p className="max-w-prose px-4 text-center text-sm text-muted-foreground dark:text-gray-300 sm:text-base">
              I've worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center space-y-3 lg:grid lg:grid-cols-2 lg:space-x-3">
          {LATEST_WORKS.map((latest, i) => {
            return (
              <div
                key={i}
                className="h-full w-full rounded-lg border-black/50 bg-white px-5 py-3 shadow-lg dark:border-white/50 dark:bg-[#18181b] dark:shadow-[#18181b]"
              >
                <div className="flex w-full flex-col space-y-2">
                  {/* Image */}
                  <div className="h-[200px] w-[90%]">
                    <img
                      src={latest.img}
                      alt={latest.alt}
                      className="h-full w-full ring-2 ring-slate-100"
                    />
                  </div>

                  {/* visual seperator */}
                  <div className="mx-auto w-full border-t border-gray-200" />
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default LatestWork;
