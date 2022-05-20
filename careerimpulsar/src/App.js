import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import Homepage from "./Components/Homepage";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import ForgotPassword from './Components/ForgotPassword';
import SignupWorker from './Components/SignupWorker';
import WorkerDashboard from './Components/WorkerDashboard';
import WorkerProfile from './Components/WorkerProfile';
import SignupPagecompany from './Components/SignupPagecompany';
import CompanyDashboard from './Components/CompanyDashboard';
import CompanyPostJob from './Components/CompanyPostJob';
import CompanyPostInternship from './Components/CompanyPostInternship';
import CompanyPostFreelanceWork from './Components/CompanyPostFreelanceWork';
import JobListing from './Components/JobListing';
import InternListing from './Components/InternListing';
import FreelanceListing from './Components/FreelanceListing';
import CompanyMyJobs from './Components/CompanyMyJobs';
import CompanyMyInterns from './Components/CompanyMyInterns';
import CompanyMyFreelance from './Components/CompanyMyFreelance';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer limit={1} />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/workerSignup" element={<SignupWorker />}></Route>
          <Route path="/workerDashboard" element={<WorkerDashboard />}>
            <Route path="/workerDashboard/getJobsPosting" element={<JobListing />}></Route>
            <Route path="/workerDashboard/getInternPosting" element={<InternListing />}></Route>
            <Route path="/workerDashboard/getFreelancePosting" element={<FreelanceListing />}></Route>
          </Route>
          <Route path="/workerProfile" element={<WorkerProfile />}></Route>
          <Route path="/companysignup" element={<SignupPagecompany />}></Route>
          <Route path="/companyDashboard" element={<CompanyDashboard />}>
            <Route parth="/companyPostJob" element={<CompanyPostJob />}></Route>
            <Route parth="/companyPostInternship" element={<CompanyPostInternship />}></Route>
            <Route parth="/companyPostFreelance" element={<CompanyPostFreelanceWork />}></Route>
          </Route>
          <Route path="/myJobs" element={<CompanyMyJobs />}></Route>
          <Route path="/myInternships" element={<CompanyMyInterns />}></Route>
          <Route path="/myFreelancing" element={<CompanyMyFreelance />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
