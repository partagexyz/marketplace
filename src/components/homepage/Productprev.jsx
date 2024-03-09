import React from "react";
import partwork1 from "../../assets/img/partwork1.png";
import boxImage2 from "../../assets/img/partwork2.png";
import boxImage3 from "../../assets/img/partwork3.png";
import Image from "next/image";

const Productprev = () => {
  return (
    <section id="about-boxes" className="about-boxes">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div style={{ paddingTop: "5%" }} className="">
              <div className="card-body">
                <div className="text-left">
                  <h1
                    style={{
                      color: "white",
                      paddingTop: "60px",
                      fontWeight: "bolder",
                    }}
                  >
                    Partage Lock
                  </h1>
                </div>
                <p className="card-text">
                  Partage flagship innovation, the Partage Lock, is a versatile
                  hardware device that can be affixed to any object, granting
                  secure access via our blockchain-powered platform.
                </p>
                <div
                  style={{ marginRight: "20%", paddingTop: "20px" }}
                  className="markbut"
                >
                  <a
                    className="scrollto"
                    href="https://shop.hellopartage.xyz/products/keyless-partage-lock"
                    id="provfolbut"
                  >
                    Visit Shop
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="card" style={{ borderRadius: "30%" }}>
              <Image
                src={partwork1}
                style={{ height: "100%", width: "100%", borderRadius: "30%" }}
                className="card-img-top"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="">
              <div className="card-body">
                <div className="text-left">
                  <h1
                    style={{
                      color: "white",
                      paddingTop: "10px",
                      fontWeight: "bolder",
                    }}
                  >
                    Key Features:
                  </h1>
                </div>
                <div>
                  <ul style={{ color: "whitesmoke" }}>
                    <li>
                      3-in-1 Keyless: fingerprint, smartphone app and x2 backup
                      keys.
                    </li>
                    <li>Biometric fingerprint technology.</li>
                    <li>
                      Long battery life with a USB Type-C rechargeable cable.
                    </li>
                    <li>
                      High-Security and Durable Lock Body: made with aluminum
                      alloy material and stainless steel.
                    </li>
                    <li>
                      Smart Lock App Control: The Partage Lock App allows you to
                      add and control secure access.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productprev;
