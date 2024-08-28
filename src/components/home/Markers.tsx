"use client";
import { MarkerF, OverlayView, OverlayViewF } from "@react-google-maps/api";
import React, { useContext } from "react";
import BusinessItem from "./BusinessItem";
import { SelectedBusinessContext } from "../../../context/SelectedBusinessContext";

export const Markers = ({
  business,
  userLocation,
}: {
  business: any;
  userLocation: any;
}) => {
  const {
    selectedBusiness,
    setSelectedBusiness,
  }: { selectedBusiness: any; setSelectedBusiness: any } = useContext(
    SelectedBusinessContext
  );
  return (
    <div>
      <MarkerF
        position={business.geometry.location}
        onClick={() => setSelectedBusiness(business)}
        animation={google.maps.Animation.BOUNCE}
        icon={{
          url: "/marker.png",

          scaledSize: {
            width: 20,
            height: 20,
            equals: () => false,
          },
        }}
      >
        {selectedBusiness &&
          selectedBusiness.reference === business.reference && (
            <OverlayViewF
              position={business.geometry.location}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              getPixelPositionOffset={(width, height) => ({
                x: -width / 2,
                y: -height,
              })}
            >
              <div className="ml-[-90px] mt-[-200px]">
                <BusinessItem
                  business={business}
                  showDirection
                  userLocation={userLocation}
                />
              </div>
            </OverlayViewF>
          )}
      </MarkerF>
    </div>
  );
};
