import {
  EIconName,
  MbDropdownMenu,
  MbIcon,
  MbMenuWrapper,
  MbTab,
} from "mintbase-ui";
import { useState } from "react";
import { useStoreData } from "../../hooks/useStoreData";
import { useStoreNfts } from "../../hooks/useStoreNfts";
import { SelectedNft, Store } from "../../types/types";
import { Item, LoadingItem } from "./item";
import { StoreNftsData } from "@mintbase-js/data/lib/api/storeNfts/storeNfts.types";

function Items({
  showModal,
}: {
  showModal: (item: SelectedNft) => void;
}): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState("");

  const { nftsData, loading } = useStoreNfts(selectedStore);
  const { stores } = useStoreData();

  // show store names in the dropdown menu
  const storeTabs = stores?.map((store: Store) => ({
    content: <span>{store.name}</span>,
    onClick: () => setSelectedStore(store.id),
  }));

  // add 'all stores' to the beginning of the dropdown menu
  storeTabs?.unshift({
    content: <span>All Stores</span>,
    onClick: () => setSelectedStore(""),
  });

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
            <div className="row">
              {/* <MbMenuWrapper setIsOpen={setMenuOpen}>
                  <div
                    onClick={() => setMenuOpen(!menuOpen)}
                    onKeyDown={() => setMenuOpen(!menuOpen)}
                    role="button"
                    tabIndex={-1}
                  >
                    <MbTab
                      label={
                        <div className="flex space-x-8 items-center">
                          <span>
                            {selectedStore === ""
                              ? "All Stores"
                              : stores?.find(
                                  (store: Store) => store.id === selectedStore
                                )?.name}
                          </span>
                          <div className="pointer-events-none">
                            <MbIcon
                              name={
                                menuOpen
                                  ? EIconName.ARROW_DROP_UP
                                  : EIconName.ARROW_DROP_DOWN
                              }
                              size="16px"
                              color="blue-300"
                              darkColor="blue-100"
                            />
                          </div>
                        </div>
                      }
                      isSmall
                    />
                  </div>
                  <MbDropdownMenu
                    items={storeTabs || []}
                    isOpen={menuOpen}
                    className="mt-2"
                  />
                </MbMenuWrapper> */}

              {loading ? (
                <LoadingItem />
              ) : (
                nftsData?.map((nft: StoreNftsData) => (
                  <div
                    key={nft.metadata_id}
                    className="col-lg-4 col-md-6 d-flex align-items-stretch"
                  >
                    <div className="card">
                      <Item item={nft} showModal={showModal} />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Items;
