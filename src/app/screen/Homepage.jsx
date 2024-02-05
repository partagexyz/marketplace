// components/Home.js
import React from "react";
import Homeheader from "../../components/homepage/Homeheader";
import Howitworks from "../../components/homepage/Howitworks";
import Join from "../../components/homepage/Join";
import Nftcollections from "../../components/homepage/Nftcollections";
import Topcreators from "../../components/homepage/Topcreators";

const Homepage = () => {
  return (
    <>
      <Homeheader />
      <Howitworks />
      <Topcreators />
      <Nftcollections />
      <Join />
    </>
  );
};

export default Homepage;
