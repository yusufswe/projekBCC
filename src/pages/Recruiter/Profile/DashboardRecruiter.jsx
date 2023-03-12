import React from 'react'
import foto from "../../../assets/student/deadlineapply.png";
import { Link } from 'react-router-dom';
import NavbarRecruiter from '../../../components/partials/appbar/NavbarRecruiter';

const DashboardRecruiter = () => {
  return (
    <div>
        <NavbarRecruiter/>
        <br /><br /><br />
        <div className='w-full h-[800px] bg-BeauBlue'>
            <h1 className='absolute font-sans font-bold text-3xl ml-[100px] mt-[70px]'>Dashboard Recruiter</h1>
            <Link to="/dashboardrecruiter"><h3 className='absolute font-sans font-bold text-xl ml-[100px] mt-[170px] cursor-pointer'>Lowongan Saya</h3></Link>
            <Link to="/pelamar"><h3 className='absolute font-sans font-bold text-xl ml-[290px] mt-[170px] cursor-pointer'>Pelamar / Applier</h3></Link>
        <div className='absolute w-[551px] h-[319px] bg-BlueDark rounded-2xl mt-[250px] ml-[90px]'>
            <h3 className='absolute font-sans font-semibold text-White text-2xl mt-[30px] ml-[20px]'>Front End</h3>
            <h3 className='absolute font-sans text-White mt-[70px] ml-[20px]'>Standar post</h3>
            <img src={foto} alt="" className='absolute mt-[160px] ml-[20px]'/>
            <h2 className='absolute font-sans font-semibold text-White mt-[120px] ml-[25px]'>2 total applier</h2>
            <h2 className='absolute font-sans font-semibold text-White mt-[160px] ml-[60px]'>Closed on 20 February 2023</h2>
            <button className='mt-[200px] ml-[15px] absolute font-sans font-bold bg-ChineseBlue rounded-2xl px-3 py-2 hover:scale-105 duration-400'>Pending</button>
            <button className='mt-[270px] ml-[455px] absolute font-sans font-bold bg-BlueLight rounded-2xl px-3 py-2 hover:scale-105 duration-400'>Cancel</button>
        </div>
        <div className='absolute w-[551px] h-[319px] bg-BlueDark rounded-2xl mt-[250px] ml-[690px]'>
            <h3 className='absolute font-sans font-semibold text-White text-2xl mt-[30px] ml-[20px]'>Back End</h3>
            <h3 className='absolute font-sans text-White mt-[70px] ml-[20px]'>Professional post</h3>
            <img src={foto} alt="" className='absolute mt-[160px] ml-[20px]'/>
            <h2 className='absolute font-sans font-semibold text-White mt-[120px] ml-[25px]'>2 total applier</h2>
            <h2 className='absolute font-sans font-semibold text-White mt-[160px] ml-[60px]'>Closed on 20 February 2023</h2>
            <button className='mt-[200px] ml-[15px] absolute font-sans font-bold bg-ChineseBlue rounded-2xl px-3 py-2 hover:scale-105 duration-400'>Pending</button>
            <button className='mt-[270px] ml-[455px] absolute font-sans font-bold bg-BlueLight rounded-2xl px-3 py-2 hover:scale-105 duration-400'>Cancel</button>
        </div>
        </div>
    </div>
  )
}

export default DashboardRecruiter
