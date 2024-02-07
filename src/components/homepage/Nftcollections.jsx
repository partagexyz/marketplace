import React from "react";
import boxImage1 from "../../assets/img/connect-wallet.jpg";
import boxImage2 from "../../assets/img/send-payment.jpg";
import boxImage3 from "../../assets/img/receive-password.jpg";
import Image from "next/image";

const Nftcollections = () => {
  const items = [
    {
      image: boxImage2,
      collectinum: "25+",
      title: "Bob lane",
      profile: "Sooshio",
    },
    {
      image: boxImage2,
      collectinum: "6+",
      title: "Testoo moo",
      profile: "moans",
    },
    {
      image: boxImage2,
      collectinum: "1025+",
      title: "wdnwj joos",
      profile: "gooad",
    },
    {
      image: boxImage2,
      collectinum: "6+",
      title: "Testoo moo",
      profile: "moans",
    },
    {
      image: boxImage2,
      collectinum: "25+",
      title: "Bob lane",
      profile: "Sooshio",
    },
    {
      image: boxImage2,
      collectinum: "1025+",
      title: "wdnwj joos",
      profile: "gooad",
    },
  ];

  return (
    <section id="nftcollections" className="nftcollections">
      <div className="container">
        <div className="section-title">
          <p>NFT Collections</p>
          <h2>Checkout our weekly trending collections</h2>
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
                <div id="collecti" className="col-12">
                  <div className="row">
                    <div className="col-4">
                      <Image src={item.image} alt="..." />
                    </div>
                    <div className="col-4">
                      <Image src={item.image} alt="..." />
                    </div>
                    <div className="col-4">
                      <p id="collectinum">
                        <b>{item.collectinum}</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <h5 className="card-title">
                    <a href="/details">{item.title}</a>
                  </h5>
                  <p className="description">
                    <Image src={item.image} id="collectionprofile" alt="..." />{" "}
                    <span id="pricetag">{item.profile}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nftcollections;
