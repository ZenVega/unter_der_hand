import type { MetadataRoute } from "next";
import { locales, siteConfig } from "@/utils/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${siteConfig.url}/${l}`]),
      ),
    },
  }));
}
