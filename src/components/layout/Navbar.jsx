import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { initHeaderScrolled } from "../../assets/js/headerScrolled";
import { useMbWallet } from "@mintbase-js/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const { isConnected, connect, activeAccountId, disconnect } = useMbWallet();

  useEffect(() => {
    initHeaderScrolled();

    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  });

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a style={{ color: "#c5f801" }} href="/">
              <b>PARTAGE</b>
            </a>
          </h1>

          <nav id="navbar">
            <button
              className="menu-toggle"
              onClick={toggleNav}
              style={{ background: "none", border: "none" }}
            >
              {isOpen ? (
                <i className="bi bi-x-lg"></i>
              ) : (
                <i className="bi bi-list"></i>
              )}
            </button>
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
              <li>
                <a
                  className="nav-link scrollto"
                  href="https://shop.hellopartage.xyz/products/keyless-partage-lock"
                >
                  Shop
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/app">
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
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
