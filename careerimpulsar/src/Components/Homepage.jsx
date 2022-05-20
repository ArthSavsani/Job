import React from "react";
import { Link } from "react-router-dom";
import "../css/homepage.css";
import homepage from "../images/hpage.svg";
const Homepage = () => {
  return (
    <div>
      <div className="home">
        <div className="header">
          <div className="header_container">
            <div className="header_logo col-md-6">Career Impulsar</div>
            <div className="header_action col-md-6">
              <Link to="/login">
                <input type="button" value="Login" className="login" />
              </Link>
              <Link to="signup">
                <input type="button" value="Sign Up" className="signup" />
              </Link>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="details_description">
            <div className="details_description_title">
              Matching Top Talent <br />
              With Great Companies
            </div>
            <div className="details_part">
              <div className="details_description_company">
                <div className="details_description_company_title">
                  For Companies
                </div>
                <div className="details_description_company_deacription">
                  An market-leading <br /> plateform to <br />
                  find top talent
                </div>
                <div className="details_description_company_action">
                  <Link to="signup">
                    <input
                      type="button"
                      className="details_description_company_login"
                      value="Start finding"
                    />
                  </Link>
                </div>
              </div>
              <div className="details_description_seekers">
                <div className="details_description_seekers_title">
                  For Workers
                </div>
                <div className="details_description_seekers_deacription">
                  Join the most <br /> trustable work <br /> finding plateform
                </div>
                <div className="details_description_seekers_action">
                  <Link to="signup">
                    <input
                      type="button"
                      className="details_description_seekers_login"
                      value="Start Applying"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="details_image">
            <img src={homepage} alt="FrontImage" className="details_img" />
          </div>
        </div>
        <div className="footer">
          <div className="footer_details">Copyright © 2022 CareerImpulsar</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
