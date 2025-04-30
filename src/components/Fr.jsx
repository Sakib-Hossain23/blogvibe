import { Link } from "react-router-dom";

import React from "react";
import "../assets/styles/Fr.css";

const Fr = () => {
  return (
    <div className="frc">
      <div className="fr-container">
        <div className="locations">
          <h3>About Us</h3>
          <small>
            We love sharing the latest fashion trends with you. From
            eye-catching styles to simple everyday looks, we pick pieces that
            help you show who you are. Our goal is to mix classic fashion with a
            fresh, modern touch. We want you to feel confident and
            stylish—whether you're going to work, out with friends, or on a
            short trip. Fashion is more than just clothes—it’s a fun way to make
            every day feel special.
          </small>

          <br />

          <small>
            Thank you for choosing us to carry your essentials
            <br /> in style!
          </small>
        </div>
        <div className="customer-support">
          <div className="social-media-links">
            <div className="navbar-top">
              {/* Logo section */}
              <Link
                to="/"
                className="footer-button"
                onClick={() => {
                  closeAllMenus();
                  window.scrollTo(0, 0);
                }}
              >
                <div className="navbar-logo">
                  <img
                    src="/img/bvvv.png"
                    alt="GoGadget Store Logo"
                    className="logo-tilt"
                    style={{
                      height: "35px",
                      width: "auto",
                      marginLeft: "9px",
                      marginBottom: "-9px",
                      cursor: "text",
                    }}
                  />
                  <p style={{ cursor: "text" }}>BlogVibe</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fr-bottom">
        <p>© 2025 BlogVibe | All rights reserved</p>
      </div>
    </div>
  );
};

export default Fr;
