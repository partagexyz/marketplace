import React from "react";
import joinimg from "../../assets/img/partabout.png";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div id="aboutmore" className="row">
            <div
              className="col-lg-6 order-1 order-lg-1"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <img id="aboutimg" src={joinimg} className="img-fluid" alt="" />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-2 content"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3>Join our weekly Digest</h3>

              <p>Get exclusive update straight to your inbox</p>

              <div id="joinform">
                <form action="" method="post">
                  <input type="email" placeholder="example@mail.com" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
