import React from 'react'

const Disadv = ({disadv}) => {
  return (
    <div className='mt-16 md:p-5 p-2'>
      <p className='md:text-2xl text-xl font-semibold text-black'>
        Disadvantages
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{disadv}</p>
      </div>
    </div>
  )
}

export default Disadv