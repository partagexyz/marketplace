import React from "react";
import shareimg from "../../assets/img/phone-hand.png";
import Image from "next/image";

const Shared = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div id="aboutmore" className="row">
            <div className="col-lg-6 pt-4 pt-lg-0 order-1 order-lg-1 content">
              <h1
                style={{
                  color: "white",
                  paddingTop: "60px",
                  fontWeight: "bolder",
                  paddingBottom: "100px",
                }}
              >
                Shared Items at Your Fingertips
              </h1>

              <div
                style={{ marginLeft: "20%", marginRight: "20%" }}
                className="markbut"
              >
                <a className="scrollto" href="/app" id="provfolbut">
                  Download App
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-2">
              <Image
                id="aboutimg"
                src={shareimg}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shared;