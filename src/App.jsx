import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Internfair from './pages/Internfair/Internfair';
import HomeStudent from './pages/Home/HomeStudent';

function App() {
  return (
     <div className="App">
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<HomeStudent/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>
           <Route path='/internfair' element={<Internfair/>}/>
         </Routes>
       </BrowserRouter>
     </div>
  );
}

export default App;