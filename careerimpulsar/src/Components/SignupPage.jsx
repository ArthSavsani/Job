import React from "react";
import "../css/signuppage.css";
import SignupNevigatorImage1 from "../images/signupnevigatorimg1.svg";
import SignupNevigatorImage2 from "../images/signupnevigatorimg2.svg";
import { Link } from "react-router-dom";
const SignupPage = () => {
  return (
    <div>
      <div className="signupnevigator_page">
        <div className="signup_nevigator">
          <div className="col-md-3"></div>
          <Link to="/companysignup" className="signup_nevigator_type1_link">
            <div className="signup_nevigator_type1 col-md-3">
              <div className="signup_nevigator_type1_view">
                <div className="signup_nevigator_type1_image">
                  <div>
                    <img
                      src={SignupNevigatorImage1}
                      alt="Company"
                      className="signup_nevigator_type1_image_view"
                    />
                  </div>
                </div>
                <div className="signup_nevigator_type1_text">
                  <div className="signup_nevigator_type1_text_view">
                    Company
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/workerSignup" className="signup_nevigator_type2_link">
            <div className="signup_nevigator_type2 col-md-3">
              <div className="signup_nevigator_type2_view">
                <div className="signup_nevigator_type2_image">
                  <div>
                    <img
                      src={SignupNevigatorImage2}
                      alt="Worker"
                      className="signup_nevigator_type2_image_view"
                    />
                  </div>
                </div>
                <div className="signup_nevigator_type2_text">
                  <div className="signup_nevigator_type2_text_view">Worker</div>
                </div>
              </div>
            </div>
          </Link>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
