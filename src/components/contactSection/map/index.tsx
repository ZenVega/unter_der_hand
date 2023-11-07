"use client";
import getMapStyle from "./mapStyle";
import { FC, useMemo } from "react";
import maplibregl from "maplibre-gl";
import Map from "react-map-gl/maplibre";
import { UDHMarker } from "./marker";
import "mapbox-gl/dist/mapbox-gl.css";

export const MapComponent: FC = () => {
  const memoizedMapStyle = useMemo(() => getMapStyle(), []);

  return (
    <Map
      maxBounds={[13.0, 52.3, 13.7, 52.7]}
      initialViewState={{
        longitude: 13.42,
        latitude: 52.48,
        zoom: 8,
      }}
      mapStyle={memoizedMapStyle as any}
      mapLib={maplibregl}
      style={{ width: "100%", height: "70vh" }}
    >
      <UDHMarker />
    </Map>
  );
};
