"use client";

import React, { useState }  from "react";
//import joinimg from "../../assets/img/partabout.png";
import Image from "next/image";
import BuyModal from "../BuyModal/BuyModal";


const Description = ({ selectedItem, showModal }) => {
  const [showBuyModal, setShowBuyModal] = useState(false);

  const handleOpenBuyModal = () => {
    // open the BuyModal when the "BUY" button is clicked
    setShowBuyModal(true);
    showModal
  };

  const handleCloseBuyModal = () => {
    // close the BuyModal
    setShowBuyModal(false);
  };

  return (
    <>
      <section id="nftdetails" className="nftdetails">
        <div className="container">
          <div id="aboutmore" className="row">
            <div className="col-lg-6 col-md-6 order-1 order-lg-1 content">
              <div className="headpare">
                <h5>Created By</h5>
                <p className="description">
                  <Image src={selectedItem?.store} id="collectionprofile" alt="..." />{" "}
                  <span id="pricetag">{selectedItem?.store}</span>
                </p>
              </div>
              <br></br>
              <div className="headpare">
                <h5>Description</h5>
                <p>{selectedItem?.description}</p>
              </div>
              <br />
              <div className="headpare">
                <h5>Details</h5>
                {selectedItem?.extra.map((item, index) => (
                  <p key={index} className="description">
                    <i className="bi bi-person"></i>{" "}
                    <span id="pricetag">{item.trait_type}: {item.value}</span>
                  </p>
                ))}
                <p className="description">
                  <i className="bi bi-bag"></i>{" "}
                  <span id="pricetag">{selectedItem?.media}</span>
                </p>
                <p className="description">
                  <i className="bi bi-cart"></i>{" "}
                  <span id="pricetag">{selectedItem?.category}</span>
                </p>
                <p className="description">
                  <i className="bi bi-basket"></i>{" "}
                  <span id="pricetag">{selectedItem?.tags.join(", ")}</span>
                </p>
              </div>
              <br />
            </div>
            <div className="col-lg-6 col-md-6 pt-4 pt-lg-0 order-2 order-lg-2 content">
              <h3>{selectedItem?.title}</h3>
              <div className="card">
                <Image src={selectedItem?.media} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">{selectedItem?.title}</a>
                  </h5>
                  <p className="description">
                    <Image src={selectedItem?.store} id="collectionprofile" alt="..." />{" "}
                    <span id="pricetag">{selectedItem?.store}</span>
                  </p>
                </div>
                <div className="price-container">
                  <span className="price left">
                    <span style={{ color: "gray" }}>{selectedItem?.price}</span>
                    <br></br>
                    <span id="pricetag">USDT</span>
                  </span>
                </div>
              </div>
              <a 
              id="provbut" 
              class="full-width-button" 
              showModal={handleOpenBuyModal}
              >
                BUY
              </a>
            </div>
          </div>
        </div>
      </section>
      {!!showBuyModal && (
        <BuyModal closeModal={handleCloseBuyModal} item={selectedItem} />
      )}
    </>
  );
};

export default Description;
