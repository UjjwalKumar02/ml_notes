import React from 'react'

const Methods = ({code}) => {
  return (
    <div className='mt-16 md:p-12 px-6 py-8 rounded-lg border border-gray-300 shadow-md'>
      <p className='md:text-[1.5rem] text-[1.25rem] font-semibold text-black'>
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