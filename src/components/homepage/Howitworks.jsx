import React from "react";
import boxImage1 from "../../assets/img/Partwork1.png";
import boxImage2 from "../../assets/img/Partwork2.png";
import boxImage3 from "../../assets/img/Partwork3.png";
import Image from "next/image";

const Howitworks = () => {
  return (
    <section id="about-boxes" className="about-boxes">
      <div className="container">
        <div className="section-title">
          <p>HOW IT WORKS</p>
          <h2>Find out how to get started</h2>
        </div>

        <div className="row">
          {[
            {
              imgSrc: boxImage1,
              title: "Setup Your Wallet",
              description:
                "Connect your preferred Near wallet by clicking the Connect Wallet button at the top of this page.",
            },
            {
              imgSrc: boxImage2,
              title: "Create Collection",
              description:
                "Browse all available locked Utilities in the Partage Marketplace, and send payment for your desired use time.",
            },
            {
              imgSrc: boxImage3,
              title: "Start Eaning",
              description:
                "Receive a secret password in your email and type it on the Partage lock to access the locked utility you chose.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
            >
              <div className="card">
                <div className="text-center card-img">
                  <Image
                    id="woksimg"
                    src={item.imgSrc}
                    className="card-img-top"
                    alt={`Step ${index + 1}`}
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
