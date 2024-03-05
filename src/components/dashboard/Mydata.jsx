import React from "react";
import boxImage2 from "../../assets/img/send-payment.jpg";
import Image from "next/image";

const Mydata = () => {
  const commands = [
    {
      commandname: "ACTIVATE LOCK",
    },
    {
      commandname: "DEACTIVATE LOCK",
    },
    {
      commandname: "REGISTER ITEM",
    },
    {
      commandname: "UPDATE ITEM",
    },
    {
      commandname: "LIST ITEM",
    },
    {
      commandname: "UNLIST ITEM",
    },
    {
      commandname: "GENERATE ACCESS",
    },
    {
      commandname: "REVOKE ACCESS",
    },
    {
      commandname: "UPDATE PROFILE",
    },
  ];
  const items = [
    {
      image: boxImage2,
      price: "2.5 USDT",
      title: "Bob lane",
      profile: "Sooshio",
      highestbid: "4.5 USDT",
    },
    {
      image: boxImage2,
      price: "3.0 USDT",
      title: "Bob lane",
      profile: "Sooshio",
      highestbid: "6.5 USDT",
    },
    {
      image: boxImage2,
      price: "1.25 USDT",
      title: "Bob lane",
      profile: "Sooshio",
      highestbid: "7.2 USDT",
    },
  ];

  return (
    <section id="nftcollections" className="nftcollections">
      <div className="container">
        <div className="mynftsec">
          <div className="section-title">
            <p>My NFTs</p>
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
                    <p className="description">
                      <Image
                        src={item.image}
                        id="collectionprofile"
                        alt="..."
                      />{" "}
                      <span id="pricetag">{item.profile}</span>
                    </p>
                  </div>

                  <div className="price-container">
                    <span className="price left">
                      <span style={{ color: "gray" }}>Daily price</span>
                      <br></br>
                      <span id="pricetag">{item.price}</span>
                    </span>
                    <span className="price right">
                      <span style={{ color: "gray" }}>Montly Price</span>{" "}
                      <br></br>
                      <span id="pricetag">{item.highestbid}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mydatasec">
          <div className="section-title">
            <p>My Data</p>
          </div>

          <div className="row">
            <div className="col-lg-8 col-md-8 d-flex align-items-stretch">
              <div
                className="card command"
                style={{
                  minWidth: "100%",
                  marginLeft: "0px",
                  marginRight: "0px",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title text-left">
                    <a href="/details">Mainnet:</a>
                    <br></br>
                    <span id="pricetag">
                    partage-lock.near {" "}
                    </span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 d-flex align-items-stretch">
              <div
                className="card command"
                style={{
                  minWidth: "100%",
                  marginLeft: "0px",
                  marginRight: "0px",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title text-left">
                    <a href="/details">Testnet:</a>
                    <br></br>
                    <span id="pricetag">
                    partage-lock.testnet {" "}
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blockcommend">
          <div className="section-title">
            <p>Blockchain Commands</p>
          </div>

          <div className="row">
            {commands.map((command, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
              >
                <div
                  className="card command"
                  style={{
                    minWidth: "100%",
                    marginLeft: "0px",
                    marginRight: "0px",
                    cursor: "pointer",
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      <a href="/details">{command.commandname}</a>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mydata;
