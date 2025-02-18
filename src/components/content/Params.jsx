import React from 'react'

const Params = ({params}) => {
  return (
    <div className='mt-16 md:p-5 p-3'>
      <p className='md:text-[1.5rem] text-[1.25rem] font-semibold text-black'>
        Parameters
      </p>

      <div className='mt-8'>
        <p>{params}</p>
      </div>
    </div>
  )
}

export default Params