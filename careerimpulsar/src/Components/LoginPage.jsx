import React, { useState } from "react";
import { toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../css/loginpage.css";
import LoginImage from "../images/loginpageimage1.svg";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    pass: "",
    login_choice_button: "",
  });
  let name, value;
  const handleLoginData = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };
  const navigate = useNavigate();
  const sendLoginData = async (e) => {
    e.preventDefault();
    const { email, pass, login_choice_button } = loginData;
    console.log(loginData);
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        pass,
        login_choice_button,
      }),
    });
    const data = await res.json();
    console.log(data.message);
    if (res.status === 400) {
      toast.warn("All the form fields are required...", {
        position: "top-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (res.status === 422) {
      toast.warn("Please Provide Valid Login Credentials...", {
        position: "top-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (res.status === 200 && data.message === "Worker") {
      toast.success("Login successful...", {
        position: "top-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/workerDashboard");
    } else if (res.status === 200 && data.message === "Company") {
      toast.success("Login successful...", {
        position: "top-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/companyDashboard");
    } else if (res.status === 500) {
      toast.warn("Login Failed...", {
        position: "top-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="login_main_div">
      <div className="login_page col-md-6">
        <div className="login_logo"></div>
        <div className="login_page_view">
          <div className="login_title">Login</div>
          <div className="login_fields">
            <div className="login_email">
              <div className="login_email_icon"></div>
              <i class="fa fa-user login_page_icons"></i>
              <input
                type="email"
                name="email"
                id="login_email"
                placeholder="Your Email"
                className="login_email_field"
                onChange={handleLoginData}
              />
            </div>
            <div className="login_pass">
              <i class="fa fa-lock login_page_icons"></i>
              <input
                type="password"
                name="pass"
                id="login_password"
                placeholder="Your Password"
                className="login_pass_feld"
                onChange={handleLoginData}
              />
            </div>
          </div>
          <div className="login_page_choice">
            <div className="login_choice">
              <div className="login_choice_company">
                <label className="login_choice_labels">Company</label>
                <input
                  type="radio"
                  value="company"
                  name="login_choice_button"
                  id="login_page_choice_company"
                  onChange={handleLoginData}
                />
              </div>
              <div className="login_choice_seekers">
                <label className="login_choice_labels">Worker</label>
                <input
                  type="radio"
                  value="worker"
                  name="login_choice_button"
                  id="login_page_choice_seekers"
                  onChange={handleLoginData}
                />
              </div>
            </div>
          </div>
          <div className="forgot_password">
            <div className="forgot">
              <Link to="/forgotPassword">Forgot your password?</Link>
            </div>
          </div>
          <div className="login_action_button">
            <input
              type="button"
              value="Login"
              className="login_button_text"
              onClick={sendLoginData}
            />
          </div>
        </div>
      </div>
      <div className="col-md-6 login_page_image">
        <img src={LoginImage} alt="" className="login_page_bg1" />
      </div>
    </div>
  );
};

export default LoginPage;
