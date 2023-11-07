import { AfterSection } from "@/components/afterSection";
import { ContactSection } from "@/components/contactSection";
import { OpeningSection } from "@/components/openingSection";
import { SocialSection } from "@/components/socialSection";
import { Hero } from "@components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 justify-between bg-udh_green max-w-5xl px-4 sm:px-16 pb-16">
      <Hero />
      <OpeningSection />
      <AfterSection />
      <SocialSection />
      <ContactSection />
    </main>
  );
}
