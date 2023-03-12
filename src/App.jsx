import './App.css';
import Login from './pages/Login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Internfair from './pages/Student/Internfair';
import Insight from './pages/Student/Insight';
import HomeStudent from './pages/Student/HomeStudent';
import HomeRecruiter from './pages/Recruiter/HomeRecruiter';
import InsightRecruiter from './pages/Recruiter/InsightRecruiter';
import InternfairRecruiter from './pages/Recruiter/InternfairRecruiter';
import Post from './pages/Recruiter/Post';
import PilihanRegistrasi from './pages/Login/PilihanRegistrasi';
import FormRegisterStudent from './pages/Student/Register/FormRegisterStudent';
import FormRegisterRecruiter from './pages/Recruiter/Register/FormRegisterRecruiter';
import ForgotPassword from './pages/Login/ForgotPassword';
import EndRegisterRecruiter from './pages/Recruiter/Register/EndRegisterRecruiter';
import EndRegisterStudent from './pages/Student/Register/EndRegisterStudent';
import FormVerif from './pages/Student/Register/FormVerif';
import FormKeahlian from './pages/Student/Register/FormKeahlian';
import Discover from './pages/Student/Discover';
import Talent from './pages/Recruiter/Talent';
import InternDetails from './pages/Student/Discover/InternDetails';
import DetailStudents from './pages/Student/Discover/DetailStudents';
import Students from './pages/Student/Discover/Students';
import TalentDetails from './pages/Recruiter/Talents/TalentDetails';
import DetailStudents2 from './pages/Student/Discover/DetailStudents2';
import InternDetails2 from './pages/Student/Discover/InternDetails2';
import TalentDetails2 from './pages/Recruiter/Talents/TalentDetails2';
import InsightDetails from './pages/Student/InsightDetails';
import ChangePassword from './pages/Login/ChangePassword';

function App() {
  return (
     <div className="App">
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<HomeStudent/>}/>
           <Route path='/homerecruiter' element={<HomeRecruiter/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/internfair' element={<Internfair/>}/>
           <Route path='/insight' element={<Insight/>}/>
           <Route path='/insightdetails' element={<InsightDetails/>}/>
           <Route path='/insightrecruiter' element={<InsightRecruiter/>}/>
           <Route path='/internfairrecruiter' element={<InternfairRecruiter/>}/>
           <Route path='/post' element={<Post/>}/>
           <Route path='/registerverif' element={<PilihanRegistrasi/>}/>
           <Route path='/studentregister' element={<FormRegisterStudent/>}/>
           <Route path='/recruiterregister' element={<FormRegisterRecruiter/>}/>
           <Route path='/forgotpassword' element={<ForgotPassword/>}/>
           <Route path='/changepassword' element={<ChangePassword/>}/>
           <Route path='/studentendregister' element={<EndRegisterStudent/>}/>
           <Route path='/recruiterendregister' element={<EndRegisterRecruiter/>}/>
           <Route path='/formverifmahasiswa' element={<FormVerif/>}/>
           <Route path='/formkeahlianmahasiswa' element={<FormKeahlian/>}/>
           <Route path='/discover' element={<Discover/>}/>
           <Route path='/talent' element={<Talent/>}/>
           <Route path='/talentdetails' element={<TalentDetails/>}/>
           <Route path='/talentdetails2' element={<TalentDetails2/>}/>
           <Route path='/interndetails' element={<InternDetails/>}/>
           <Route path='/interndetails2' element={<InternDetails2/>}/>
           <Route path='/liststudent' element={<Students/>}/>
           <Route path='/studentdetails' element={<DetailStudents/>}/>
           <Route path='/studentdetails2' element={<DetailStudents2/>}/>
         </Routes>
       </BrowserRouter>
     </div>
  );
}

export default App;