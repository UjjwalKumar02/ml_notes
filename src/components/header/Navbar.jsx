import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-5 border border-gray-700 rounded-lg bg-[#171717] text-white'>
      <p className='text-lg font-semibold '>
       ML_Notes
      </p>
      <div className='flex gap-4 items-center'>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar