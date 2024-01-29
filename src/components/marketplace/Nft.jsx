import React from "react";
import boxImage1 from "../../assets/img/connect-wallet.jpg";
import boxImage2 from "../../assets/img/send-payment.jpg";
import boxImage3 from "../../assets/img/receive-password.jpg";

const Nft = () => {
  const items = [
    {
      image: boxImage2,
      title: "Bob lane",
      profile: "Sooshio",
    },
    {
      image: boxImage2,
      title: "Testoo moo",
      profile: "moans",
    },
    {
      image: boxImage2,
      title: "wdnwj joos",
      profile: "gooad",
    },
    {
      image: boxImage2,
      title: "Bob lane",
      profile: "Sooshio",
    },
    {
      image: boxImage2,
      title: "Bob lane",
      profile: "Sooshio",
    },
    {
      image: boxImage2,
      title: "Testoo moo",
      profile: "moans",
    },
    {
      image: boxImage2,
      title: "Bob lane",
      profile: "Sooshio",
    },
    {
      image: boxImage2,
      title: "Testoo moo",
      profile: "moans",
    },
    {
      image: boxImage2,
      title: "wdnwj joos",
      profile: "gooad",
    },
    {
      image: boxImage2,
      title: "Testoo moo",
      profile: "moans",
    },
    {
      image: boxImage2,
      title: "Bob lane",
      profile: "Sooshio",
    },
    {
      image: boxImage2,
      title: "wdnwj joos",
      profile: "gooad",
    },
  ];

  return (
    <section id="marketplac" className="marketplac">
      <div className="container" data-aos="fade-up">
        <div className="row">
          {/* using this div and uncommenting the css tyle for this (.marketplac .icon-boxes) makes the card overflow <div className="row icon-boxes"> */}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nft;
