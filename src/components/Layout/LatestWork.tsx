import { useTranslations } from "next-intl";
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

const LatestWork = () => {
  const t = useTranslations("LatestWorkPage");

  const LATEST_WORKS = [
    {
      img: "/project_imgs/GuardGear.png",
      alt: "GuardGear image",
      title: "GuardGear",
      description: t("GuardGear"),
      tools: [
        "Next.js",
        "React",
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
      img: "/project_imgs/NeonCloud.png",
      alt: "NeonCloud image",
      title: "NeonCloud",
      description: t("NeonCloud"),
      tools: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Stripe",
        "Clerk",
        "Prisma",
        "Supabase",
        "UploadThing",
      ],
      learnMore: {
        title: t("importantTitleNeon"),
        description: t("importantDescriptionNeon"),
      },
      websiteHref: "https://neon-cloud.vercel.app",
      sourceHref: "https://github.com/MiquelDW/NeonCloud",
    },
    {
      img: "/project_imgs/Google-Clone.png",
      alt: "Google Clone image",
      title: "Google Clone",
      description: t("Google"),
      tools: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Google's Search Engine",
      ],
      websiteHref: "https://google-clone-rosy-two.vercel.app/",
      sourceHref: "https://github.com/MiquelDW/google-clone",
    },
    {
      img: "/project_imgs/Chat-Webapp.png",
      alt: "Chat webapp image",
      title: "Chat webapp",
      description: t("ChatWebapp"),
      tools: [
        "Next.js",
        "React",
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
        title: t("importantTitleChat"),
        description: t("importantDescriptionChat"),
      },
      // websiteHref: "https://chat-webapp-client.vercel.app/conversations",
      sourceHref: "https://github.com/MiquelDW/chat-webapp",
    },
  ];

  return (
    <section>
      <MaxWidthWrapper className="px-7 pt-52">
        <div className="mb-24 flex w-full items-center justify-center space-y-2">
          <div className="flex flex-col space-y-4 rounded-lg border border-black/50 bg-white px-5 py-10 shadow-lg dark:border-white/50 dark:bg-[#18181b] dark:shadow-[#18181b]">
            <h1 className="text-center text-3xl font-bold sm:text-4xl">
              {t("title")}
            </h1>
            <p className="max-w-prose px-4 text-center text-base text-muted-foreground dark:text-gray-300">
              {t("description")}
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-5 flex p-2 text-base" variant="link">
                  {t("readMe")} &rarr;
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="sm:text-xl">
                  {t("readMeTitle")}
                </DialogTitle>
                <DialogDescription className="text-base sm:text-lg">
                  {t("readMeDescription")}
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <FadeInUp latestWorks={LATEST_WORKS} />

        <div className="mt-8 flex w-full items-center justify-center space-y-2">
          <div className="flex flex-col rounded-lg border border-black/50 bg-white px-5 py-3 shadow-lg dark:border-white/50 dark:bg-[#18181b] dark:shadow-[#18181b]">
            <div className="flex flex-col space-y-1">
              <p className="text-center text-xl font-bold">Admin login</p>
              <p className="max-w-prose px-4 text-center text-sm text-muted-foreground dark:text-gray-300">
                NeonCloud & GuardGear
              </p>
            </div>

            <div className="my-2 w-full border-t border-zinc-700 dark:border-gray-200" />

            <div className="flex flex-col space-y-1">
              <p className="max-w-prose px-4 text-center text-base text-muted-foreground dark:text-gray-300">
                miquel.dewit@hotmail.com
              </p>
              <p className="max-w-prose px-4 text-center text-base text-muted-foreground dark:text-gray-300">
                AdminDashboard
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default LatestWork;
