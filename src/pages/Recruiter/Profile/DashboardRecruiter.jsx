import {React, useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import NavbarRecruiter from '../../../components/partials/appbar/NavbarRecruiter';
import DetailLowonganCard from '../../../components/Card/DetailLowonganCard';

const DashboardRecruiter = () => {
  return (
    <div>
        <NavbarRecruiter/>
        <br /><br /><br />
        <div className='w-full h-[1000px] bg-BeauBlue'>
            <h1 className='absolute font-sans font-bold text-3xl ml-[100px] mt-[70px]'>Dashboard Recruiter</h1>
            <Link to="/dashboardrecruiter">
              <h3 className='absolute font-sans font-bold text-xl ml-[100px] mt-[170px] cursor-pointer border-b-2 border-transparent border-Black'>Lowongan Saya</h3></Link>
            <Link to="/pelamar"><h3 className='absolute font-sans font-bold text-xl ml-[290px] mt-[170px] cursor-pointer'>Pelamar / Applier</h3></Link>
        
        </div>
    </div>
  )
}

export default DashboardRecruiter
