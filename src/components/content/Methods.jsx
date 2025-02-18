import React from 'react'

const Methods = ({code}) => {
  return (
    <div className='mt-16 md:p-12 p-6 rounded-lg border border-gray-300 shadow-md'>
      <p className='md:text-2xl text-xl font-semibold text-black'>
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