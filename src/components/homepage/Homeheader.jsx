import React from "react";
import partimg from "../../assets/img/partage-log.png";
import Image from "next/image";

const Marketplacehead = ({ onClick }) => {
  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <div className="text-center">
            <Image src={partimg} id="partimg" alt="..." />
          </div>
          <h1>PARTAGE</h1>
          <h2>Shared Utilities on Near</h2>
          <div className="d-flex">
            <a onClick={onClick} className="btn-get-started scrollto">
              <b>Connect Wallet</b>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Marketplacehead;
