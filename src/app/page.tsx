"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import CategoryList from "../components/home/CategoryList";
import RangeSelect from "../components/home/RangeSelect";
import SelectRating from "../components/home/SelectRating";
import GoogleMapView from "../components/home/GoogleMapView";
import getGooglePlace from "../shared/globalApi";
import { UserLocationContext } from "../../context/UserContextLocation";
import { UserLocation } from "../shared/interfaces";
import BusinessList from "../components/home/BusinessList";
import SkeltonLoading from "../components/SkeletonLoading";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  const [category, setCategory] = useState<string>(
    process.env.NEXT_PUBLIC_DEFAULT_CATEGORY ?? ""
  );
  const [radius, setRadius] = useState<number>(10);
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { userLocation, setUserLocation } =
    useContext<UserLocation>(UserLocationContext);

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session]);

  useEffect(() => {
    getPlace();
  }, [category, radius]);

  const getPlace = () => {
    setLoading(true);
    getGooglePlace({
      lat: userLocation.lat,
      lng: userLocation.lng,
      radius,
      query: category,
    }).then((res) => {
      setBusinessList(res.data.product.results);
      setLoading(false);
    });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 h-screen">
      <div className="p-3">
        <CategoryList
          onCategoryChange={(value: string) => setCategory(value)}
        />
        <RangeSelect onRadiusChange={(radius: number) => setRadius(radius)} />
        <SelectRating />
      </div>
      <div className="col-span-3 ">
        <GoogleMapView businessList={businessList} />
        <div className="md:absolute w-[90%] md:w-[70%] ml-6 md:ml-10 bottom-36 relative md:bottom-3">
          {loading ? (
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <SkeltonLoading key={i} />
              ))}
            </div>
          ) : (
            <BusinessList
              businessList={businessList}
              userLocation={userLocation}
            />
          )}
        </div>
      </div>
    </div>
  );
}
