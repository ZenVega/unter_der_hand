import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/utils/siteConfig";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Meta" });
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: t("keywords")
      .split(",")
      .map((k) => k.trim()),
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        de: "/de",
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: `${siteConfig.url}/${locale}`,
      locale: locale === "de" ? "de_DE" : "en_US",
      images: [{ url: "/og.png", width: 512, height: 512, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

function StructuredData({ locale }: { locale: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}`,
    image: `${siteConfig.url}/og.png`,
    email: siteConfig.email,
    telephone: siteConfig.telephones[0],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    hasMap: siteConfig.googleMaps,
    openingHours: siteConfig.openingHours,
    sameAs: siteConfig.sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <StructuredData locale={locale} />
        {children}
      </body>
    </html>
  );
}
