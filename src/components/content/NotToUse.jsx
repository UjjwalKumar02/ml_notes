import React from 'react'

const NotToUse = ({notuse}) => {
  return (
    <div className='bg-[#e5e5e5] text-gray-800 p-10 border border-gray-700 rounded-lg mt-16'>
      <p className='font-semibold text-xl text-black'>
        When not to use
      </p>
      <p className='whitespace-pre-line mt-8'>
        {notuse}
      </p>
    </div>
  )
}

export default NotToUse