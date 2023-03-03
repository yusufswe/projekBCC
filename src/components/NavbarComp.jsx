import React from 'react'

const NavbarComp = () => {
  return (
  <div>
      <div className='flex justify-between items-center p-0 gap-[350px] w-full h-[80px] bg-[#A7A7A7] mx-auto px-4 font-semibold fixed z-10'>
        <h2 className='w-full text-3xl font-bold cursor-pointer active:text-white ml-5'><a href='/'>FindIn</a></h2>
        <ul className='md:flex mt-3'>
          <li className='p-3 cursor-pointer active:text-white'><a href='/'>Home</a></li>
          <li className='p-3 cursor-pointer active:text-white'><a href='/'>Discover</a></li>
          <li className='p-3 cursor-pointer active:text-white'><a href='/'>Insight</a></li>
          <li className='p-3 cursor-pointer active:text-white'><a href='/'>Internfair</a></li>
          <li className='p-3 cursor-pointer active:text-white'><a href='./login'><button className='bg-[#4A4B50] rounded-2xl text-white  px-5 hover:scale-105 duration-400'>Login</button></a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavbarComp;