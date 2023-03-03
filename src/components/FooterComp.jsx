import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const FooterComp = () => {
  return (
    <div className=' mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-600 bg-[#A7A7A7] w-full'>
      <div>
        <h1 className='w-full text-3xl font-bold text-black'>FindIn</h1>
        <p className='py-4 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ab, eum, ipsam voluptatem rem excepturi quia explicabo doloribus ducimus atque libero veniam animi pariatur reprehenderit temporibus aspernatur? Error, laborum doloribus!</p>
        <div className='flex justify-between md:w-[75%] my-6 '>
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6 mr-10'>
        <div>
            <h6 className='font-medium text-black '>Lorem</h6>
            <ul>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-black'>Lorem</h6>
            <ul>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-black'>Lorem</h6>
            <ul>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-black'>Lorem</h6>
            <ul>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterComp
