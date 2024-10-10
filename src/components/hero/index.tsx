"use client"
import Image from "next/image";
import { useTranslations } from "next-intl";
import heroLogoLarge from "@public/images/hero-large.png";
import heroLogoMedium from "@public/images/hero-medium.png";
import heroLogoSmall from "@public/images/hero-small.png";

import { NavButton } from "./navButton";
import { IconProps } from "../icon";
import LanguageToggle from "../languageToggle";
import { useState } from "react";

const navLinks = [
  { label: "Opening Hours", href: "#opening", lucide_id: "radio-tower" },
  { label: "Contact", href: "#contact", lucide_id: "phone" },
  { label: "After Care", href: "#after", lucide_id: "heart-pulse" },
  { label: "Social Media", href: "#gallery", lucide_id: "scan-eye" },
];
export const Hero = () => {
  const [windowheight] = useState(window.innerHeight);
  const t = useTranslations("Hero");
  return (
    <section
      id="hero"
      className="w-full h-screen flex flex-col gap-4 items-center justify-center py-16 px-8"
    >
      <LanguageToggle />
      <div className="relative block flex justify-center flex-4 items-center w-full h-full">
        <Image 
          src={
            windowheight > 877 
            ? heroLogoMedium 
            : heroLogoSmall}
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
