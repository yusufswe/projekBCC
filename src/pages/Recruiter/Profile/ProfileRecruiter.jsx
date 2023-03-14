import React from 'react'
import bgProfile from"../../../assets/recruiter/profilerecruiter.jpg";
import NavbarRecruiter from '../../../components/partials/appbar/NavbarRecruiter';

const ProfileRecruiter = () => {
  return (
    <div>
      <NavbarRecruiter/>
      <br /><br /><br />  
      <div className='w-full h-[700px] bg-BeauBlue'>
        <div className='absolute w-[682px] h-[477px] bg-White rounded-3xl mt-[100px] ml-[150px] '>
          <img src={bgProfile} alt="" className='rounded-3xl'/>
          <button className='ml-[20px] mt-[40px] absolute font-sans font-bold bg-BlueLight rounded-md h-[44px] text-base 2xl px-3 py-2 hover:scale-105 duration-400'>Edit Profile</button>
          <h3 className='absolute font-semibold mt-[120px] ml-[20px]'>Limit Post</h3>
          <h3 className='absolute font-semibold mt-[160px] ml-[20px]'>Member Since</h3>
          <h3 className='absolute font-sans font-bold mt-[125px] ml-[570px]'>2</h3>
          <h3 className='absolute font-sans font-bold mt-[165px] ml-[540px]'>Feb 2023</h3>
        </div>
        <div className='w-[445px] h-[393px] bg-White ml-[900px] mt-[100px] absolute  rounded-md text-base 2xl flex justify-center'>
          <h3 className='font-sans absolute text-xl font-semibold mt-[15px] '>Subscription for Unlimited posts</h3>
          <h3 className=' font-sans absolute  font-semibold mt-[65px] '>Professional Post</h3>
          <h3 className=' font-sans absolute  mt-[115px] ml-[50px]'>Dengan Profesional Post anda dapat lebih leluasa dalam menjangakau beragam mahasiswa yang berbakat dengan lowongan-lowongan yang anda post tanpa batasan</h3>
          <h3 className=' font-sans absolute  text-xl font-bold mt-[275px] '>Rp50.000</h3>
          <button className='absolute font-sans font-bold bg-BlueLight text-Black ml-[20px] mt-[320px] rounded-md h-[44px] text-base 2xl px-3 py-2 hover:scale-105 duration-400'>Subscribe Now</button>
        </div >
      </div>
    </div>
  )
}

export default ProfileRecruiter
