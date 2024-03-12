"use client"

import { useState } from "react";
import Detailhead from "../../components/nftdetail/Detailhead";
import Description from "../../components/nftdetail/Description";
import BuyModal from "../../components/BuyModal/BuyModal";
import NftPreview from "../../components/homepage/NftPreview"

const Details = () => {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleOpenBuyModal = (item) => {
    setSelectedItem(item);
    setShowBuyModal(true);
  };

  const handleCloseBuyModal = () => {
    setSelectedItem({});
    setShowBuyModal(false);
  };

  return (
    <main>
      <Detailhead />

      <Description showModal={handleOpenBuyModal} />

      {!!showBuyModal && (
        <BuyModal closeModal={handleCloseBuyModal} item={selectedItem} />
      )}

      <NftPreview />
    </main>
  );
};

export default Details;
