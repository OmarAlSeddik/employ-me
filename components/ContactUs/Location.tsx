"use client";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "0.5rem",
};

const center = {
  lat: 30.042535280945252,
  lng: 31.204026899090866,
};

const Location = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  return isLoaded ? (
    <div className="container flex h-[38rem] items-center justify-center pb-24">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        {/* Child components, such as markers, info windows, etc. */}
        <MarkerF
          position={{ lat: 30.042535280945252, lng: 31.204026899090866 }}
        />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default React.memo(Location);
