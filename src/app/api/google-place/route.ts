import { NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const radius = searchParams.get("radius");

  const url = `${BASE_URL}/textsearch/json?query=${query}&key=${GOOGLE_API_KEY}&location=${lat},${lng}&radius=${radius}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return NextResponse.json({ product: data });
}
