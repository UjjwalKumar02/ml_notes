import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-[100%] flex justify-between items-center px-7 md:py-9 py-7 rounded-lg text-black fixed top-0 bg-[#ffffff] bg-opacity-80 z-1000'>
      <p className='md:text-[1.5rem] text-[1.25rem] font-bold'>
       ML_Notes
      </p>
      <div className='flex gap-4 items-center'>
        <a href="" className='font-semibold bg-black text-white border border-gray-800 rounded-lg px-3 py-1 hover:bg-gray-900'>Table of contents</a>
        <a href="" className='font-semibold md:block hidden'>About</a>
        <a href="" className='font-semibold md:block hidden'>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar