import React from 'react'

const Image = ({img}) => {
  return (
    <div className='mt-16'>
      <img src={img} alt="image" className='md:w-[50%] w-[93%] mx-auto rounded-lg'/>
    </div>
  )
}

export default Image