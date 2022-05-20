import React from "react";
import { toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../css/signuppagecompany.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import SignupWorkerImage from "../images/signupworkerimage.svg";
const SignupPagecompany = () => {
  return (
    <Formik
      initialValues={{
        companyName: "",
        workEmail: "",
        password: "",
        confirm_password: "",
      }}
      validationSchema={Yup.object({
        companyName: Yup.string()
          .max(50, "Maximum 50 characters!")
          .required("Required"),
        workEmail: Yup.string()
          .email("Invalid email address")
          .required("Required"),
        password: Yup.string()
          .max(15, "Maximum15 characters!")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Invalid formate"
          )
          .required("Required"),
        confirm_password: Yup.string()
          .oneOf([Yup.ref("password")], "Password must be same")
          .required("Required"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        /*setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);*/
        const res = await fetch("/companysignup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        setSubmitting(true);
        console.log(res.status);
        //const data = await res.json();
        if (res.status === 409) {
          toast.warn("Email already exist...", {
            position: "top-center",
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log("Email already exist...");
        } else if (res.status === 422) {
          toast.warn("Invalid Email Address...", {
            position: "top-center",
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (res.status === 201) {
          toast.success("Registered Successfully...", {
            position: "top-center",
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("Registration Failed...", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log("Registration Failed...");
        }
      }}
    >
      <div className="signup_company_form">
        <div className="signup_company_form_view">
          <div className="signup_company_form_details_section col-md-6">
            <Form className="signup_company_page_form">
              <div className="signup_company_page_logo">Career Impulsar</div>
              <div className="signup_company_form_firstname">
                <div className="signup_company_form_label">
                  <label htmlFor="firstName">Company Name</label>
                </div>
                <div className="signup_company_form_field">
                  <Field
                    name="companyName"
                    type="text"
                    id="signup_company_from_field_view"
                  />
                </div>
                <div className="signup_company_form_field_handle">
                  <div id="signup_company_form_error_view">
                    <ErrorMessage name="companyName" />
                  </div>
                </div>
              </div>

              {/* <div className="signup_company_form_lastname">
                <div className="signup_company_form_label">
                  <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="signup_company_form_field">
                  <Field
                    name="lastName"
                    type="text"
                    id="signup_company_from_field_view"
                  />
                </div>
                <div className="signup_company_form_field_handle">
                  <div id="signup_company_form_error_view">
                    <ErrorMessage name="lastName" />
                  </div>
                </div>
              </div> */}

              <div className="signup_company_form_email">
                <div className="signup_company_form_label">
                  <label htmlFor="email">Work Email</label>
                </div>
                <div className="signup_company_form_field">
                  <Field
                    name="workEmail"
                    type="email"
                    id="signup_company_from_field_view"
                  />
                </div>
                <div className="signup_company_form_field_handle">
                  <div id="signup_company_form_error_view">
                    <ErrorMessage name="workEmail" />
                  </div>
                </div>
              </div>

              <div className="signup_company_form_password">
                <div className="signup_company_form_label">
                  <label htmlFor="password">Password</label>
                </div>
                <div className="signup_company_form_field">
                  <Field
                    name="password"
                    type="password"
                    id="signup_company_from_field_view"
                  />
                </div>
                <div className="signup_company_form_field_handle">
                  <div id="signup_company_form_error_view">
                    <ErrorMessage name="password" />
                  </div>
                </div>
              </div>

              <div className="signup_company_form_cpassword">
                <div className="signup_company_form_label">
                  <label htmlFor="confirm_password">Confirm Password</label>
                </div>
                <div className="signup_company_form_field">
                  <Field
                    name="confirm_password"
                    type="password"
                    id="signup_company_from_field_view"
                  />
                </div>
                <div className="signup_company_form_field_handle">
                  <div id="signup_company_form_error_view">
                    <ErrorMessage name="confirm_password" />
                  </div>
                </div>
              </div>

              <div className="signup_company_form_button">
                <button type="submit" id="sigbnup_company_page_button_view">
                  Submit
                </button>
              </div>
            </Form>
          </div>
          <div className="signup_company_form_image_section col-md-6">
            <img
              src={SignupWorkerImage}
              alt="workerImage"
              className="signup_company_form_image_view"
            />
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default SignupPagecompany;
