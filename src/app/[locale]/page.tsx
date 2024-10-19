import { AfterSection } from "@/components/afterSection";
import { ContactSection } from "@/components/contactSection";
import { InfoSection } from "@/components/infoSection";
import { GallerySection } from "@/components/gallerySection";
import PageWrapper from "@/components/pageWrapper";
import { Hero } from "@components/hero";
import { NextIntlClientProvider } from "next-intl";
import {getMessages} from 'next-intl/server';

export default async function Home() {
  const messages = await getMessages();
  const feedURL = process.env.INSTA_FEED_URL as string
  return (
    <main className="flex min-h-screen w-full items-center gap-8 justify-between bg-udh_green px-4 sm:px-16 pb-16">
      <PageWrapper>
        <NextIntlClientProvider messages={messages}>
          <Hero />
          <InfoSection />
          <ContactSection />
          <GallerySection feedURL={feedURL as string} />
          <AfterSection />
        </NextIntlClientProvider>
      </PageWrapper>
    </main>
  );
}
