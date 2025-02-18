import React from 'react'

const Def = ({title, def}) => {
  return (
    <div className='border border-gray-300 md:p-12 px-6 py-8 rounded-lg shadow-md'>
      <p className='md:text-[1.5rem] text-[1.25rem] font-semibold text-black'>
        {title}
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{def}</p>
      </div>
    </div>
  )
}

export default Def