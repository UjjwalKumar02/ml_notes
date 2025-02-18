import React from 'react'

const Features = ({features}) => {
  return (
    <div className='mt-16 p-5'>
      <p className='text-2xl font-semibold text-black'>
        Features
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{features}</p>
      </div>
    </div>
  )
}

export default Features