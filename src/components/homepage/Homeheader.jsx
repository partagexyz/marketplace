import React from "react";
import partimg from "../../assets/img/partagelogo-no-bg.png";
import Image from "next/image";

const Marketplacehead = ({ connect }) => {
  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <br></br>
          <br></br>
          <div className="text-center">
            <Image src={partimg} id="partimg" alt="..." />
          </div>
          <h1>PARTAGE</h1>
          <h2>Shared Utilities on Near</h2>
          <div className="markbut">
            <a className="scrollto" href="#about-boxes" id="provfolbut">
              <span>
                <i
                  className="bi-rocket-takeoff"
                  style={{ marginLeft: "5px" }}
                ></i>
              </span>{" "}
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Marketplacehead;
