import React from 'react'
import Navbar from '../partials/appbar/Navbar';
import foto from "../../assets/student/deadlineapply.png";
import { Link } from 'react-router-dom';

const LamaranCard = ({posisi, perusahaan, status}) => {
  return (
    <div>
        <div className='absolute w-[551px] h-[319px] bg-BlueDark rounded-md mt-[250px] ml-[90px]'>
            <h3 className='absolute font-sans font-semibold text-White text-2xl mt-[30px] ml-[20px]'>{posisi}</h3>
            <h3 className='absolute font-sans font-semibold text-White mt-[70px] ml-[20px]'>{perusahaan}</h3>
            <img src={foto} alt="" className='absolute mt-[140px] ml-[20px]'/>
            <h2 className='absolute font-sans font-semibold text-White mt-[140px] ml-[60px]'>Applied on 20 February 2023</h2>
            <button className='mt-[190px] ml-[15px] absolute font-sans font-bold bg-ChineseBlue rounded-md h-[44px] text-base px-3 py-2 hover:scale-105 duration-400'>{status}</button>
            <button className='mt-[270px] ml-[455px] absolute font-sans font-bold bg-BlueLight rounded-md h-[44px] text-base px-3 py-2 hover:scale-105 duration-400'>Cancel</button>
        </div>
    </div>
  )
}

export default LamaranCard
