import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://netlify.app'),
  title: "Unter der Hand",
  description: "Tattoo's im Herzen Neuköllns",
  keywords: ['Tattoo', 'Walk Ins', 'Neukölln'],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: 'rose.png',
  },
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link rel="./globals.css" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
