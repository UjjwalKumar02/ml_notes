import React from 'react'

const Disadv = ({disadv}) => {
  return (
    <div className='mt-16 p-4'>
      <p className='text-xl font-semibold text-[#e76231]'>
        Disadvantages
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{disadv}</p>
      </div>
    </div>
  )
}

export default Disadv