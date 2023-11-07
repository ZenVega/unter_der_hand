import Image from "next/image";
import heroLogo from "@public/images/udh_logo_clean.png";
import { IconProps, NavButton } from "./navButton";

const navLinks = [
  { label: "Contact", href: "#contact", lucide_id: "user-plus" },
  { label: "Opening Hours", href: "#opening", lucide_id: "bug" },
  { label: "Social Media", href: "#social", lucide_id: "banana" },
  { label: "After Care", href: "#after", lucide_id: "target" },
];
export const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center py-16 px-8">
      <div className="relative block flex justify-center flex-4 items-center w-full h-full">
        <Image src={heroLogo} alt="logo" fill objectFit="contain" />
      </div>
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
