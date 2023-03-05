import React from 'react'
import insight1 from "../../assets/newuser/insight1.png"

const Card = () => {
  return (
    <div>
      <div className='absolute w-[362px] h-[462px] ml-[40px] rounded-md bg-DarkSkyBlue'>
        <img src={insight1} className="mt-[30px] ml-[40px]"/>
        <h1 className='font-bold text-xl mt-[15px] ml-[43px]'>Umur 20 udah kerja sana sini</h1>
        <p className='mt-[10px] ml-[33px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum doloremque optio, soluta quod in laboriosam inventore rem animi labore itaque voluptates ipsam facilis quae eligendi nobis. Nemo, molestiae incidunt?</p>
      </div>
    </div>
  )
}

export default Card
