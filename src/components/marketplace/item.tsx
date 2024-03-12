import { StoreNftsData } from "@mintbase-js/data/lib/api/storeNfts/storeNfts.types";
import { SelectedNft } from "../../types/types";
import { parseMedia } from "../../utils";
import { getCachedImage } from "../../utils/getCachedImages";
import Image from "next/image";

function Item({
  item,
  showModal,
}: {
  item: StoreNftsData;
  showModal: (item: SelectedNft) => void;
}): JSX.Element {
  if (!item) {
    return <></>;
  }

  const { mediaUrl } = parseMedia(item.media, item.base_uri);

  return (
    <div onClick={() => showModal({ metadataId: item.metadata_id })}>
      {mediaUrl ? (
        <img
          src={getCachedImage(mediaUrl)}
          alt={item.title}
          className="card-img-top"
        />
      ) : (
        <span> No Nft Media Available</span>
      )}

      <div className="card-body">
        <h5 className="card-title">
          <a href="/nftdetail">{item.title}</a>
        </h5>
        <p className="description">
          <span id="pricetag">
            {item.price ? (item.price / 1000000).toString() : "0"} USDT
          </span>
        </p>
      </div>
    </div>
  );
}

function LoadingItem(): JSX.Element {
  const products = Array.from(Array(12).keys());

  return (
    <>
      {products.map((productKey) => (
        <div key={productKey} className="flex items-center justify-center ">
          <div className="w-full h-64 bg-slate-900 animate-pulse" />
        </div>
      ))}
    </>
  );
}

export { Item, LoadingItem };