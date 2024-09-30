import { FaGithub } from "react-icons/fa";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";

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
      "UploadThing",
    ],
    websiteHref: "https://neon-cloud.vercel.app",
    sourceHref: "https://github.com/MiquelDW/NeonCloud",
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
      "UploadThing",
      "Prisma",
      "NeonTech",
    ],
    websiteHref: "https://guardgear-shop.vercel.app/",
    sourceHref: "https://github.com/MiquelDW/guardgear_shop",
  },
  {
    img: "/project_imgs/Google-Clone.png",
    alt: "Google Clone image",
    title: "Google Clone",
    description:
      "This Google Clone project is a simple web-based search engine imitation, replicating Google's layout and core features. Users can enter search queries to display mock results, it was a great learning tool for frontend development!",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Google's Search Engine"],
    websiteHref: "https://google-clone-rosy-two.vercel.app/",
    sourceHref: "https://github.com/MiquelDW/google-clone",
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
    learnMore: {
      title: "Server Location and Performance Impact",
      description:
        "The project's custom server is hosted on Railway, with its current location in the USA. This may lead to occasional delays or inconsistencies due to geographic distance. I was unfortunately unable to host it closer to my location, as that would require a paid subscription on their platform.",
    },
    websiteHref: "https://chat-webapp-client.vercel.app/conversations",
    sourceHref: "https://github.com/MiquelDW/chat-webapp",
  },
];

const LatestWork = () => {
  return (
    <section>
      <MaxWidthWrapper className="px-7 pt-52">
        <div className="mb-24 flex w-full items-center justify-center space-y-2">
          <div className="flex flex-col space-y-4 rounded-lg border border-black/50 bg-white px-5 py-10 shadow-lg dark:border-white/50 dark:bg-[#18181b] dark:shadow-[#18181b]">
            <h1 className="text-center text-3xl font-bold sm:text-4xl">
              Check out my latest work
            </h1>
            <p className="max-w-prose px-4 text-center text-base text-muted-foreground dark:text-gray-300">
              I've worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-5 flex p-2 text-base" variant="link">
                  Read me &rarr;
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="sm:text-xl">
                  Personal Commenting Practice
                </DialogTitle>
                <DialogDescription className="text-base sm:text-lg">
                  My code contains detailed comments to help me remember its
                  functionality during project work. In a professional setting,
                  I will follow the workplace's coding and commenting
                  guidelines.
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
          {LATEST_WORKS.map((latest, i) => {
            return (
              <div
                key={i}
                className="h-full w-full rounded-lg border border-black/20 bg-white px-5 pb-6 pt-5 shadow-lg dark:border-white/50 dark:bg-[#18181b] dark:shadow-[#18181b]"
              >
                <div className="flex w-full flex-col items-center">
                  {/* image */}
                  <div className="flex h-[200px] w-full items-center justify-center rounded-lg md:w-[90%]">
                    <img
                      src={latest.img}
                      alt={latest.alt}
                      className="h-full w-full rounded-lg object-cover sm:max-w-[375px]"
                    />
                  </div>

                  {/* visual seperator */}
                  <div className="mx-auto mb-3 mt-5 w-full border-t border-gray-200" />

                  {/* title & description */}
                  <div className="flex flex-col space-y-2 text-balance text-center lg:text-wrap lg:text-start">
                    <h1 className="text-xl font-bold">{latest.title}</h1>
                    <p className="max-w-prose text-sm text-muted-foreground dark:text-gray-300 sm:text-base">
                      {latest.description}
                    </p>
                  </div>

                  {/* technology used & link to website and GitHub */}
                  <div className="mt-16 flex w-full flex-col space-y-2 self-start">
                    <div className="mb-2 flex w-full flex-wrap gap-2">
                      {latest.tools.map((tool, i) => {
                        return (
                          <div
                            key={i}
                            className="rounded-lg bg-gray-200 p-1.5 text-sm font-medium text-black"
                          >
                            {tool}
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex w-full items-start justify-between">
                      <div className="flex w-full flex-wrap space-x-2">
                        <Link
                          target="_blank"
                          href={latest.sourceHref}
                          className="flex items-center justify-start space-x-2 rounded-lg bg-black p-2 text-sm font-medium text-white"
                        >
                          <FaGithub className="h-5 w-5" />
                          <p>Source</p>
                        </Link>

                        <Link
                          target="_blank"
                          href={latest.websiteHref}
                          className="flex items-center justify-start space-x-2 rounded-lg bg-black p-2 text-sm font-medium text-white"
                        >
                          <Globe className="h-5 w-5" />
                          <p>Website</p>
                        </Link>
                      </div>

                      {latest.learnMore && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              className="flex p-2 text-base"
                              variant="link"
                            >
                              Important info &rarr;
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogTitle className="sm:text-xl">
                              {latest.learnMore.title}
                            </DialogTitle>
                            <DialogDescription className="text-base sm:text-lg">
                              {latest.learnMore.description}
                            </DialogDescription>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>
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
