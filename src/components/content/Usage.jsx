import React from 'react'

const Usage = ({uses}) => {
  return (
    <div className='mt-16 p-5'>
      <p className='text-2xl font-semibold text-black'>
        Usage
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{uses}</p>
      </div>
    </div>
  )
}

export default Usage