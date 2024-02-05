import React from "react";

import partimg from "../../assets/img/partage-log.png";

const Marketplacehead = ({ onClick }) => {

  return (
    <>
      <section id="smallhero">
        
          <div className="marketplacehead">
            <h1 style={{color: "white"}}>Browse Marketplace</h1>
            <h2>Browse through more than 50k NFTs on the NFT Marketplace.</h2>
            <div className="d-flex">
              <a className="btn-get-started scrollto">
                <b>Find NFTs</b>
              </a>
            </div>
     
        </div>
      </section>
    </>
  );
};

export default Marketplacehead;
