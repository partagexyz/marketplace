"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { LoadingItem } from '../nftdetail/Item';
import { useStoreNfts } from '../../hooks/useStoreNfts';
import { parseMedia } from "../../utils";
import { getCachedImage } from "../../utils/getCachedImages";

const NftPreview = () => {
  const { nftsData, loading } = useStoreNfts('');

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
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
              >
                <div className="card">
                  <a href="/details">
                    <Image
                      src={getCachedImage(parseMedia(item.media))}
                      className="card-img-top"
                      alt="..."
                      width={300}
                      height={200}
                    />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="/details">{item.title}</a>
                    </h5>
                    <p className="description">{(item.price? (item.price/1000000).toString() : "0")} USDt</p>
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
