import React from "react";
import boxImage1 from "../../assets/img/connect-wallet.jpg";
import boxImage2 from "../../assets/img/send-payment.jpg";
import boxImage3 from "../../assets/img/receive-password.jpg";
import Image from "next/image";

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
      <div className="container">
        <div className="text-left">
          <span className="nfth">All</span>
          <span className="nfth">Art</span>
          <span className="nfth">Gaming</span>
          <span className="nfth">Memberships</span>
          <span className="nfth">PFPs</span>
          <span className="nfth">Photography</span>
          <span className="nfth">Music</span>
        </div>
        <br></br>
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
                      <Image
                        src={item.image}
                        className="card-img-top"
                        alt="..."
                      />
                    </a>

                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="/details">{item.title}</a>
                      </h5>
                    </div>

                    <div className="price-container">
                      <Image src={item.image} id="collectionimgg" alt="..." />{" "}
                      <div className="price left">
                        <span style={{ color: "gray" }}>Creator</span>
                        <br></br>
                        <span id="pricetag">{item.price}</span>
                      </div>
                      <div className="price right">
                        <span style={{ color: "gray" }}>Highest Bid</span>{" "}
                        <br></br>
                        <span id="pricetag">{item.highestbid}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Nft;
