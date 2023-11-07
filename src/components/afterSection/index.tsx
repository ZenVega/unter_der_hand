"use client";
import { useState } from "react";
import Image from "next/image";
import Potato from "@public/images/potato.svg";
import Burger from "@public/images/burger.svg";

enum Languages {
  de = "de",
  en = "en",
}

type Content = Record<
  Languages,
  {
    second_skin: {
      title: string;
      description: string;
    };
    cling_film: {
      title: string;
      description: string;
    };
  }
>;

const content: Content = {
  de: {
    second_skin: {
      title: "Second Skin",
      description:
        "Second Skin ist ein atmungsaktives Pflaster und besonders Benutzerfreundlich. Du brauchst nichts weiter zu tun als das Pflaster 3-4 Tage auf dem Tattoo zu lassen. Du kannst damit sogar unter die Dusche gehen, ohne das es sich löst. (Achtung: zu lange und zu heiß Duschen oder Baden könnte das Pflaster lösen.)<br> Es ist normal das sich Farbe und Wundwasser unter dem Pflaster in Blasen sammeln, keine Panik, die verschwinden von alleine.<br> Am vierten Tag solltest du deine zweite Haut dann abziehen. Das geht oft ziemlich schwer und kann etwas unangenehm sein. <br> Danach müsst ihr nur noch gelegentlich eine Pflege-Creme eurer Wahl auftragen. Hier gilt: weniger ist mehr. Benutzt die Creme nur als Unterstützung gegen die Spannung und das Jucken der Haut. Nach 2-3 Wochen ist alles überstanden. Auf Sport, Sauna oder Schwimmbad solltet ihr mindestens eine Woche verzichten.",
    },
    cling_film: {
      title: "Frischhaltefolie",
      description:
        "Besonders große Tätowierungen können oft nicht mit Second Skin versorgt werden. In diesem Fall wird eure Tätowierung mit Frischhaltefolie abgedeckt. Lasst diese bis zum Abend einfach drauf. Hattet ihr einen Termin am Nachmittag könnt ihr die erste Folie auch direkt über Nacht drauf lassen. Spätestens am nächste Morgen nach eurem Termin müsst ihr die Folie dann wechseln. Packt das Tattoo aus und wascht es gründlich ab, auch Seife darf benutzt werden. Lasst das Tattoo danach am besten noch eine Zeit lang an der Luft. Bevor ihr euch aber wieder anzieht müsst ihr eine neue Lage Frischhaltefolie darüber legen.<br> Diesen Vorgang wiederholt ihr nun morgens und Abends für die nächsten 3-4 Tage. Danach müsst ihr nur noch gelegentlich eine Pflege-Creme eurer Wahl auftragen. Hier gilt: weniger ist mehr. Benutzt die Creme nur als Unterstützung gegen die Spannung und das Jucken der Haut. Nach 2-3 Wochen ist alles überstanden. Auf Sport, Sauna oder Schwimmbad solltet ihr mindestens eine Woche verzichten.",
    },
  },
  en: {
    second_skin: {
      title: "Second Skin",
      description:
        "Second Skin is a breathable patch and especially user-friendly. You do not need to do anything more than leave the patch on the tattoo for 3-4 days. You can even take a shower with it without it coming off. (Attention: too long and too hot shower or bath could loosen the patch).<br> It is normal that color and wound water collect under the patch in bubbles, do not panic, they disappear by themselves.<br> On the fourth day you should pull off your second skin. This is often quite difficult and can be a bit uncomfortable.<br> After that, you only need to occasionally apply a care cream of your choice. The rule here is: less is more. Use the cream only as a support against the tension and itching of the skin. After 2-3 weeks everything is over. You should avoid sports, sauna or swimming pool for at least one week.",
    },
    cling_film: {
      title: "Cling Film",
      description:
        "Especially large tattoos often can not be supplied with Second Skin. In this case, your tattoo is covered with cling film. Leave it on until the evening. If you had an appointment in the afternoon, you can leave the first foil directly on it overnight. At the latest the next morning after your appointment you have to change the foil. Unpack the tattoo and wash it thoroughly, even soap may be used. Then leave the tattoo in the air for a while. Before you get dressed again you have to put a new layer of cling film over it.<bt> Repeat this procedure in the morning and evening for the next 3-4 days. After that, you only need to occasionally apply a care cream of your choice. The rule here is: less is more. Use the cream only as a support against the tension and itching of the skin. After 2-3 weeks everything is over. You should avoid sports, sauna or swimming pool for at least one week.",
    },
  },
};
export const AfterSection = () => {
  const [activeLanguage, setActiveLanguage] = useState(Languages["de"]);
  const switchLanguage = () => {
    activeLanguage === Languages["de"]
      ? setActiveLanguage(Languages["en"])
      : setActiveLanguage(Languages["de"]);
  };
  return (
    <section id="after" className="w-full max-w-3xl">
      <div className="w-full">
        <div className="flex justify-between pb-4">
          <h2 className="font-bold text-udh_yellow">After Care</h2>
          <button
            onClick={switchLanguage}
            className="block relative flex justify-center gap-2 text-udh_yellow border border-2 border-udh_yellow px-2 rounded-lg"
          >
            {activeLanguage === Languages["en"] ? (
              <Image src={Potato} alt="potato" width={24} objectFit="contain" />
            ) : (
              <Image src={Burger} alt="burger" width={24} objectFit="contain" />
            )}
            version
          </button>
        </div>

        <div className="text-udh_dark_green bg-udh_yellow p-4 sm:p-8">
          <h3 className="font-bold">
            {content[activeLanguage]["second_skin"]["title"]}
          </h3>
          <p
            dangerouslySetInnerHTML={{
              __html: content[activeLanguage]["second_skin"]["description"],
            }}
          ></p>
          <h3 className="font-bold mt-4">
            {content[activeLanguage]["cling_film"]["title"]}
          </h3>
          <p
            dangerouslySetInnerHTML={{
              __html: content[activeLanguage]["cling_film"]["description"],
            }}
          ></p>
        </div>
      </div>
    </section>
  );
};
