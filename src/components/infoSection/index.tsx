import { useTranslations } from "next-intl";
import { Icon, IconProps } from "../icon";
import { colors } from "@/utils/colors";

const sozialLinks: {
  name: string;
  href: string;
  lucide_id: IconProps["name"];
}[] = [
  {
    name: "Facebook",
    href: "https://de-de.facebook.com/unterderhandtattoo/",
    lucide_id: "facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/unterderhandberlin/",
    lucide_id: "instagram",
  },
];

export const InfoSection = () => {
  const t = useTranslations("Info");
  return (
    <section id="opening" className="w-full max-w-3xl">
      <div className="flex justify-between pb-4">
        <h2 className="font-bold text-udh_yellow">{t("title")}</h2>
      </div>
      <div className="bg-udh_yellow text-udh_dark_green p-4 sm:p-8 w-full">
        <h2 className="font-bold">{t("opening_hours")}</h2>
        <p>{t("opening_times")}</p>
        <p>{t("disclaimer")}</p>
        <h2 className="font-bold mt-4">{t("social")}</h2>
        <ul className="flex gap-6 mt-2">
          {sozialLinks.map(({ name, href, lucide_id }) => (
            <li
              key={name}
              className="bg-udh_dark_green w-10 h-10 rounded-full flex items-center justify-center"
            >
              <a href={href} target="_blanc">
                <Icon name={lucide_id} color={colors["udh_yellow"]} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
