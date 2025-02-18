import React from 'react'

const Methods = ({code}) => {
  return (
    <div className='mt-16 p-12 rounded-lg border border-gray-200 shadow-md'>
      <p className='text-2xl font-semibold text-black'>
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