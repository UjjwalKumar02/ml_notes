import React from 'react'

const Adv = ({adv}) => {
  return (
    <div className='mt-16 md:p-5 p-2'>
      <p className='md:text-2xl text-xl font-semibold text-black'>
        Advantages
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{adv}</p>
      </div>
    </div>
  )
}

export default Adv