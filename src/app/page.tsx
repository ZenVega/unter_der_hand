import { AfterSection } from "@/components/afterSection";
import { ContactSection } from "@/components/contactSection";
import { OpeningSection } from "@/components/openingSection";
import PageWrapper from "@/components/pageWrapper";
import { SocialSection } from "@/components/socialSection";
import { Hero } from "@components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center gap-8 justify-between bg-udh_green px-4 sm:px-16 pb-16">
      <PageWrapper>
        <Hero />
        <OpeningSection />
        <AfterSection />
        <SocialSection />
        <ContactSection />
      </PageWrapper>
    </main>
  );
}
