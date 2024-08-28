import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useContext } from "react";
import { UserLocationContext } from "../../../context/UserContextLocation";
import { UserLocation } from "../../shared/interfaces";
import { Markers } from "./Markers";

function GoogleMapView({ businessList }: any) {
  const { userLocation, setUserLocation } =
    useContext<UserLocation>(UserLocationContext);

  const mapContainerStyle = {
    width: "100%",
    height: "70vh",
  };

  return (
    <div>
      <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? ""}
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
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: "/user-location.png",
              scaledSize: {
                width: 40,
                height: 40,
                equals: () => false,
              },
            }}
          ></MarkerF>
          {businessList.map(
            (business: any, index: number) =>
              index <= 7 && (
                <Markers
                  business={business}
                  key={business.id}
                  userLocation={userLocation}
                />
              )
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
