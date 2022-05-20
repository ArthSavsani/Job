import React, { useEffect, useState } from "react";
import "../css/internlisting.css";
const CompanyMyInterns = () => {
  const [acompany, setAcompany] = useState([]);
  const [cname, setCName] = useState([]);
  const [course, setCourse] = useState([]);
  const [internTitle, setinternTitle] = useState([]);
  const [interntype, setinternType] = useState([]);
  const [location, setlocation] = useState([]);
  const [mskills, setmskills] = useState([]);
  const [oskills, setoskills] = useState([]);
  const [internwork, setinternwork] = useState([]);
  const [qualifications, setqualifications] = useState([]);
  const [stipend, setstipend] = useState([]);
  const [duration, setduration] = useState([]);
  const [openings, setopenings] = useState([]);
  const [postedon, setpostedon] = useState([]);
  const [sdate, setsdate] = useState([]);
  const [postedBy, setpostedBy] = useState([]);
  const getInternPostingList = async () => {
    try {
      const response = await fetch("/myInternships", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      var data = await response.json();
      console.log(data);
      data.forEach((element) => {
        //data_arr.push(element);
        setAcompany((acompany) => [...acompany, element.aboutcompany]);
        setCName((cname) => [...cname, element.companyName]);
        setinternTitle((internTitle) => [...internTitle, element.Title]);
        setinternType((interntype) => [...interntype, element.type]);
        setlocation((location) => [...location, element.location]);
        setmskills((mskills) => [...mskills, element.mskills]);
        setoskills((oskills) => [...oskills, element.oskills]);
        setqualifications((qualifications) => [
          ...qualifications,
          element.qualifications,
        ]);
        setsdate((sdate) => [...sdate, element.sdate]);
        setinternwork((internwork) => [...internwork, element.internwork]);
        setpostedBy((postedBy) => [...postedBy, element.postedBy]);
        setopenings((openings) => [...openings, element.openings]);
        setduration((duration) => [...duration, element.duration]);
        setstipend((stipend) => [...stipend, element.stipend]);
        setpostedon((postedon) => [...postedon, element.postedOn]);
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
  useEffect(() => {
    getInternPostingList();
    // setwid(props.wid);
    // setName(props.name);
  }, []);
  return (
    <div className="intern_listing_page">
      <div className="intern_listing_page_view">
        <div className="intern_listing_page_jobs">
          {postedBy.map((element, key) => (
            <div className="intern_info">
              <div className="intern_info_view">
                <div className="intern_info_view_abpout_name">
                  <div className="intern_info_view_company_name">
                    {cname[key]}
                  </div>
                  <div className="intern_info_view_about_company">
                    {acompany[key]}
                  </div>
                </div>
                <div className="intern_info_view_type_location">
                  <div className="intern_info_view_type">{interntype[key]}</div>
                  <div className="intern_info_view_location">
                    {location[key]}
                  </div>
                </div>
                <div className="intern_info_view_other_details">
                  <div className="intern_info_view_other_details_view">
                    <div className="intern_info_view_other_details_label">
                      Position:
                    </div>
                    <div className="intern_info_view_other_details_info">
                      {internTitle[key]}
                    </div>
                  </div>
                  <div className="intern_info_view_other_details_view">
                    <div className="intern_info_view_other_details_label">
                      Profile Work:
                    </div>
                    <div className="intern_info_view_other_details_info">
                      {internwork[key]}
                    </div>
                  </div>
                  <div className="intern_info_view_other_details_view">
                    <div className="intern_info_view_other_details_label">
                      Stipend:
                    </div>
                    <div className="intern_info_view_other_details_info">
                      {stipend[key]}
                    </div>
                  </div>
                  <div className="intern_info_view_other_details_view">
                    <div className="intern_info_view_other_details_label">
                      Skills:
                    </div>
                    <div className="intern_info_view_other_details_info">
                      {mskills[key]}
                    </div>
                  </div>
                  <div className="intern_info_view_other_details_view">
                    <div className="intern_info_view_other_details_label">
                      Optional Skills:
                    </div>
                    <div className="intern_info_view_other_details_info">
                      {oskills[key]}
                    </div>
                  </div>
                  <div className="intern_info_view_other_details_view">
                    <div className="intern_info_view_other_details_label">
                      Course:
                    </div>
                    <div className="intern_info_view_other_details_info">
                      {course[key]}
                    </div>
                  </div>
                  <div className="intern_info_view_other_details_view">
                    <div className="intern_info_view_other_details_label">
                      Qualifications:
                    </div>
                    <div className="intern_info_view_other_details_info">
                      {qualifications[key]}
                    </div>
                  </div>
                  <div className="intern_info_view_other_details_view">
                    <div className="intern_info_view_other_details_label">
                      Starting Date:
                    </div>
                    <div className="intern_info_view_other_details_info">
                      {sdate[key]}
                    </div>
                  </div>
                  <div className="intern_info_view_other_details_view">
                    <div className="intern_info_view_other_details_label">
                      Duration:
                    </div>
                    <div className="intern_info_view_other_details_info">
                      {duration[key]}
                    </div>
                  </div>
                  <div className="intern_info_view_other_details_view">
                    <div className="intern_info_view_other_details_label">
                      No Of Openings:
                    </div>
                    <div className="intern_info_view_other_details_info">
                      {openings[key]}
                    </div>
                  </div>
                  <div className="intern_info_view_other_details_view">
                    <div className="intern_info_view_other_details_label">
                      Posted On:
                    </div>
                    <div className="intern_info_view_other_details_info">
                      {postedon[key]}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="intern_info_apply">
                <button
                  type="submit"
                  id="job_info_view_apply_button"
                  // onClick={submitApplicationForJob}
                >
                  Apply
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyMyInterns;
