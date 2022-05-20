import React from "react";
import "../css/forgotpassword.css";
import ForgotPass from "../images/forgotpassword.svg";
const ForgotPassword = () => {
  return (
    <div className="forgot_psw">
      <div className="forgot_pass col-md-6 c6">
        <div className="forgot_pass_page_view">
          <div className="forgot_pass_title">Forgot? Password</div>
          <div className="forgot_pass_fields">
            <div className="forgot_email">
              <div className="forgot_email_icon"></div>
              <i class="fa fa-user forgot_page_icons"></i>
              <input
                type="email"
                name="forgot_email"
                placeholder="Your Email"
                className="forgot_email_field"
              />
            </div>
          </div>
          <div className="forgot_action_button">
            <input
              type="button"
              value="Submit"
              className="forgot_button_text"
            />
          </div>
        </div>
      </div>
      <div className="forgot_pass_img col-md-6 c6">
        <img
          src={ForgotPass}
          alt="Forgot_Password_Image"
          id="forgot_password_image"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
