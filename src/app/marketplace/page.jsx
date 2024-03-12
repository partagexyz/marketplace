"use client";

import { useState } from "react";
import Marketplacehead from "../../components/marketplace/Marketplacehead";
import Items from "../../components/marketplace/Items";
import BuyModal from "../../components/BuyModal/BuyModal";

const Marketplace = () => {
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
      <Marketplacehead />

      <Items showModal={handleOpenBuyModal} />

      {!!showBuyModal && (
        <BuyModal closeModal={handleCloseBuyModal} item={selectedItem} />
      )}
    </main>
  );
};

export default Marketplace;
