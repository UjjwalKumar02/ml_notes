import React from 'react'

const Usage = ({uses}) => {
  return (
    <div className='mt-16 md:p-5 p-3'>
      <p className='md:text-[1.5rem] text-[1.25rem] font-semibold text-black'>
        Usage
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line'>{uses}</p>
      </div>
    </div>
  )
}

export default Usage