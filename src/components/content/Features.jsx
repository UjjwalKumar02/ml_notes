import React from 'react'

const Features = ({features}) => {
  return (
    <div className='mt-16 p-4'>
      <p className='text-xl font-semibold text-[#e76231]'>
        Features
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{features}</p>
      </div>
    </div>
  )
}

export default Features