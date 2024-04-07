import { useTranslations, useLocale } from "next-intl";

export const AfterSection = () => {
  const t = useTranslations("After");
  const locale = useLocale();
  console.log("LOCALE", locale);
  return (
    <section id="after" className="w-full max-w-3xl">
      <div className="w-full">
        <div className="flex justify-between pb-4">
          <h2 className="font-bold text-udh_yellow">{t("title")}</h2>
        </div>

        <div className="text-udh_dark_green bg-udh_yellow p-4 sm:p-8">
          <h3 className="font-bold">{t("second_skin.title")}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: t("second_skin.description"),
            }}
          ></p>
          <h3 className="font-bold mt-4">{t("cling_film.title")}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: t("cling_film.description"),
            }}
          ></p>
        </div>
      </div>
    </section>
  );
};
