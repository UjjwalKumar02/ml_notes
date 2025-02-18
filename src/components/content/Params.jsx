import React from 'react'

const Params = ({params}) => {
  return (
    <div className='mt-16 p-5'>
      <p className='text-2xl font-semibold text-black'>
        Parameters
      </p>

      <div className='mt-8'>
        <p>{params}</p>
      </div>
    </div>
  )
}

export default Params