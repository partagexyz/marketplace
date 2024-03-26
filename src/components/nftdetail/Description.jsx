"use client";
import React, { useState, useEffect } from "react";
import { Item, LoadingItem } from "../nftdetail/Item";
import { useStoreNfts } from "../../hooks/useStoreNfts";
import joinimg from "../../assets/img/red-tiller-white.jpg";
import Image from "next/image";

import BuyModal from "../BuyModal/BuyModal";

const Description = () => {
  const { nftsData, loading } = useStoreNfts("");
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [randomItem, setRandomItem] = useState(null);

  useEffect(() => {
    const getRandomItem = () => {
      if (!loading && nftsData && nftsData.length > 0) {
        const shuffledItems = shuffleArray(nftsData);
        const selectedItem = shuffledItems[0]; // Selecting the first item
        setRandomItem(selectedItem);
      }
    };

    getRandomItem();
  }, [loading, nftsData]);

  const handleBuyClick = () => {
    setShowBuyModal(true);
  };

  const handleCloseBuyModal = () => {
    setShowBuyModal(false);
  };

  return (
    <>
      <section id="nftdetails" className="nftdetails">
        <div className="container">
          <div id="aboutmore" className="row">
            <div className="col-lg-6 col-md-6 order-1 order-lg-1 content">
              <div className="d-flex justify-content-between align-items-center">
                {/* First word with icon */}
                <div>
                  <span>
                    <h2>NISAN GT -R</h2>
                  </span>
                </div>
                {/* Second word */}
                <div>
                  <span>
                    <p>#9761</p>
                  </span>
                </div>
              </div>

              <br></br>
              <div className="headpare">
                <p>
                  The Experience spinner at shooshi as been a very whdg djwgdil
                  lwig gy gwyg yelfyegf vce lasihg sgy ouys godfuyg douys dy
                  suyd ousyfd oyuso du sd ofuf
                </p>
              </div>
              <br />
              <div className="headpare">
                <h5>
                  <i className="bi bi-record-circle"></i> Pick - Up
                </h5>

                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="column-content">
                      <p className="description">
                        <span id="pricetag">
                          <b>Location</b>
                        </span>
                      </p>
                      <p className="description">
                        <span id="pricetag">Kotasama</span>
                        <i className="bi bi-chevron-down"></i>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="column-content">
                      <p className="description">
                        <span id="pricetag">
                          <b>Date</b>
                        </span>
                      </p>
                      <p className="description">
                        <span id="pricetag">20 July, 2024</span>
                        <i className="bi bi-chevron-down"></i>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="">
                      <p className="description">
                        <span id="pricetag">
                          <b>Time</b>
                        </span>
                      </p>
                      <p className="description">
                        <span id="pricetag">07 : 00 </span>
                        <i className="bi bi-chevron-down"></i>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <div className="headpare">
                <h5>
                  <i className="bi bi-record-circle-fill"></i> Drop - Off
                </h5>

                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="column-content">
                      <p className="description">
                        <span id="pricetag">
                          <b>Location</b>
                        </span>
                      </p>
                      <p className="description">
                        <span id="pricetag">Kotasama</span>
                        <i className="bi bi-chevron-down"></i>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="column-content">
                      <p className="description">
                        <span id="pricetag">
                          <b>Date</b>
                        </span>
                      </p>
                      <p className="description">
                        <span id="pricetag">20 July, 2024</span>
                        <i className="bi bi-chevron-down"></i>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="">
                      <p className="description">
                        <span id="pricetag">
                          <b>Time</b>
                        </span>
                      </p>
                      <p className="description">
                        <span id="pricetag">07 : 00 </span>
                        <i className="bi bi-chevron-down"></i>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div style={{ borderTop: "1px solid gray" }} className="headpare">
                <div className="d-flex justify-content-between align-items-center">
                  {/* First word with icon */}
                  <div>
                    <span>
                      <h4>Total Rental Price</h4>
                    </span>
                  </div>
                  {/* Second word */}
                  <div>
                    <span>
                      <h4>$80.00</h4>
                    </span>
                  </div>
                </div>

                <p>Overall price and includes rental discount</p>
              </div>
              <br></br>
              <div>
                <a
                  id="provbut"
                  class="full-width-button"
                  onClick={handleBuyClick}
                >
                  BUY
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 pt-4 pt-lg-0 order-2 order-lg-2 content">
              {loading ? (
                <LoadingItem />
              ) : (
                randomItem && ( // Render only if randomItem exists
                  <div className="card">
                    <a href="/nftdetail">
                      <Item item={randomItem} />
                    </a>

                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="/nftdetail">{randomItem.title}</a>
                      </h5>
                      <p className="description">
                        <span id="pricetag">
                          {randomItem.price
                            ? (randomItem.price / 1000000).toString()
                            : "0"}{" "}
                          USDT
                        </span>
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Render BuyModal */}
      {showBuyModal && <BuyModal closeModal={handleCloseBuyModal} />}
    </>
  );
};

// Function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default Description;
