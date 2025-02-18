import React from 'react'

const Methods = ({code}) => {
  return (
    <div className='mt-16 bg-[#e5e5e5] text-gray-800 p-10 rounded-lg border border-gray-700'>
      <p className='text-xl font-semibold text-black'>
        Methods
      </p>

      <div className='mt-8'>
        <p className='whitespace-pre-line '>
          <code>{code}</code>
        </p>
      </div>
    </div>
  )
}

export default Methods