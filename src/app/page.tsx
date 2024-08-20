"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CategoryList from "../components/home/CategoryList";
import RangeSelect from "../components/home/RangeSelect";
import SelectRating from "../components/home/SelectRating";
import GoogleMapView from "../components/home/GoogleMapView";

export default function Home() {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 bg-red-300 h-screen">
      <div className="p-3">
        <CategoryList />
        <RangeSelect />
        <SelectRating />
      </div>
      <div className="bg-blue-300 col-span-3 ">
        <GoogleMapView />
      </div>
    </div>
  );
}
