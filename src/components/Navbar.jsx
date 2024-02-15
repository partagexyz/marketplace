import React, { useEffect, useState } from "react";
import { initHeaderScrolled } from "../assets/js/headerScrolled";
import { useMbWallet } from "@mintbase-js/react";

const Navbar = ({ onClick }) => {
  const { isConnected, connect, activeAccountId, disconnect } = useMbWallet();

  const [isMobileNavVisible, setMobileNavVisibility] = useState(false);

  const truncatedAccountId = isConnected
    ? `${activeAccountId.slice(0, 6)}...${activeAccountId.slice(-4)}`
    : "";

  const toggleMobileNav = () => {
    setMobileNavVisibility(!isMobileNavVisible);
  };

  useEffect(() => {
    initHeaderScrolled();

    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const navbar = document.querySelector("#navbar");

    mobileNavToggle.addEventListener("click", () => {
      toggleMobileNav();
    });
  }, [isMobileNavVisible]);

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a style={{ color: "#c5f801" }} href="/">
              <b>PARTAGE</b>
            </a>
          </h1>

          <nav
            id="navbar"
            className={`navbar ${isMobileNavVisible ? "navbar-mobile" : ""}`}
          >
            <ul>
              <li>
                <a className="nav-link scrollto" href="/marketplace">
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="https://shop.hellopartage.xyz"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="https://app.hellopartage.xyz"
                >
                  App
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="https://medium.com/partagexyz/partage-white-paper-v2-c0cbea46e2f8"
                >
                  White Paper
                </a>
              </li>

              {isConnected ? (
                <>
                  <li>
                    <a className="nav-link scrollto">{truncatedAccountId}</a>
                  </li>

                  <li>
                    <a onClick={disconnect} className="getstarted scrollto">
                      Disconnect Wallet
                    </a>
                  </li>
                </>
              ) : (
                <li>
                  <a onClick={connect} className="getstarted scrollto">
                    Connect Wallet
                  </a>
                </li>
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
            <br></br>
          </nav>
          {/* end .navbar */}
        </div>
      </header>
    </>
  );
};

export default Navbar;
