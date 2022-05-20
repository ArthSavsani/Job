import React, { useEffect, useState } from "react";
import "../css/joblisting.css";
const JobListing = (props) => {
  //console.log(props);
  var obj = { props };
  //console.log(obj);
  const [acompany, setAcompany] = useState([]);
  const [cname, setCName] = useState([]);
  const [course, setCourse] = useState([]);
  const [experiance, setExperiance] = useState([]);
  const [jobtitle, setJobTitle] = useState([]);
  const [jobtype, setJobType] = useState([]);
  const [location, setlocation] = useState([]);
  const [mskills, setmskills] = useState([]);
  const [oskills, setoskills] = useState([]);
  const [position, setposition] = useState([]);
  const [postedby, setpostedby] = useState([]);
  const [qualifications, setqualifications] = useState([]);
  const [salary, setsalary] = useState([]);
  const [time, settime] = useState([]);
  const [wid, setwid] = useState(props.wid);
  const [name, setName] = useState(props.name);

  const getjobPostingList = async () => {
    try {
      const response = await fetch("/workerDashboard/getJobsPosting", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      var data = await response.json();
      //console.log(data);
      data.forEach((element) => {
        //data_arr.push(element);
        setAcompany((acompany) => [...acompany, element.aboutcompany]);
        setCName((cname) => [...cname, element.companyName]);
        setExperiance((experiance) => [...experiance, element.experiance]);
        setJobTitle((jobtitle) => [...jobtitle, element.jobtitle]);
        setJobType((jobtype) => [...jobtype, element.jobtype]);
        setlocation((location) => [...location, element.location]);
        setmskills((mskills) => [...mskills, element.mskills]);
        setoskills((oskills) => [...oskills, element.oskills]);
        setposition((position) => [...position, element.position]);
        setpostedby((postedby) => [...postedby, element.postedby]);
        setqualifications((qualifications) => [
          ...qualifications,
          element.qualifications,
        ]);
        setsalary((salary) => [...salary, element.salary]);
        settime((time) => [...time, element.time]);
        setCourse((course) => [...course, element.course]);
      });
      // if (!data) {
      //   const error = new Error(response.error);
      //   throw error;
      // }
    } catch (error) {
      console.log(error);
    }
  };
  const submitApplicationForJob = async () => {
    try {
      const res = await fetch("/workerDashboard/getJobsPosting/applyForJob", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj.props),
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getjobPostingList();
    setwid(props.wid);
    setName(props.name);
  }, []);
  return (
    <div className="job_listing_page">
      <div className="job_listing_page_view">
        <div className="job_listing_page_jobs">
          {postedby.map((element, key) => (
            <div className="job_info">
              <div className="job_info_view">
                <div className="job_info_view_abpout_name">
                  <div className="job_info_view_company_name">{cname[key]}</div>
                  <div className="job_info_view_about_company">
                    {acompany[key]}
                  </div>
                </div>
                <div className="job_info_view_type_location">
                  <div className="job_info_view_type">{jobtype[key]}</div>
                  <div className="job_info_view_location">{location[key]}</div>
                </div>
                <div className="job_info_view_other_details">
                  <div className="job_info_view_other_details_view">
                    <div className="job_info_view_other_details_label">
                      Position:
                    </div>
                    <div className="job_info_view_other_details_info">
                      {jobtitle[key]}
                    </div>
                  </div>
                  <div className="job_info_view_other_details_view">
                    <div className="job_info_view_other_details_label">
                      Experiance:
                    </div>
                    <div className="job_info_view_other_details_info">
                      {experiance[key]}
                    </div>
                  </div>
                  <div className="job_info_view_other_details_view">
                    <div className="job_info_view_other_details_label">
                      salary:
                    </div>
                    <div className="job_info_view_other_details_info">
                      {salary[key] + " LPA"}
                    </div>
                  </div>
                  <div className="job_info_view_other_details_view">
                    <div className="job_info_view_other_details_label">
                      Skills:
                    </div>
                    <div className="job_info_view_other_details_info">
                      {mskills[key]}
                    </div>
                  </div>
                  <div className="job_info_view_other_details_view">
                    <div className="job_info_view_other_details_label">
                      Optional Skills:
                    </div>
                    <div className="job_info_view_other_details_info">
                      {oskills[key]}
                    </div>
                  </div>
                  <div className="job_info_view_other_details_view">
                    <div className="job_info_view_other_details_label">
                      Course:
                    </div>
                    <div className="job_info_view_other_details_info">
                      {course[key]}
                    </div>
                  </div>
                </div>
              </div>
              <div className="job_info_apply">
                <button
                  type="submit"
                  id="job_info_view_apply_button"
                  onClick={submitApplicationForJob}
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
