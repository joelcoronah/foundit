"use client";
import { SessionProvider } from "next-auth/react";
import { UserLocationContext } from "../../context/UserContextLocation";
import { useEffect, useState } from "react";
import { SelectedBusinessContext } from "../../context/SelectedBusinessContext";

export function Providers({ children }: { children: React.ReactNode }) {
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  }>({ lat: 0, lng: 0 });

  const [selectedBusiness, setSelectedBusiness] = useState(null);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };
  return (
    <SessionProvider>
      <SelectedBusinessContext.Provider
        value={{ selectedBusiness, setSelectedBusiness }}
      >
        <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
          {children}
        </UserLocationContext.Provider>
      </SelectedBusinessContext.Provider>
    </SessionProvider>
  );
}
