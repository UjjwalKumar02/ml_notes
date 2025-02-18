import React from 'react'

const Def = ({title, def}) => {
  return (
    <div className='border border-gray-300 md:p-12 p-6 rounded-lg shadow-md'>
      <p className='md:text-2xl text-xl font-semibold text-black'>
        {title}
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{def}</p>
      </div>
    </div>
  )
}

export default Def