import React from 'react'

const Params = ({params}) => {
  return (
    <div className='mt-16 md:p-5 p-2'>
      <p className='md:text-2xl text-xl font-semibold text-black'>
        Parameters
      </p>

      <div className='mt-8'>
        <p>{params}</p>
      </div>
    </div>
  )
}

export default Params