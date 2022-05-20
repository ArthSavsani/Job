import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/workerdashboard.css";
import JobListing from "./JobListing";
import InternListing from "./InternListing";
import FreelanceListing from "./FreelanceListing";
function WorkerDashboard() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const callWorkerDashboardAuthenticator = async () => {
    try {
      const response = await fetch("/workerDashboard", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      setId(data._id);
      setName(data.firstName);
      //console.log(data);
      if (!data) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };
  useEffect(() => {
    callWorkerDashboardAuthenticator();
  }, []);

  const [navValue, setNavValue] = useState("Jobs");

  return (
    <div id="worker_dashboard">
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
              className="collapse navbar-collapse toggleit"
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <div
                    className="nav-link"
                    to="#"
                    onClick={() => setNavValue("Jobs")}
                  >
                    Jobs
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="nav-link"
                    to="#"
                    onClick={() => setNavValue("Internships")}
                  >
                    Internships
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="nav-link"
                    to="#"
                    onClick={() => setNavValue("Freelancing")}
                  >
                    Freelanceing
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" to="#">
                    Profile
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" to="#">
                    Logout
                  </div>
                </li>
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
      <div id="job_freelancing_intern_apply">
        {(navValue === "Jobs" && <JobListing wid={id} name={name} />) ||
          (navValue === "Internships" && <InternListing />) ||
          (navValue === "Freelancing" && <FreelanceListing />)}
      </div>
    </div>
  );
}

export default WorkerDashboard;
