import { useTranslations } from "next-intl";
import { AfterSection } from "@/components/afterSection";
import { ContactSection } from "@/components/contactSection";
import { OpeningSection } from "@/components/openingSection";
import PageWrapper from "@/components/pageWrapper";
import { SocialSection } from "@/components/socialSection";
import { Hero } from "@components/hero";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="flex min-h-screen w-full items-center gap-8 justify-between bg-udh_green px-4 sm:px-16 pb-16">
      <PageWrapper>
        <h1>{t("title")}</h1>
        <Hero />
        <OpeningSection />
        <AfterSection />
        <SocialSection />
        <ContactSection />
      </PageWrapper>
    </main>
  );
}
