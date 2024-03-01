import React from "react";
// import boxImage from "../../assets/img/top-creator.jpg"; // Assuming one image for all top creators
// import boxImage from "../../assets/img/Partwork1.png";
import boxImage from "../../assets/img/connect-wallet.jpg";
import boxImage2 from "../../assets/img/send-payment.jpg";
import boxImage3 from "../../assets/img/receive-password.jpg";
import Image from "next/image";

const Topcreators = () => {
  const topCreators = [
    { name: "Magni Dolores", totalSale: "00.00 USDT" },
    { name: "John Doe", totalSale: "10.00 USDT" },
    { name: "Jane Smith", totalSale: "5.00 USDT" },
    { name: "Jane Smith", totalSale: "5.00 USDT" },
    { name: "Jane Smith", totalSale: "5.00 USDT" },
    { name: "Jane Smith", totalSale: "5.00 USDT" },
    { name: "Jane Smith", totalSale: "5.00 USDT" },
    { name: "Bob sidhfxsjc", totalSale: "20.00 USDT" },
    { name: "Bob Johnson", totalSale: "20.00 USDT" },
    { name: "Bob Johnson", totalSale: "20.00 USDT" },
    { name: "Bob Johnson", totalSale: "20.00 USDT" },
    { name: "Bob Johnson", totalSale: "20.00 USDT" },
  ];

  return (
    <section id="top-creators" className="top-creators">
      <div className="container">
        <div className="makhead">
          <div className="section-title">
            <p>TOP CREATORS</p>
            <h2>Checkout top creators on our Marketplace</h2>
          </div>
          <div className="markbut">
            <a href="/marketplace" id="provfolbut">
              Visit Marketplace
            </a>
          </div>
        </div>

        <div className="row icon-boxes">
          {topCreators.map((creator, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-3 mb-lg-0"
            >
              <div className="icon-box">
                <a href="/providerpage">
                  <div className="image-container">
                    <div id="circular-tag">
                      <span>{index + 1}</span>
                    </div>
                    <div className="text-center">
                      <Image src={boxImage} alt={`Top Creator ${index + 1}`} />
                    </div>
                  </div>
                  <div className="text-container">
                    <h4 className="title">
                      <a href="/providerpage">{creator.name}</a>
                    </h4>
                    <p className="description">
                      Total Sale: <span id="pricetag">{creator.totalSale}</span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topcreators;
