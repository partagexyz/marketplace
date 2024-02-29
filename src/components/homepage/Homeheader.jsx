import React from "react";
import partimg from "../../assets/img/partagelogo-no-bg.png";
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
          <div className="markbut">
            <a onClick={onClick} id="provfolbut">
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
