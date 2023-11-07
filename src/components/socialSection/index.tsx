import React from "react";
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
export const SocialSection = () => {
  return (
    <section id="social">
      <div>
        <h2 className="font-bold text-udh_yellow">Social Media</h2>
        <ul className="flex justify-center gap-6 mt-4">
          {sozialLinks.map(({ name, href, lucide_id }) => (
            <li
              key={name}
              className="bg-udh_orange w-10 h-10 rounded-full flex items-center justify-center"
            >
              <a href={href} target="_blanc">
                <Icon name={lucide_id} color={colors["udh_dark_green"]} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
