"use client";

import React, { useState, useEffect } from "react";
import { Item, LoadingItem } from "../nftdetail/Item";
import { useStoreNfts } from "../../hooks/useStoreNfts";

const NftPreview = () => {
  const { nftsData, loading } = useStoreNfts("");

  // State to hold three random items
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    // Function to get three random items
    const getRandomItems = () => {
      if (!loading && nftsData && nftsData.length > 0) {
        const shuffledItems = shuffleArray(nftsData);
        const selectedItems = shuffledItems.slice(0, 3);
        setRandomItems(selectedItems);
      }
    };

    getRandomItems();
  }, [loading, nftsData]);

  return (
    <section id="nftcollections" className="nftcollections">
      <div className="container">
        <div className="section-title">
          <p>Popular NFTs</p>
          <h2>Checkout our trending items</h2>
        </div>

        <div className="row icon-boxes">
          {loading ? (
            <LoadingItem />
          ) : (
            randomItems.map((item, index) => (
              <div
                key={index}
                className="cardsmall col-lg-4 col-md-6 d-flex align-items-stretch"
              >
                <div className="card">
                  <a href="/nftdetail">
                    <Item item={item} />
                  </a>

                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="/nftdetail">{item.title}</a>
                    </h5>
                    <p className="description">
                      <span id="pricetag">
                        {item.price ? (item.price / 1000000).toString() : "0"}{" "}
                        USDT
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
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

export default NftPreview;
