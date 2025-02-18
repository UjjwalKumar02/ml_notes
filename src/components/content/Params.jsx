import React from 'react'

const Params = ({params}) => {
  return (
    <div className='mt-16 p-4'>
      <p className='text-xl font-semibold text-[#e76231]'>
        Parameters
      </p>

      <div className='mt-8'>
        <p>{params}</p>
      </div>
    </div>
  )
}

export default Params