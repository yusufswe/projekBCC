import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import InternFair from './pages/InternFair';

function App() {
  return (
     <div className="App">
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>
           <Route path='/internfair' element={<InternFair/>}/>
         </Routes>
       </BrowserRouter>
     </div>
  );
}

export default App;