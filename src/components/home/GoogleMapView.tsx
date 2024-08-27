import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React, { useContext } from "react";
import { UserLocationContext } from "../../../context/UserContextLocation";

interface UserLocation {
  userLocation: {
    lat: number;
    lng: number;
  };
  setUserLocation: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}

function GoogleMapView() {
  const { userLocation, setUserLocation } =
    useContext<UserLocation>(UserLocationContext);

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
          center={userLocation}
          options={{ mapId: process.env.MAP_ID ?? "" }}
          zoom={10}
        />
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
