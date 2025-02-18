import React from 'react'

const Def = ({title, def}) => {
  return (
    <div className='bg-[#e76231] text-white p-10 border border-gray-700 rounded-lg'>
      <p className='text-2xl font-semibold text-white'>
        {title}
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{def}</p>
      </div>
    </div>
  )
}

export default Def