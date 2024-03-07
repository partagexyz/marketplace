import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { initHeaderScrolled } from "../../assets/js/headerScrolled";
import { useMbWallet } from "@mintbase-js/react";

const Navbar = () => {
  const { isConnected, connect, activeAccountId, disconnect } = useMbWallet();
  // const navigate = useNavigate();

  const [isMobileNavVisible, setMobileNavVisibility] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisibility(!isMobileNavVisible);
  };

  useEffect(() => {
    initHeaderScrolled();

    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    //const navbar = document.querySelector("#navbar");

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
                <a
                  className="nav-link scrollto"
                  href="https://shop.hellopartage.xyz/products/keyless-partage-lock"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="/app"
                >
                  Download App
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/marketplace">
                  Marketplace
                </a>
              </li>
              {isConnected ? (
                <>
                  <li>
                    <a className="nav-link scrollto" href="/dashboard">
                      Dashboard
                    </a>
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
        </div>
      </header>
    </>
  );
};

export default Navbar;
