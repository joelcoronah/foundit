"use client";
import { SessionProvider } from "next-auth/react";
import { UserLocationContext } from "../../context/UserContextLocation";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  }>({ lat: 0, lng: 0 });

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
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        {children}
      </UserLocationContext.Provider>
    </SessionProvider>
  );
}
