import React from "react";
import boxImage1 from "../../assets/img/partwork1.png";
import boxImage2 from "../../assets/img/partwork2.png";
import boxImage3 from "../../assets/img/partwork3.png";
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
              title: "Purchase your Lock",
              description:
                "Secure your peace of mind today, and get a compatible lock from our shop.",
            },
            {
              imgSrc: boxImage2,
              title: "Try our App",
              description:
                "Stay connected on the go, and try our app for seamless access to a world of exclusive features at your fingertips.",
            },
            {
              imgSrc: boxImage3,
              title: "Connect your wallet",
              description:
                "Experience the full potential of Partage by connecting your wallet for instant access to your user dahsboard.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card">
                <Image
                  src={item.imgSrc}
                  style={{ height: "250px", width: "100%" }}
                  className="card-img-top"
                  alt={`Step ${index + 1}`}
                />

                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">{item.title}</a>
                  </h5>
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
