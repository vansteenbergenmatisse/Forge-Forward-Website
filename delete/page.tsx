import type { Metadata } from "next";
import Gallery from "./Gallery";

export const metadata: Metadata = {
  title: "Booked page — structural options (internal)",
  description: "Throwaway gallery of 12 ways to structure the /booked confirmation flow.",
  robots: { index: false, follow: false },
};

export default function BookedDesignsPage() {
  return <Gallery />;
}
