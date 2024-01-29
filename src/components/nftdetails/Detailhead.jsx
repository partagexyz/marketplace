import React, { useEffect } from "react";
import { initHeaderScrolled } from "../../assets/js/headerScrolled";
// import SignOutButton from "../ui-components";
import partimg from "../../assets/img/partage-log.png";

const Detailhead = ({ onClick }) => {
  useEffect(() => {
    initHeaderScrolled();
  }, []);

  return (
    <>
      <section id="smallhero">
        <div
          className="smallhero-container"
          data-aos="fade-up"
          data-aos-delay="50"
        >
            
          <div
            className="col-lg-6 order-1 order-lg-1"
            data-aos="fade-left"
            data-aos-delay="50"
          >
            <h1>HokusAi #001</h1>
            <h2>Minted on <span>12 Oct 2023</span></h2>
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-2 content"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            {/* second column content */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Detailhead;
