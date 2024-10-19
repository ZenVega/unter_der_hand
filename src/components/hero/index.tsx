"use client"
import Image from "next/image";
import { useTranslations } from "next-intl";
import heroLogoMedium from "@public/images/hero-medium.png";
import heroLogoSmall from "@public/images/hero-small.png";
import heroLogoXtraSmall from "@public/images/hero-xtra-small.png";

import { NavButton } from "./navButton";
import { IconProps } from "../icon";
import LanguageToggle from "../languageToggle";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Opening Hours", href: "#opening", lucide_id: "radio-tower" },
  { label: "Contact", href: "#contact", lucide_id: "phone" },
  { label: "Gallery", href: "#gallery", lucide_id: "scan-eye" },
  { label: "After Care", href: "#after", lucide_id: "heart-pulse" },
];
export const Hero = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const t = useTranslations("Hero");

  useEffect(() => {
    const updateHeight = () => {
      if (windowHeight == 0){
        setWindowHeight(window.innerHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [windowHeight]);


  return (
    <section
      id="hero"
      className="w-full flex flex-col gap-4 items-center justify-center py-16 px-8"
      style={windowHeight > 0 ? { "height": `${windowHeight}px` } : { "height": "100vh" }}
    >
      <LanguageToggle />
      <div className="relative block flex justify-center flex-4 items-center w-full h-full">
        <Image 
          src={
            windowHeight > 1200
            ? heroLogoMedium 
            : windowHeight > 820 
            ? heroLogoSmall
            : heroLogoXtraSmall
          }
          alt="logo" 
          width={620} 
          height={877}
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
