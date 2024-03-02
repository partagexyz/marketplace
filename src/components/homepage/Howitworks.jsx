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
              title: "Purchase A Lock",
              description:
                "Buy a Partage Lock and generate a profit by selling temporary access to your underused assets. ",
            },
            {
              imgSrc: boxImage2,
              title: "Try The App",
              description:
                "Download the App to unlock items from our global network of owners sharing access to their belongings. ",
            },
            {
              imgSrc: boxImage3,
              title: "Scroll Our Marketplace",
              description:
                "Connect your wallet to experience the full potential of our marketplace with your user dashboard.",
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
