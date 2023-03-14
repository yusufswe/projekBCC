import React from 'react'
import Navbar from '../../../components/partials/appbar/Navbar'
import foto from "../../../assets/student/deadlineapply.png";
import { Link } from 'react-router-dom';

const DaftarTerpilih = () => {
  return (
    <div>
        <Navbar/>
        <br /><br /><br />
        <div className='w-full h-[800px] bg-BeauBlue'>
            <h1 className='absolute font-sans font-bold text-3xl ml-[100px] mt-[70px]'>Dashboard Student</h1>
            <Link to="/dashboard"><h3 className='absolute font-sans font-bold text-xl ml-[100px] mt-[170px] cursor-pointer'>Lamaran Saya</h3></Link>
            <Link to="/daftarterpilih"><h3 className='absolute font-sans font-bold text-xl ml-[260px] mt-[170px] cursor-pointer border-b-2 border-transparent border-Black'>Masuk Daftar Terpilih</h3></Link>
        <div className='absolute w-[551px] h-[319px] bg-BlueDark rounded-md mt-[250px] ml-[90px]'>
            <h3 className='absolute font-sans font-semibold text-White text-2xl mt-[30px] ml-[20px]'>Back End</h3>
            <h3 className='absolute font-sans font-semibold text-White mt-[70px] ml-[20px]'>Tokopedia</h3>
            <img src={foto} alt="" className='absolute mt-[140px] ml-[20px]'/>
            <h2 className='absolute font-sans font-semibold text-White mt-[140px] ml-[60px]'>Applied on 20 February 2023</h2>
            <button className='mt-[190px] ml-[15px] absolute font-sans font-bold bg-Zomp rounded-md h-[44px] text-base px-3 py-2 hover:scale-105 duration-400'>Accepted</button>
            <button className='mt-[270px] ml-[435px] absolute font-sans font-bold bg-BlueLight rounded-md h-[44px] text-base px-3 py-2 hover:scale-105 duration-400'>Follow up</button>
        </div>
        </div>
    </div>
  )
}

export default DaftarTerpilih;
