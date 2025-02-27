import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3>PARTAGE</h3>
                  <p>Keyless Solutions for Seamless Sharing</p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bx bxl-skype"></i>
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              

              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Explore</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/marketplace">Marketplace</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/dashboard">Dashboard</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="https://medium.com/partagexyz/partage-white-paper-v2-c0cbea46e2f8">White Paper</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="https://medium.com/partagexyz">Blog</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Exclusive insights straight to your inbox.</p>
                <form action="" method="post">
                  <input type="email" placeholder="example@mail.com" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; All rights reserved{" "}
            <strong>
              <span>CivicTech OÜ, 2024</span>
            </strong>
            .
          </div>
        </div>
      </footer>
      {/* <div id="preloader"></div> */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer;
