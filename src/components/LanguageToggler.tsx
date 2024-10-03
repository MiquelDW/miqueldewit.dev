"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const LanguageToggler = () => {
  const router = useRouter();
  const localActive = useLocale();
  // console.log(localActive);

  // change the language of the app
  const setLanguage = (lang: "en" | "nl") => {
    router.replace(`/${lang}`);
  };

  return (
    <>
      {localActive === "nl" ? (
        <button
          className="flex h-7 w-7 items-center justify-center rounded-lg border border-black/20 bg-white px-6 font-semibold transition-all hover:scale-[1.1] dark:border-white/50 dark:bg-[#18181b] lg:h-8 lg:w-8"
          onClick={() => setLanguage("en")}
        >
          ENG
        </button>
      ) : (
        <button
          className="flex h-7 w-7 items-center justify-center rounded-lg border border-black/20 bg-white px-6 font-semibold transition-all hover:scale-[1.1] dark:border-white/50 dark:bg-[#18181b] lg:h-8 lg:w-8"
          onClick={() => setLanguage("nl")}
        >
          NL
        </button>
      )}
    </>
  );
};

export default LanguageToggler;
