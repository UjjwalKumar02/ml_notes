import React from 'react'

const SLRImplementation = ({handleImplementationClick}) => {
  return (
    <section 
    className='md:mt-32 mt-26 flex flex-col items-center'
    >
      <button 
      className='bg-black text-white px-3 py-1 rounded-lg font-semibold cursor-pointer hover:bg-gray-700 border border-gray-800 md:w-[65%] w-[95%]' 
      onClick={handleImplementationClick}
      >
        Hide
      </button>

      <iframe 
      src="https://nbviewer.org/github/UjjwalKumar02/SLR/blob/main/01_simpleLinearReg.ipynb" 
      frameborder="0"
      height="600px"
      className='md:w-[65%] w-[100%] mx-auto border border-gray-300 md:p-6 py-3 px-1 rounded-lg shadow-lg' 
      />
    </section>
  )
}

export default SLRImplementation