import { useTranslations } from "next-intl";
import { Icon } from "../icon";

export const ContactSection = () => {
  const t = useTranslations("Contact");
  return (
    <section id="contact" className="w-full max-w-3xl mt-8">
      <div className="bg-udh_yellow text-udh_dark_green p-8">
        <h2 className="font-bold">{t("title")}</h2>
        <p>{t("email")}: udh@something.com</p>
        <p>{t("phone")}: 1234567890</p>
        <a
          href="https://maps.app.goo.gl/H1xAwxwHXcrz7bzH9"
          className="flex gap-2"
          target="_blank"
        >
          google maps <Icon name="map" color="#1c4441" size={20} />
        </a>
      </div>
    </section>
  );
};
