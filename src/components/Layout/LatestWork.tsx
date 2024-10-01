import FadeInUp from "../Animations/FadeInUp";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
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
      "This e-commerce platform features a sleek, modern UI where users can design and customize phone cases with personalized images, creating unique, high-quality products tailored to their style.",
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
      "This Google Clone project is a simple web-based search engine imitation, replicating Google's layout and core features. It displays mock search results and served as a valuable frontend development learning tool!",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Google's Search Engine"],
    websiteHref: "https://google-clone-rosy-two.vercel.app/",
    sourceHref: "https://github.com/MiquelDW/google-clone",
  },
  {
    img: "/project_imgs/Chat-Webapp.png",
    alt: "Chat webapp image",
    title: "Chat webapp",
    description:
      "This chat app lets users send and receive messages with real-time updates across devices. Users can engage in one-on-one or group conversations and also receive notifications to keep users informed of new messages and friend requests.",
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

        <FadeInUp latestWorks={LATEST_WORKS} />
      </MaxWidthWrapper>
    </section>
  );
};

export default LatestWork;
