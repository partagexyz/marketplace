import React from "react";

const Marketplacehead = ({ onClick }) => {
  return (
    <>
      <section id="smallhero">
        <div className="marketplacehead">
          <h1 style={{ color: "white" }}>Marketplace</h1>
          <h2>Find shared items for the time of your stay</h2>
          {/* <div className="d-flex">
            <a className="btn-get-started scrollto">
              <b>Find NFTs</b>
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Marketplacehead;
