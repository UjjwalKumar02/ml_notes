import React from 'react'

const Def = ({title, def, handleImplementationClick}) => {
  return (
    <div className='border border-gray-300 md:p-12 px-6 py-8 rounded-lg shadow-md'>
      <div className='flex justify-between items-center'>
      <p className='md:text-[1.5rem] text-[1.25rem] font-semibold text-black'>
        {title}
      </p>
      <button 
      className='bg-black text-white px-3 py-1 rounded-lg font-semibold cursor-pointer hover:bg-gray-700 border border-gray-800'
      onClick={handleImplementationClick}
      >
        Implementation
      </button>
      </div>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{def}</p>
      </div>
    </div>
  )
}

export default Def