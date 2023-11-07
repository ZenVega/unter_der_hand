import { Marker as MapMarker } from "react-map-gl";
import Pin from "@public/images/pin.png";
import Image from "next/image";

export const UDHMarker = () => {
  return (
    <MapMarker
      offset={[18, -18]}
      latitude={52.48122150248679}
      longitude={13.428900146605864}
    >
      <Image src={Pin} alt="UDH Marker" width={50} height={50} />
    </MapMarker>
  );
};
