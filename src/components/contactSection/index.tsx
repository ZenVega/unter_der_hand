import { Icon } from "../icon";
import { MapComponent } from "./map";

export const ContactSection = () => {
  return (
    <section id="contact" className="w-full max-w-3xl">
      <div className="bg-udh_yellow text-udh_dark_green p-8">
        <h2 className="font-bold">Kontakt</h2>
        <p>mail: udh@something.com</p>
        <p>telefon: 1234567890</p>
        <a
          href="https://maps.app.goo.gl/H1xAwxwHXcrz7bzH9"
          className="flex gap-2"
          target="_blank"
        >
          google maps <Icon name="map" color="#1c4441" size={20} />
        </a>
      </div>
      <MapComponent />
    </section>
  );
};
