export interface UserLocation {
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
