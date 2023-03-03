import React from 'react'

const InternFairComp = () => {
  return (
    <div>
      <div className='w-full h-[435px] bg-[#D9D9D9]'>
        <h1 className='text-4xl font-bold absolute  mt-[220px] ml-[330px]'>Ikuti intern fair dan temukan pekerjaan idamanmu</h1>
      </div>
      
      <div className='w-full h-[500px] bg-white'>
      {/* GOJEK JOB FAIR */}
        <div className='w-[330px] h-[208px] absolute bg-[#D9D9D9] mt-[120px] ml-[100px]'>

        </div>
      {/* KOTAK END */}

        <p className='absolute text-3xl font-semibold mt-[370px] ml-[165px]'>Gojek job fair</p>
         {/* KOTAK 2 */}
         <div className='w-[330px] h-[208px] absolute bg-[#D9D9D9] mt-[120px] ml-[600px]'>

        </div>
        {/* KOTAK 2 END */}
        <p className='absolute text-3xl font-semibold mt-[370px] ml-[675px]'>Gojek job fair</p>
        
        {/* KOTAK 3 */}
        <div className='w-[330px] h-[208px] absolute bg-[#D9D9D9] mt-[120px] ml-[1100px]'>

        </div> 
         {/*KOTAK 3 END  */}
        <p className='absolute text-3xl font-semibold mt-[370px] ml-[1185px]'>Gojek job fair</p>
      </div>
      <div className='w-full h-[606px] bg-[#D9D9D9]'>
        {/* KOTAK 1 START */}
        <h1 className='absolute text-4xl font-bold mt-[70px] ml-[100px]'>Perusahaan pemberi kerja</h1>
        <div className='w-[330px] h-[208px] absolute bg-[#9E9E9E] mt-[170px] ml-[100px]'>
        
        </div>
        {/* KOTAK 1 END */}
        <p className='absolute text-3xl font-semibold mt-[418px] ml-[210px]'>Gojek</p>
        {/* kotak 2 start */}
        <div className='w-[330px] h-[208px] absolute bg-[#9E9E9E] mt-[170px] ml-[600px]'>

        </div>
        <p className='absolute text-3xl font-semibold mt-[418px] ml-[710px]'>Shopee</p>
        {/* kotak 2 end */}
        {/* kotak 3 start */}
        <div className='w-[330px] h-[208px] absolute bg-[#9E9E9E] mt-[170px] ml-[1100px]'>

        </div> 
        {/* kotak 3 end */}
        <p className='absolute text-3xl font-semibold mt-[418px] ml-[1200px]'>Tokopedia</p>
      <button className='bg-[#4A4B50] rounded-2xl text-white  py-1 px-5 hover:scale-105 duration-400 absolute mt-[500px] ml-[685px]'>Daftar Sekarang</button>
      </div>
    </div>
  )
}

export default InternFairComp
