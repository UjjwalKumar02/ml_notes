import React from 'react'

const SLRImplementation = ({handleImplementationClick}) => {
  return (
    <section 
    className='mt-32 flex flex-col items-center'
    >
      <button 
      className='bg-black text-white px-3 py-1 rounded-3xl font-semibold cursor-pointer hover:bg-gray-700 border border-gray-800 mb-2' 
      onClick={handleImplementationClick}
      >
        Hide
      </button>

      <iframe 
      src="https://nbviewer.org/github/UjjwalKumar02/SLR/blob/main/01_simpleLinearReg.ipynb" 
      frameborder="0"
      height="600px"
      className='md:w-[65%] w-[95%] mx-auto border border-gray-300 md:p-6 py-3 rounded-lg shadow-lg' 
      />
    </section>
  )
}

export default SLRImplementation