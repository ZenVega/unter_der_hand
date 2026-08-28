// Central place for site-wide SEO / business data. Reused by metadata,
// sitemap, robots and the JSON-LD structured data.

export const locales = ["en", "de"] as const;
export const defaultLocale = "en";

export const siteConfig = {
  // Canonical production URL (no trailing slash).
  url: "https://unter-der-hand.netlify.app",
  name: "Unter der Hand",
  // Business details used for local SEO / structured data.
  email: "unterderhandberlin@gmail.com",
  phone: "+4930923573 56",
  telephones: ["+493092357356", "+4915224548668"],
  locality: "Berlin",
  region: "Neukölln",
  country: "DE",
  googleMaps: "https://maps.app.goo.gl/H1xAwxwHXcrz7bzH9",
  openingHours: "Mo-Sa 12:00-18:00",
  sameAs: [
    "https://www.instagram.com/unterderhandberlin/",
    "https://de-de.facebook.com/unterderhandtattoo/",
  ],
} as const;
