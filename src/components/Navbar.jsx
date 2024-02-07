import React, { useEffect, useState } from "react";
import { initHeaderScrolled } from "../assets/js/headerScrolled";

const Navbar = ({ onClick }) => {
  const [isMobileNavVisible, setMobileNavVisibility] = useState(false);

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
                <a
                  className="nav-link scrollto"
                  href="/marketplace"
                >
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
              <li>
                <a onClick={onClick} className="getstarted scrollto">
                  Connect Wallet
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
            <br></br>
          </nav>
          {/* .navbar */}
        </div>
      </header>
    </>
  );
};

export default Navbar;
