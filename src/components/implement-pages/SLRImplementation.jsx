import React from 'react'

const SLRImplementation = ({handleImplementationClick}) => {
  return (
    <section 
    className='md:mt-24 mt-19 flex flex-col items-center'
    >
      <button 
      className='bg-black text-white px-3 py-1 rounded-lg font-semibold cursor-pointer hover:bg-gray-700 border border-gray-800 md:w-[100%] w-[100%]' 
      onClick={handleImplementationClick}
      >
        Hide
      </button>
    
      <iframe 
      src="https://nbviewer.org/github/UjjwalKumar02/SLR/blob/main/01_simpleLinearReg.ipynb" 
      frameborder="0"
      className='md:w-[100%] w-[100%] h-dvh mx-auto border border-gray-300 md:p-6 py-3 rounded-lg shadow-lg' 
      />
    </section>
  )
}

export default SLRImplementation