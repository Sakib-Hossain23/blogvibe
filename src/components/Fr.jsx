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
            Welcome to BlogVibe — your trusted guide to discovering the best
            products from Amazon.
            <br /> We research, select, and share top-rated beauty, lifestyle to
            help you make smarter shopping decisions.
          </small>

          <br />
          <small>
            This site contains affiliate links. We may earn a commission if you
            buy through our links
            <br />
          </small>
          <br />

          <small>
            Thank you for choosing us to carry your essentials
            <br /> in style!
          </small>

          <div className="locations">
            <h3>Contact</h3>
            <p>
              Email:{" "}
              <a href="mailto:sakibhossain5676@gmail.com">
                sakibhossain5676@gmail.com
              </a>
            </p>
          </div>
          <div className="locations">
            <h3>-----------------</h3>

            <small>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </small>
          </div>
        </div>

        <div className="customer-support">
          <div className="social-media-links">
            <a
              href="https://www.pinterest.com/sakibhossain5676/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
          Pinterest
        </div>
      </div>
      <div className="fr-bottom">
        <p>© 2025 BlogVibe | All rights reserved</p>
      </div>
    </div>
  );
};

export default Fr;
