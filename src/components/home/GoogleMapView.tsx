import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

function GoogleMapView() {
  const mapContainerStyle = {
    width: "100%",
    height: "70vh",
  };

  const coordinates = {
    lat: 10.212236,
    lng: -68.008383,
  };

  return (
    <div>
      <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
        language="en"
        region="EN"
        version="weekly"
        mapIds={[process.env.MAP_ID ?? ""]}
      >
        <GoogleMap
          id="marker-example"
          mapContainerStyle={mapContainerStyle}
          center={coordinates}
          options={{ mapId: process.env.MAP_ID ?? "" }}
          zoom={10}
        />
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
