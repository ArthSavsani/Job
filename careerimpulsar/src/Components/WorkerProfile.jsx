import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const WorkerProfile = () => {
  const navigate = useNavigate();
  const callWorkerProfileAuthenticator = async () => {
    try {
      const response = await fetch("/workerProfile", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
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
    callWorkerProfileAuthenticator();
  }, []);

  return (
    <div>
      <div className="worker_profile">WorkerProfile</div>
    </div>
  );
};

export default WorkerProfile;
