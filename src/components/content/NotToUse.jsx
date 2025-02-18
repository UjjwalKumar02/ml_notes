import React from 'react'

const NotToUse = ({notuse}) => {
  return (
    <div className='border border-gray-200 p-12 rounded-lg mt-16 shadow-md'>
      <p className='font-semibold text-2xl text-black'>
        When not to use
      </p>
      <p className='whitespace-pre-line mt-8'>
        {notuse}
      </p>
    </div>
  )
}

export default NotToUse