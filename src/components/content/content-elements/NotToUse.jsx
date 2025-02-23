import React from 'react'

const NotToUse = ({notuse}) => {
  return (
    <div className='border border-gray-300 md:p-12 px-6 py-8 rounded-lg mt-16 shadow-md'>
      <p className='font-semibold md:text-[1.5rem] text-[1.25rem] text-black'>
        When not to use
      </p>
      <p className='whitespace-pre-line mt-8'>
        {notuse}
      </p>
    </div>
  )
}

export default NotToUse