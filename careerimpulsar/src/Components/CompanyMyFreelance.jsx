import React, { useEffect, useState } from "react";
import "../css/freelancelisting.css";
const CompanyMyFreelance = () => {
  const [ttitle, setttitle] = useState([]);
  const [tdescription, settdescription] = useState([]);
  const [wduration, setwduration] = useState([]);
  const [omoney, setomoney] = useState([]);
  const [cname, setcname] = useState([]);
  const [postedBy, setpostedBy] = useState([]);

  const getFreelancePostingList = async () => {
    try {
      const response = await fetch("/myFreelancing", {
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
        setttitle((ttitle) => [...ttitle, element.ttitle]);
        settdescription((tdescription) => [
          ...tdescription,
          element.tdescription,
        ]);
        setwduration((wduration) => [...wduration, element.wduration]);
        setomoney((omoney) => [...omoney, element.omoney]);
        setcname((cname) => [...cname, element.companyName]);
        setpostedBy((postedBy) => [...postedBy, element.postedby]);
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
    getFreelancePostingList();
  }, []);
  return (
    <div className="freelance_listing_page">
      <div className="freelance_listing_page_view">
        <div className="freelance_listing_page_jobs">
          {postedBy.map((element, key) => (
            <div className="freelance_info">
              <div className="freelance_info_view">
                <div className="freelance_info_view_other_details">
                  <div className="freelance_info_view_other_details_view">
                    <div className="freelance_info_view_other_details_label">
                      Posted By:
                    </div>
                    <div className="freelance_info_view_other_details_info">
                      {cname[key]}
                    </div>
                  </div>
                  <div className="freelance_info_view_other_details_view">
                    <div className="freelance_info_view_other_details_label">
                      Task:
                    </div>
                    <div className="freelance_info_view_other_details_info">
                      {ttitle[key]}
                    </div>
                  </div>
                  <div className="freelance_info_view_other_details_view">
                    <div className="freelance_info_view_other_details_label">
                      Task Description:
                    </div>
                    <div className="freelance_info_view_other_details_info">
                      {tdescription[key]}
                    </div>
                  </div>
                  <div className="freelance_info_view_other_details_view">
                    <div className="freelance_info_view_other_details_label">
                      Time to Complete Task:
                    </div>
                    <div className="freelance_info_view_other_details_info">
                      {wduration[key]}
                    </div>
                  </div>
                  <div className="freelance_info_view_other_details_view">
                    <div className="freelance_info_view_other_details_label">
                      Pay:
                    </div>
                    <div className="freelance_info_view_other_details_info">
                      {omoney[key] + " $"}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="freelance_info_apply">
                <button
                  type="button"
                  id="freelance_info_view_apply_button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  //onClick={togglePop}
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

export default CompanyMyFreelance;
