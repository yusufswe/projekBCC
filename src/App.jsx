import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Internfair from "./pages/Student/Internfair";
import Insight from "./pages/Student/Insight";
import HomeStudent from "./pages/Student/HomeStudent";
import HomeRecruiter from "./pages/Recruiter/HomeRecruiter";
import InsightRecruiter from "./pages/Recruiter/InsightRecruiter";
import InternfairRecruiter from "./pages/Recruiter/InternfairRecruiter";
import Post from "./pages/Recruiter/Post";
import PilihanRegistrasi from "./pages/Login/PilihanRegistrasi";
import ForgotPassword from "./pages/Login/ForgotPassword";
import EndRegisterRecruiter from "./pages/Recruiter/Register/EndRegisterRecruiter";
import EndRegisterStudent from "./pages/Student/Register/EndRegisterStudent";
import FormVerif from "./Auth/Student/FormVerif";
import FormKeahlian from "./pages/Student/Register/FormKeahlian";
import Discover from "./pages/Student/Discover";
import Talent from "./pages/Recruiter/Talent";
import InternDetails from "./pages/Student/Discover/InternDetails";
import DetailStudents from "./pages/Student/Discover/DetailStudents";
import Students from "./pages/Student/Discover/Students";
import TalentDetails from "./pages/Recruiter/Talents/TalentDetails";
import DetailStudents2 from "./pages/Student/Discover/DetailStudents2";
import InternDetails2 from "./pages/Student/Discover/InternDetails2";
import TalentDetails2 from "./pages/Recruiter/Talents/TalentDetails2";
import InsightDetails from "./pages/Student/InsightDetails";
import ChangePassword from "./pages/Login/ChangePassword";
import Profile from "./pages/Student/Profile/Profile";
import Dashboard from "./pages/Student/Profile/Dashboard";
import ProfileRecruiter from "./pages/Recruiter/Profile/ProfileRecruiter";
import DashboardRecruiter from "./pages/Recruiter/Profile/DashboardRecruiter";
import DaftarTerpilih from "./pages/Student/Profile/DaftarTerpilih";
import Pelamar from "./pages/Recruiter/Profile/Pelamar";
import InsightDetails2 from "./pages/Student/InsightDetails2";
import InsightRecruiterDetails from "./pages/Recruiter/InsightRecruiterDetails";
import InsightRecruiterDetails2 from "./pages/Recruiter/InsightRecruiterDetails2";
import RegisterRecruiter from "./Auth/Recruiter/RegisterRecruiter";
import RegisterStudent from "./Auth/Student/RegisterStudent";
import Login from "./Auth/Login";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import AuthRoutes from "./Routes/AuthRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/profilerecruiter" element={<ProfileRecruiter />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/post" element={<Post />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboardrecruiter" element={<DashboardRecruiter />} />
          </Route>

          <Route element={<AuthRoutes />}>
            <Route path="/discover" element={<Discover />} />
            <Route path="/" element={<HomeStudent />} />
            <Route path="/homerecruiter" element={<HomeRecruiter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/studentregister" element={<RegisterStudent />} />
            <Route path="/recruiterregister" element={<RegisterRecruiter />} />
          </Route>

          <Route path="/internfair" element={<Internfair />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/insightdetails" element={<InsightDetails />} />
          <Route path="/insightdetails2" element={<InsightDetails2 />} />
          <Route path="/insightrecruiter" element={<InsightRecruiter />} />
          <Route
            path="/insightdetailsrecruiter"
            element={<InsightRecruiterDetails />}
          />
          <Route
            path="/insightdetailsrecruiter2"
            element={<InsightRecruiterDetails2 />}
          />
          <Route
            path="/internfairrecruiter"
            element={<InternfairRecruiter />}
          />

          <Route path="/registerverif" element={<PilihanRegistrasi />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/studentendregister" element={<EndRegisterStudent />} />
          <Route
            path="/recruiterendregister"
            element={<EndRegisterRecruiter />}
          />
          <Route path="/formverifmahasiswa" element={<FormVerif />} />
          <Route path="/formkeahlianmahasiswa" element={<FormKeahlian />} />
          <Route path="/talentdetails" element={<TalentDetails />} />
          <Route path="/talentdetails2" element={<TalentDetails2 />} />
          <Route path="/interndetails" element={<InternDetails />} />
          <Route path="/interndetails2" element={<InternDetails2 />} />
          <Route path="/liststudent" element={<Students />} />
          <Route path="/studentdetails" element={<DetailStudents />} />
          <Route path="/studentdetails2" element={<DetailStudents2 />} />
          <Route path="/daftarterpilih" element={<DaftarTerpilih />} />
          <Route path="/pelamar" element={<Pelamar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;