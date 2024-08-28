import axios from "axios";

const getGooglePlace = (params: {
  lat: number;
  lng: number;
  radius: number;
  query: string;
}) =>
  axios.get(
    `/api/google-place?lat=${params.lat}&lng=${params.lng}&radius=${params.radius}&query=${params.query}`
  );

export default getGooglePlace;
