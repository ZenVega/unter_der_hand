import Image from "next/image";
import { useTranslations } from "next-intl";

import heroLogo from "@public/images/rose.png";
import { NavButton } from "./navButton";
import { Icon, IconProps } from "../icon";
import { colors } from "@/utils/colors";
import useHeroInView from "@/utils/hooks/useHeroInView";
import LanguageToggle from "../languageToggle";

const navLinks = [
  { label: "Opening Hours", href: "#opening", lucide_id: "bug" },
  { label: "After Care", href: "#after", lucide_id: "target" },
  { label: "Social Media", href: "#social", lucide_id: "banana" },
  { label: "Contact", href: "#contact", lucide_id: "phone" },
];
export const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <section
      id="hero"
      className="w-full h-screen flex flex-col gap-4 items-center justify-center py-16 px-8"
    >
      <LanguageToggle />
      <div className="relative block flex justify-center flex-4 items-center w-full h-full">
        <Image src={heroLogo} alt="logo" fill objectFit="contain" />
      </div>
      <p className="font-bold text-lg text-udh_yellow">{t("welcome")}</p>
      <div className="w-full flex-1 flex flex-col items-center justify-center">
        <nav>
          <ul className="flex justify-center gap-6">
            {navLinks.map((link) => (
              <NavButton
                key={link.href}
                label={link.label}
                href={link.href}
                lucide_id={link.lucide_id as IconProps["name"]}
              />
            ))}
          </ul>
        </nav>
      </div>
      <a
        href="#hero"
        className="block fixed bottom-8 z-20 right-8 flex justify-center gap-2 bg-udh_yellow text-udh_dark_green border border-2 border-udh_dark_green px-2 rounded-lg"
      >
        <Icon name="chevron-up" color={colors["udh_dark_green"]} />
      </a>
    </section>
  );
};
