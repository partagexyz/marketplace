import React from "react";

const Detailhead = ({ selectedItem }) => {
  return (
    <>
      <section id="smallhero">
        <div className="smallhero-container">
          <div className="col-lg-6 order-1 order-lg-1">
            <h1>{selectedItem?.title}</h1>
            <h2>
              Available from{" "}
              <span>{selectedItem?.extra.find((item) => item.trait_type === "Start Date")?.value}</span>{" "}
              to{" "}
              <span>{selectedItem?.extra.find((item) => item.trait_type === "End Date")?.value}</span>
            </h2>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-2 content">
            {/* second column content */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Detailhead;
