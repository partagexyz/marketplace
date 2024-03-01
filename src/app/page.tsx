import type { Metadata } from "next";
import Homeheader from "@/components/homepage/Homeheader";
import Howitworks from "@/components/homepage/Howitworks";
import Join from "@/components/homepage/Join";
import Nftcollections from "@/components/homepage/Nftcollections";
import Topcreators from "@/components/homepage/Topcreators";

export const metadata: Metadata = {
  title: "Partage",
  description: "p2p sharing network for nomads",
};

export default function Home() {
  return (
    <>
      <Homeheader />
      <Howitworks />
      <Topcreators />
      <Nftcollections />
      <Join />
    </>
  );
}
