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
      <div className="flex w-full">
        <Items showModal={handleOpenBuyModal} />
      </div>
      <div className="mx-24 mt-4">
        {!!showBuyModal && (
          <BuyModal closeModal={handleCloseBuyModal} item={selectedItem} />
        )}
      </div>
    </main>
  );
};

export default Marketplace;
