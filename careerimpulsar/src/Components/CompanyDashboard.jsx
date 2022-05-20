import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/companydashboard.css";
import { useNavigate } from "react-router-dom";
import CompanyPostJob from "./CompanyPostJob";
import CompanyPostInternship from "./CompanyPostInternship";
import CompanyPostFreelanceWork from "./CompanyPostFreelanceWork";

const CompanyDashboard = () => {
  const [companyId, setcompanyId] = useState("");
  const [jcount, setjcount] = useState(0);
  const navigate = useNavigate();
  const callCompanyDashboardAuthenticator = async () => {
    try {
      const response = await fetch("/companyDashboard", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      if (data) {
        setcompanyId(data.workEmail);
      }
      if (!data) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };
  // const getJobCount = async () => {
  //   try {
  //     const response = fetch("/companyDashboard/getJobCount", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     //const jdata = response.json();
  //     console.log((await response).json());
  //     setjcount(response);
  //     console.log(jcount);
  //     // if (!data) {
  //     //   const error = new Error(response.error);
  //     //   throw error;
  //     // }
  //   } catch (error) {
  //     console.log(error);
  //     navigate("/login");
  //   }
  // };

  // const getInternCount = () => {
  //   try {
  //     const response = fetch("/companyDashboard/getInternCount", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });
  //     const data = response.json();
  //     console.log(data);
  //     // if (!data) {
  //     //   const error = new Error(response.error);
  //     //   throw error;
  //     // }
  //   } catch (error) {
  //     console.log(error);
  //     navigate("/login");
  //   }
  // };

  // const getFreelanceCount = async () => {
  //   try {
  //     const response = await fetch("/companyDashboard/getFreelanceCount", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     // if (!data) {
  //     //   const error = new Error(response.error);
  //     //   throw error;
  //     // }
  //   } catch (error) {
  //     console.log(error);
  //     navigate("/login");
  //   }
  // };
  useEffect(() => {
    callCompanyDashboardAuthenticator();
  }, []);
  const [dropdownValue, setDropdownValue] = useState("Job");

  const handleDropdownChange = (e) => {
    e.preventDefault();
    setDropdownValue(e.target.value);
  };

  return (
    <div id="company_dashboard">
      <div className="navbar_section">
        <nav className="navbar navbar-light bg-light navbar-expand-lg sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              Career Impulsar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse company_toggler"
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/myJobs">
                    MyJobs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/myInternships">
                    MyInternships
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/myFreelancing">
                    MyFreelanceing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    LogOut
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav  mb-2 mb-lg-0">
                {/* <li className="nav-item">
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </li> */}
              </ul>
              {/* <ul className="navbar-nav  mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profile
                  </Link>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="#">
                        Profile Information
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul> */}
            </div>
          </div>
        </nav>
      </div>
      <div className="company_dashboard_cards">
        <div className="cmp_cards">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Jobs</h5>
              <p class="card-text">1</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Internships</h5>
              <p class="card-text">2</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Freelancing</h5>
              <p class="card-text">1</p>
            </div>
          </div>
        </div>
        <div className="Company_posting_work_activity">
          <div className="company_posting_work_activity_title">Post Work</div>
          <div className="company_posting_work_activity_menu">
            <div className="dropdown">
              <select
                className="dropdown-style"
                value={dropdownValue}
                onChange={handleDropdownChange}
                name="dropdown"
              >
                <option value="Job">Job</option>
                <option value="Internship">Internship</option>
                <option value="FreelanceWork">Freelance work</option>
              </select>

              {/* <select
                className="dropdown-style"
                value={dropdownValue}
                onChange={handleDropdownChange}
                name="dropdown"
              >
                <option value="Job">Job</option>
                <option value="Internship">Internship</option>
                <option value="FreelanceWork">Freelance work</option>
              </select> */}
            </div>
          </div>
        </div>
        <div className="Company_posting_work_activity_page">
          {(dropdownValue === "Job" && <CompanyPostJob />) ||
            (dropdownValue === "Internship" && <CompanyPostInternship />) ||
            (dropdownValue === "FreelanceWork" && <CompanyPostFreelanceWork />)}
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
