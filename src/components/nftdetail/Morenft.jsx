import React from "react";
import boxImage2 from "../../assets/img/send-payment.jpg";
import Image from "next/image";

const Morenft = () => {
  const items = [
    {
      image: boxImage2,
      price: "2.5 USDT",
      nftname: "Bob lane",
      ownername: "Sooshio",
      mon_price: "4.5 USDT",
    },
    {
      image: boxImage2,
      price: "3.0 USDT",
      nftname: "Bob lane",
      ownername: "Sooshio",
      mon_price: "6.5 USDT",
    },
    {
      image: boxImage2,
      price: "1.25 USDT",
      nftname: "Bob lane",
      ownername: "Sooshio",
      mon_price: "7.2 USDT",
    },
  ];

  return (
    <section id="nftcollections" className="nftcollections">
      <div className="container">
        <div className="section-title">
          <p>More from this Creator</p>
        </div>

        <div className="row icon-boxes">
          {items.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
            >
              <div className="card">
                <a href="/details">
                  <Image src={item.image} className="card-img-top" alt="..." />
                </a>

                <div className="card-body">
                  <h5 className="card-title">
                    <a href="/details">{item.nftname}</a>
                  </h5>
                  <p className="description">
                    <Image src={item.image} id="collectionprofile" alt="..." />{" "}
                    <span id="pricetag">{item.ownername}</span>
                  </p>
                </div>

                <div className="price-container">
                  <span className="price left">
                    <span style={{ color: "gray" }}>Daily Price</span>
                    <br></br>
                    <span id="pricetag">{item.price}</span>
                  </span>
                  <span className="price right">
                    <span style={{ color: "gray" }}>Monthly Price </span>{" "}
                    <br></br>
                    <span id="pricetag">{item.mon_price}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Morenft;
