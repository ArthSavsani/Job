import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../css/companypostjob.css";
const CompanyPostJob = () => {
  return (
    <Formik
      initialValues={{
        jobtitle: "",
        experiance: "",
        location: "",
        jobtype: "",
        position: "",
        aboutcompany: "",
        qualifications: "",
        course: "",
        salary: "",
        mskills: "",
        oskills: "",
        time: "",
      }}
      validationSchema={Yup.object({
        jobtitle: Yup.string().required("Required"),
        experiance: Yup.number().required("Required"),
        location: Yup.string().required("Required"),
        jobtype: Yup.string().required("Required"),
        position: Yup.string().required("Required"),
        aboutcompany: Yup.string().required("Required"),
        qualifications: Yup.string().required("Required"),
        course: Yup.string().required("Required"),
        salary: Yup.string().required("Required"),
        mskills: Yup.string().required("Required"),
        oskills: Yup.string().required("Required"),
        time: Yup.string().required("Required"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        //console.log(values);
        const res = await fetch("/companyDashboard/CompanyPostJob", {
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
          toast.success("Job Posted  Successfully...", {
            position: "top-center",
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("Job Posting Failed...", {
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
      <div className="company_post_job_page">
        <div className="company_post_job_page_view">
          <div className="company_post_job_page_form_details_section">
            <Form className="company_post_job_page_form">
              <div className="company_post_job_page_form_view row">
                <div className="company_post_job_page_form_title col-md-3">
                  <div className="company_post_job_page_label">
                    <label htmlFor="JobTitle" class="form-label">
                      Job Title
                    </label>
                  </div>
                  <div className="company_post_job_page_form_field">
                    <Field
                      name="jobtitle"
                      type="text"
                      id="company_post_job_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_job_page_form_field_handle">
                    <div id="company_post_job_page_form_error_view">
                      <ErrorMessage name="jobtitle" />
                    </div>
                  </div>
                </div>

                <div className="company_post_job_page_form_experiance col-md-3">
                  <div className="company_post_job_page_label">
                    <label htmlFor="experiance" class="form-label">
                      Experiance In Years
                    </label>
                  </div>
                  <div className="company_post_job_page_form_field">
                    <Field
                      name="experiance"
                      type="text"
                      id="company_post_job_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_job_page_form_field_handle">
                    <div id="company_post_job_page_form_error_view">
                      <ErrorMessage name="experiance" />
                    </div>
                  </div>
                </div>

                <div className="company_post_job_page_form_working_location col-md-3">
                  <div className="company_post_job_page_label">
                    <label htmlFor="location" class="form-label">
                      working Location
                    </label>
                  </div>
                  <div className="company_post_job_page_form_field">
                    <Field
                      name="location"
                      type="text"
                      id="company_post_job_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_job_page_form_field_handle">
                    <div id="company_post_job_page_form_error_view">
                      <ErrorMessage name="location" />
                    </div>
                  </div>
                </div>

                <div className="company_post_job_page_form_jobtype col-md-3">
                  <div className="company_post_job_page_label">
                    <label htmlFor="jobtype" class="form-label">
                      Type
                    </label>
                  </div>
                  <div className="company_post_job_page_form_field">
                    <Field
                      name="jobtype"
                      type="text"
                      id="company_post_job_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_job_page_form_field_handle">
                    <div id="company_post_job_page_form_error_view">
                      <ErrorMessage name="jobtype" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="company_post_job_page_form_view row">
                <div className="company_post_job_page_form_about_position col-md-12">
                  <div className="company_post_job_page_label">
                    <label htmlFor="position" class="form-label">
                      About Position
                    </label>
                  </div>
                  <div className="company_post_job_page_form_field">
                    <Field
                      as="textarea"
                      name="position"
                      type="textarea"
                      id="company_post_job_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_job_page_form_field_handle">
                    <div id="company_post_job_page_form_error_view">
                      <ErrorMessage name="position" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="company_post_job_page_form_view row">
                <div className="company_post_job_page_form_about_company col-md-12">
                  <div className="company_post_job_page_label">
                    <label htmlFor="aboutcompany" class="form-label">
                      About Company
                    </label>
                  </div>
                  <div className="company_post_job_page_form_field">
                    <Field
                      as="textarea"
                      name="aboutcompany"
                      type="text"
                      id="company_post_job_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_job_page_form_field_handle">
                    <div id="company_post_job_page_form_error_view">
                      <ErrorMessage name="aboutcompany" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="company_post_job_page_form_view row">
                <div className="company_post_job_page_form_qualifications col-md-4">
                  <div className="company_post_job_page_label">
                    <label htmlFor="qualifications" class="form-label">
                      Qualification
                    </label>
                  </div>

                  <div className="company_post_job_page_form_field">
                    <Field
                      name="qualifications"
                      type="text"
                      id="company_post_job_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_job_page_form_field_handle">
                    <div id="company_post_job_page_form_error_view">
                      <ErrorMessage name="qualifications" />
                    </div>
                  </div>
                </div>

                <div className="company_post_job_page_form_course col-md-4">
                  <div className="company_post_job_page_label">
                    <label htmlFor="course" class="form-label">
                      Branch
                    </label>
                  </div>
                  <div className="company_post_job_page_form_field">
                    <Field
                      name="course"
                      type="text"
                      id="company_post_job_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_job_page_form_field_handle">
                    <div id="company_post_job_page_form_error_view">
                      <ErrorMessage name="course" />
                    </div>
                  </div>
                </div>

                <div className="company_post_job_page_form_salary col-md-4">
                  <div className="company_post_job_page_label">
                    <label htmlFor="salary" class="form-label">
                      Salary in LPA
                    </label>
                  </div>
                  <div className="company_post_job_page_form_field">
                    <Field
                      name="salary"
                      type="text"
                      id="company_post_job_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_job_page_form_field_handle">
                    <div id="company_post_job_page_form_error_view">
                      <ErrorMessage name="salary" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="company_post_job_page_form_view row">
                <div className="company_post_job_page_form_mskills col-md-4">
                  <div className="company_post_job_page_label">
                    <label htmlFor="mskills" class="form-label">
                      Skills
                    </label>
                  </div>
                  <div className="company_post_job_page_form_field">
                    <Field
                      name="mskills"
                      type="text"
                      id="company_post_job_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_job_page_form_field_handle">
                    <div id="company_post_job_page_form_error_view">
                      <ErrorMessage name="mskills" />
                    </div>
                  </div>
                </div>

                <div className="company_post_job_page_form_oskills col-md-4">
                  <div className="company_post_job_page_label">
                    <label htmlFor="oskills" class="form-label">
                      Good To Have Skills
                    </label>
                  </div>
                  <div className="company_post_job_page_form_field">
                    <Field
                      name="oskills"
                      type="text"
                      id="company_post_job_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_job_page_form_field_handle">
                    <div id="company_post_job_page_form_error_view">
                      <ErrorMessage name="oskills" />
                    </div>
                  </div>
                </div>

                <div className="company_post_job_page_form_time col-md-4">
                  <div className="company_post_job_page_label">
                    <label htmlFor="time" class="form-label">
                      Working Time
                    </label>
                  </div>
                  <div className="company_post_job_page_form_field">
                    <Field
                      name="time"
                      type="text"
                      id="company_post_job_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_job_page_form_field_handle">
                    <div id="company_post_job_page_form_error_view">
                      <ErrorMessage name="time" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="company_post_job_page_form_view row">
                <div className="company_post_job_page_form_button col-md-12">
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

export default CompanyPostJob;
