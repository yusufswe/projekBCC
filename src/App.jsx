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
           <Route path='/insightrecruiter' element={<InsightRecruiter/>}/>
           <Route path='/internfairrecruiter' element={<InternfairRecruiter/>}/>
           <Route path='/post' element={<Post/>}/>

         </Routes>
       </BrowserRouter>
     </div>
  );
}

export default App;