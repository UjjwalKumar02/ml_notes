import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-[100%] flex justify-between items-center px-7 py-6 rounded-lg  text-black fixed top-0 bg-[#ffffff] bg-opacity-80 z-100'>
      <p className='text-xl font-bold'>
       ML_Notes
      </p>
      <div className='flex gap-4 items-center'>
        <a href="" className='font-semibold'>About</a>
        <a href="" className='font-semibold'>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar