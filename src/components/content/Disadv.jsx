import React from 'react'

const Disadv = ({disadv}) => {
  return (
    <div className='mt-16 p-5'>
      <p className='text-2xl font-semibold text-black'>
        Disadvantages
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{disadv}</p>
      </div>
    </div>
  )
}

export default Disadv