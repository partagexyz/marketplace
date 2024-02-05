import type { Metadata } from "next";
import AOS from "aos";
import Homepage from "@/app/screen/Homepage";
import Details from "@/app/screen/Details";
import Provider from "@/app/screen/Provider";

import Homeheader from "@/components/homepage/Homeheader";
import Howitworks from "@/components/homepage/Howitworks";
import Join from "@/components/homepage/Join";
import Nftcollections from "@/components/homepage/Nftcollections";
import Topcreators from "@/components/homepage/Topcreators";

import Providerdescription from "@/components/provider/Providerdescription";
import Providerhead from "@/components/provider/Providerhead";
import Morenft from "@/components/nftdetails/Morenft";
import Description from "@/components/nftdetails/Description";
import Detailhead from "@/components/nftdetails/Detailhead";
import Nft from "@/components/marketplace/Nft";
import Marketplacehead from "@/components/marketplace/Marketplacehead";




export const metadata: Metadata = {
  title: "Partage Marketplace",
  description: "Welcome to partage Marketplace",
};

export default function Home() {
  const currentPath = window.location.pathname;
  
  // Initialize AOS here
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  return (
    <>
     {currentPath === "/" && (
        <main>
          <Homeheader onClick={undefined} />
          <Howitworks />
          <Topcreators />
          <Nftcollections />
          <Join />
        </main>
      )}
      {currentPath === "/details" && (
        <main>
          <Detailhead onClick={undefined} />
          <Description />
          <Morenft />
        </main>
      )}
      {currentPath === "/provider" && (
        <main>
          <Providerhead onClick={undefined} />
          <Providerdescription />
          <Morenft />
        </main>
      )}
      {currentPath === "/marketplace" && (
        <main>
          <Marketplacehead onClick={undefined} />
          <Nft />
        </main>
      )}
    </>

  );
}
