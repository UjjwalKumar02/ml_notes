import React from 'react'

const Adv = ({adv}) => {
  return (
    <div className='mt-16 p-4'>
      <p className='text-xl font-semibold  text-[#e76231]'>
        Advantages
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{adv}</p>
      </div>
    </div>
  )
}

export default Adv