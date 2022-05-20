import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../css/companypostintern.css";

const CompanyPostInternship = () => {
  return (
    <Formik
      initialValues={{
        Title: "",
        type: "Full-Time",
        location: "",
        internwork: "",
        aboutcompany: "",
        qualifications: "",
        course: "",
        stipend: "",
        mskills: "",
        oskills: "",
        sdate: "",
        duration: "",
        openings: "",
      }}
      validationSchema={Yup.object({
        Title: Yup.string().required("Required"),
        type: Yup.string().required("Required"),
        location: Yup.string().required("Required"),
        internwork: Yup.string().required("Required"),
        aboutcompany: Yup.string().required("Required"),
        qualifications: Yup.string().required("Required"),
        course: Yup.string().required("Required"),
        stipend: Yup.string().required("Required"),
        mskills: Yup.string().required("Required"),
        oskills: Yup.string().required("Required"),
        sdate: Yup.string().required("Required"),
        duration: Yup.string().required("Required"),
        openings: Yup.number().required("Required OR must be number"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        //console.log(values);
        const res = await fetch("/companyDashboard/CompanyPostInternship", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        setSubmitting(true);
        console.log(res.status);
        //const data = await res.json();
        if (res.status === 400) {
          toast.warn("All the fields are required...", {
            position: "top-center",
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (res.status === 201) {
          toast.success("Internship Posted  Successfully...", {
            position: "top-center",
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("Internship Posting Failed...", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log("Internship Posting Failed...");
        }
      }}
    >
      <div className="company_post_intern_page">
        <div className="company_post_intern_page_view">
          <div className="company_post_intern_page_form_details_section">
            <Form className="company_post_intern_page_form">
              <div className="company_post_intern_page_form_view row">
                <div className="company_post_intern_page_form_title col-md-4">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="Title" class="form-label">
                      Title
                    </label>
                  </div>
                  <div className="company_post_intern_page_form_field">
                    <Field
                      name="Title"
                      type="text"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="Title" />
                    </div>
                  </div>
                </div>

                <div className="company_post_intern_page_form_type col-md-4">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="type" class="form-label">
                      Type
                    </label>
                  </div>
                  <div className="company_post_intern_page_form_field">
                    <Field
                      as="select"
                      name="type"
                      className="form-select form-control"
                      id="company_post_intern_page_from_field_view"
                    >
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                    </Field>
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="type" />
                    </div>
                  </div>
                </div>

                <div className="company_post_intern_page_form_working_location col-md-4">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="location" class="form-label">
                      working Location
                    </label>
                  </div>
                  <div className="company_post_intern_page_form_field">
                    <Field
                      name="location"
                      type="text"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="location" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="company_post_intern_page_form_view row">
                <div className="company_post_intern_page_form_about_intern_position col-md-12">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="internwork" class="form-label">
                      About Internship work
                    </label>
                  </div>
                  <div className="company_post_intern_page_form_field">
                    <Field
                      as="textarea"
                      name="internwork"
                      type="textarea"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="internwork" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="company_post_intern_page_form_view row">
                <div className="company_post_intern_page_form_about_company col-md-12">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="aboutcompany" class="form-label">
                      About Company
                    </label>
                  </div>
                  <div className="company_post_intern_page_form_field">
                    <Field
                      as="textarea"
                      name="aboutcompany"
                      type="text"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="aboutcompany" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="company_post_intern_page_form_view row">
                <div className="company_post_intern_page_form_qualifications col-md-4">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="qualifications" class="form-label">
                      Qualification
                    </label>
                  </div>

                  <div className="company_post_intern_page_form_field">
                    <Field
                      name="qualifications"
                      type="text"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="qualifications" />
                    </div>
                  </div>
                </div>

                <div className="company_post_intern_page_form_course col-md-4">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="course" class="form-label">
                      Branch
                    </label>
                  </div>
                  <div className="company_post_intern_page_form_field">
                    <Field
                      name="course"
                      type="text"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="course" />
                    </div>
                  </div>
                </div>

                <div className="company_post_intern_page_form_stipend col-md-4">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="stipend" class="form-label">
                      Stipend
                    </label>
                  </div>
                  <div className="company_post_intern_page_form_field">
                    <Field
                      name="stipend"
                      type="text"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="stipend" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="company_post_intern_page_form_view row">
                <div className="company_post_intern_page_form_mskills col-md-6">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="mskills" class="form-label">
                      Skills
                    </label>
                  </div>
                  <div className="company_post_intern_page_form_field">
                    <Field
                      name="mskills"
                      type="text"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="mskills" />
                    </div>
                  </div>
                </div>

                <div className="company_post_intern_page_form_oskills col-md-6">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="oskills" class="form-label">
                      Good To Have Skills
                    </label>
                  </div>
                  <div className="company_post_intern_page_form_field">
                    <Field
                      name="oskills"
                      type="text"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="oskills" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="company_post_intern_page_form_view row">
                <div className="company_post_intern_page_form_starting_date col-md-4">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="sdate" class="form-label">
                      Starting Date
                    </label>
                  </div>
                  <div className="company_post_intern_page_form_field">
                    <Field
                      name="sdate"
                      type="date"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="sdate" />
                    </div>
                  </div>
                </div>
                <div className="company_post_intern_page_form_duration col-md-4">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="duration" class="form-label">
                      Duration
                    </label>
                  </div>
                  <div className="company_post_intern_page_form_field">
                    <Field
                      name="duration"
                      type="text"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="duration" />
                    </div>
                  </div>
                </div>
                <div className="company_post_intern_page_form_noofopenings col-md-4">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="openings" class="form-label">
                      No Of Openings
                    </label>
                  </div>
                  <div className="company_post_intern_page_form_field">
                    <Field
                      name="openings"
                      type="number"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="openings" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="company_post_intern_page_form_view row">
                <div className="company_post_intern_page_form_button col-md-12">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default CompanyPostInternship;
