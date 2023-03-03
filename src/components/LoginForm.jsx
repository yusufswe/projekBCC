import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginForm = () => {
    return (
     <div>      
        <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
            <div className='bg-gray-300 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center absolute mt-[70px]'>  
                <div className='md:w-1/2 px-8'>
                    <h2 className='font-bold text-2xl text-[#4A4B50]'>Login</h2>
                        <p className='text-sm mt-4 text-[#4A4B50]'>If you already a member, easily log in</p>
                            <form action="" className='flex flex-col gap'>
                                <input className='p-2 rounded-xl border mt-8' type="email" placeholder='Email'/>
                                    <div className='relative'>
                                        <input className='w-full p-2 rounded-xl border mt-2' type="password" placeholder='Password'/>
                                    </div>
                                    <button className='bg-[#4A4B50] rounded-xl text-white py-2 hover:scale-105 duration-300 mt-2'>Login</button>
                            </form>
                            {/* <div className='mt-10 grid grid-cols-3 items-center text-gray-600'>
                                <hr className='border-gray-500'/>
                                <p className='text-center text-sm'>ObR</p>
                                <hr className='border-gray-400'/>
                            </div> */}
                            {/* <button className='text-sm bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center hover:scale-105 duration-300'>Login with Google
                            <svg className='ml-2 ' xmlns="http://www.w3.org/2000/svg" width="25px" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
        </svg>
        </button> */}
        <div className='mt-3 text-sm flex justify-between items-center'>
            <nav>
                <p>Don't have an account?
                    <NavLink to='/register'> 
                        <span className='ml-1 font-semibold cursor-pointer'>Register</span>
                    </NavLink> 
                </p>
            </nav>

            {/* <button className='py-2 px-5 bg-white border rounded-xl hover:scale-105 duration-300 ml-2'>Register</button> */}
        </div>
    </div>
    <div className='w-1/2'>
        <img className=' rounded-2xl' src="https://images.unsplash.com/photo-1677529457642-e075f9ceb51d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60" alt="gambar" />
    </div>
    </div>
    </section>
</div>
  )
}

export default LoginForm