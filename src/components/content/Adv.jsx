import React from 'react'

const Adv = ({adv}) => {
  return (
    <div className='mt-16 p-5'>
      <p className='text-2xl font-semibold text-black'>
        Advantages
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{adv}</p>
      </div>
    </div>
  )
}

export default Adv