import type { Metadata } from "next";
import Homeheader from "@/components/homepage/Homeheader";
import Howitworks from "@/components/homepage/Howitworks";
import Join from "@/components/homepage/Join";
import Shared from "../components/homepage/Shared";
import Productprev from "../components/homepage/Productprev";
import NftPreview from "../components/homepage/NftPreview"

export const metadata: Metadata = {
  title: "Partage",
  description: "p2p sharing network for nomads",
};

export default function Home() {
  return (
    <>
      <Homeheader />
      <Howitworks />
      <Shared />
      <Productprev />
      <NftPreview />
      <Join />
    </>
  );
}
