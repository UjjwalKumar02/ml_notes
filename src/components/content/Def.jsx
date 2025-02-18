import React from 'react'

const Def = ({title, def}) => {
  return (
    <div className='border border-gray-200 p-12 rounded-lg shadow-md'>
      <p className='text-2xl font-semibold text-black'>
        {title}
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{def}</p>
      </div>
    </div>
  )
}

export default Def