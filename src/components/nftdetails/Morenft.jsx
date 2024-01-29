import React from "react";
import boxImage1 from "../../assets/img/connect-wallet.jpg";
import boxImage2 from "../../assets/img/send-payment.jpg";
import boxImage3 from "../../assets/img/receive-password.jpg";

const Morenft = () => {
  const items = [
    {
      image: boxImage2,
      price: "2.5 NEAR",
      title: "Bob lane",
      profile: "Sooshio",
      highestbid: "4.5 NEAR",
    },
    {
      image: boxImage2,
      price: "3.0 NEAR",
      title: "Bob lane",
      profile: "Sooshio",
      highestbid: "6.5 NEAR",
    },
    {
      image: boxImage2,
      price: "1.25 NEAR",
      title: "Bob lane",
      profile: "Sooshio",
      highestbid: "7.2 NEAR",
    },
    {
      image: boxImage2,
      price: "6.8 NEAR",
      title: "Bob lane",
      profile: "Sooshio",
      highestbid: "12.0 NEAR",
    },
    {
      image: boxImage2,
      price: "5.5 NEAR",
      title: "Testoo moo",
      profile: "moans",
      highestbid: "6.3 NEAR",
    },
    {
      image: boxImage2,
      price: "1.45 NEAR",
      title: "wdnwj joos",
      profile: "gooad",
      highestbid: "3.5 NEAR",
    },
  ];

  return (
    <section id="nftcollections" className="nftcollections">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <p>More from this Creator</p>
        </div>

        <div className="row icon-boxes">
          {items.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={50 * (index + 1)}
            >
              <div className="card">
                <a href="/details">
                  <img src={item.image} className="card-img-top" alt="..." />
                </a>

                <div className="card-body">
                  <h5 className="card-title">
                    <a href="/details">{item.title}</a>
                  </h5>
                  <p className="description">
                    <img src={item.image} id="collectionprofile" alt="..." />{" "}
                    <span id="pricetag">{item.profile}</span>
                  </p>
                </div>

                <div className="price-container">
                  <span className="price left">
                    <span style={{ color: "gray" }}>price</span>
                    <br></br>
                    <span id="pricetag">{item.price}</span>
                  </span>
                  <span className="price right">
                    <span style={{ color: "gray" }}>Highest Bid</span> <br></br>
                    <span id="pricetag">{item.highestbid}</span>
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
