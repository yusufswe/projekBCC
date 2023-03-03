import React from 'react'

const HeroComp = () => {
  return (
    <div>
      <div>
      <img className='w-full h-[885px]' src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
      </div>

      <div className='w-full h-[920px] bg-white'>
        <h1 className='text-7xl font-semibold mt-[150px] ml-[150px]'>Cari Lowongan</h1>
        <h1 className='text-7xl font-semibold mt-[150px] ml-[1200px]'>Apply</h1>
        <h1 className='text-7xl font-semibold mt-[150px] ml-[200px]'>Contact</h1>
        <h1 className='text-7xl font-semibold mt-[150px] ml-[1100px]'>Hired</h1>
      </div>
           
      <div className='w-full h-[829px] bg-[#656565]'>
        <div className='w-[925px] h-[415px] bg-[#D9D9D9] absolute ml-[300px] mt-[180px]'>
          <h2 className='text-6xl font-bold mt-[120px] ml-[65px] absolute'>Get the trending</h2>
          <h2 className='absolute font-bold text-5xl ml-[65px] mt-[195px]'>internship right now</h2>
          <button className='absolute bg-[#4A4B50] rounded-2xl text-white py-2 px-3 hover:scale-105 duration-300 mt-[270px] ml-[60px] '>Apply now</button>
          <div className='w-[238px] h-[233px] bg-[#9F9F9F] mt-[90px] ml-[650px]'>
          </div>
        </div>
      </div>

      <div className='w-full h-[1241px] bg-[#9F9F9F] flex-col relative'>
        <div className='w-[306px] h-[306px] bg-[#D9D9D9] ml-[1050px] absolute mt-[100px]'>
        </div>
        <p className='text-2xl font-semibold ml-[1035px] absolute mt-[430px]'>Adi Intern UI/UX Designer Shopee</p>
        <p className='text-2xl font-semibold ml-[1150px] absolute mt-[470px]'>2022 / 2023</p>
        <div className='w-[306px] h-[306px] mt-[100px] absolute ml-[200px] bg-[#D9D9D9]'>
        </div>
        <p className='text-2xl font-semibold ml-[175px] absolute mt-[430px]'>Adi Intern UI/UX Designer Shopee</p>
        <p className='text-2xl font-semibold ml-[290px] absolute mt-[470px]'>2022 / 2023</p>
        
        <div className='w-[306px] h-[306px] bg-[#D9D9D9] absolute mt-[600px] ml-[1050px]'> 
        </div>
        <p className='text-2xl font-semibold ml-[1035px] absolute mt-[930px]'>Adi Intern UI/UX Designer Shopee</p>
        <p className='text-2xl font-semibold ml-[1145px] absolute mt-[970px]'>2022/ 2023</p>

        <div className='w-[306px] h-[306px] bg-[#D9D9D9] absolute mt-[600px] ml-[200px]'>
        </div>
        <p className='text-2xl font-semibold ml-[175px] absolute mt-[930px]'>Adi Intern UI/UX Designer Shopee</p>
        <p className='text-2xl font-semibold ml-[285px] absolute mt-[970px]'>2022 / 2023</p>
        <button className='absolute bg-[#4A4B50] rounded-2xl text-white py-2 px-3 hover:scale-105 duration-300 mt-[1110px] mx-auto ml-[680px] '>See more of their journey</button>
      </div>

    </div>
  )
}

export default HeroComp
