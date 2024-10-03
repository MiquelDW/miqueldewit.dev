import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="mt-44 bg-white dark:bg-[#18181b]">
      {/* visual seperator between footer and main content */}
      <div className="w-full border-2 border-t border-zinc-700 dark:border-gray-200" />

      <MaxWidthWrapper>
        <div className="flex h-[150px] w-full flex-col items-center justify-center space-y-2">
          {/* links */}
          <div className="flex items-center justify-center space-x-4">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/miquel-de-wit"
            >
              <FaLinkedinIn className="h-7 w-7 fill-[#0284c7] hover:opacity-85 dark:fill-[#bae6fd]" />
            </Link>
            <Link target="_blank" href="mailto:miquel.dewit@hotmail.com">
              <Mail className="h-7 w-7 text-[#ea580c] hover:opacity-85 dark:text-[#fdba74]" />
            </Link>
            <Link target="_blank" href="/CV_Miquel_de_Wit.pdf">
              <BsFillFileEarmarkPersonFill className="mb-[2.5px] h-7 w-7 fill-[#e55374] hover:opacity-85 dark:fill-[#e0929c]" />
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1">
            <p className="text-base font-bold md:text-lg">{t("title")}</p>
            <p className="text-base text-muted-foreground dark:text-gray-300">
              {t("contactMe")}
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
