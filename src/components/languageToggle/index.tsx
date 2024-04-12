import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

enum Languages {
  EN = "en",
  DE = "de",
}

const LanguageToggle = () => {
  const t = useTranslations("Contact");
  const currentLocale = useLocale();
  return (
    <Link
      className="block absolute top-8 right-8 flex justify-center gap-2 bg-udh_yellow text-udh_dark_green border border-2 border-udh_dark_green px-2 rounded-lg"
      href={`/${currentLocale === "en" ? "de" : "en"}`}
    >
      {currentLocale === "en" ? `${Languages.DE}` : `${Languages.EN}`}
    </Link>
  );
};

export default LanguageToggle;
