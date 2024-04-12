import { AfterSection } from "@/components/afterSection";
import { ContactSection } from "@/components/contactSection";
import { InfoSection } from "@/components/infoSection";
import PageWrapper from "@/components/pageWrapper";
import { Hero } from "@components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center gap-8 justify-between bg-udh_green px-4 sm:px-16 pb-16">
      <PageWrapper>
        {/* <NextIntlClientProvider> */}
        {/* In case we need translation on a client side component, we can use this */}
        <Hero />
        <InfoSection />
        <AfterSection />
        <ContactSection />
        {/* </NextIntlClientProvider> */}
      </PageWrapper>
    </main>
  );
}
