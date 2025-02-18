import React from 'react'

const Usage = ({uses}) => {
  return (
    <div className='mt-16 p-4'>
      <p className='text-xl font-semibold text-[#e76231]'>
        Usage
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{uses}</p>
      </div>
    </div>
  )
}

export default Usage