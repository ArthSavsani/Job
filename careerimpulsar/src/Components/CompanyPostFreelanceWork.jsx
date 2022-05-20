import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";
const CompanyPostFreelanceWork = () => {
  return (
    <Formik
      initialValues={{
        ttitle: "",
        tdescription: "",
        wduration: "",
        omoney: "",
      }}
      validationSchema={Yup.object({
        ttitle: Yup.string().required("Required"),
        tdescription: Yup.string().required("Required"),
        wduration: Yup.string().required("Required"),
        omoney: Yup.number().required("Required"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        //console.log(values);
        const res = await fetch("/companyDashboard/companyPostFreelance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        //console.log(res);
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
          toast.success("Freelance Work Posted  Successfully...", {
            position: "top-center",
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("Freelance Work Posting Failed...", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }}
    >
      <div className="company_post_intern_page">
        <div className="company_post_intern_page_view">
          <div className="company_post_intern_page_form_details_section">
            <Form className="company_post_intern_page_form">
              <div className="company_post_intern_page_form_view row">
                <div className="company_post_intern_page_form_task_title col-md-12">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="ttitle" class="form-label">
                      Task Title
                    </label>
                  </div>
                  <div className="company_post_intern_page_form_field">
                    <Field
                      name="ttitle"
                      type="textarea"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="ttitle" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="company_post_intern_page_form_view row">
                <div className="company_post_intern_page_form_task_description col-md-12">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="tdescription" class="form-label">
                      Task Description
                    </label>
                  </div>
                  <div className="company_post_intern_page_form_field">
                    <Field
                      as="textarea"
                      name="tdescription"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="tdescription" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="company_post_intern_page_form_view row">
                <div className="company_post_intern_page_form_duration col-md-6">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="wduration" class="form-label">
                      Work Duration
                    </label>
                  </div>

                  <div className="company_post_intern_page_form_field">
                    <Field
                      name="wduration"
                      type="text"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="wduration" />
                    </div>
                  </div>
                </div>
                <div className="company_post_intern_page_form_money col-md-6">
                  <div className="company_post_intern_page_label">
                    <label htmlFor="omoney" class="form-label">
                      Offered Money In $
                    </label>
                  </div>
                  <div className="company_post_intern_page_form_field">
                    <Field
                      name="omoney"
                      type="text"
                      id="company_post_intern_page_from_field_view"
                      class="form-control"
                    />
                  </div>
                  <div className="company_post_intern_page_form_field_handle">
                    <div id="company_post_intern_page_form_error_view">
                      <ErrorMessage name="omoney" />
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

export default CompanyPostFreelanceWork;
