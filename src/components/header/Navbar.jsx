import React from 'react'

const Navbar = ({toggleList}) => {
  return (
    <nav className='w-[100%] flex justify-between items-center px-7 md:py-7 py-5 rounded-lg text-black fixed top-0 bg-[#ffffff] bg-opacity-80 z-1000'>
      <p className='md:text-[1.5rem] text-[1.25rem] font-bold'>
       ML_Notes
      </p>
      <div className='flex gap-4 items-center'>
        <button onClick={toggleList} className='font-semibold bg-black text-white border border-gray-800 rounded-lg px-3 py-1 hover:bg-gray-700 cursor-pointer'>Table of contents</button>
        <a href="" className='font-semibold md:block hidden'>About</a>
        <a href="" className='font-semibold md:block hidden'>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar