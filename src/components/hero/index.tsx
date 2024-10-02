import Image from "next/image";
import { useTranslations } from "next-intl";
import heroLogoLarge from "@public/images/hero-large.png";
import heroLogoMedium from "@public/images/hero-medium.png";
import heroLogoSmall from "@public/images/hero-small.png";

import { NavButton } from "./navButton";
import { IconProps } from "../icon";
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
        <Image 
          src={heroLogoMedium}
          alt="logo" 
          width={2480} 
          height={3508}
          priority={true}
          style={{ objectFit: "cover", width: "auto", height: "85%" }} ></Image>
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
    </section>
  );
};
