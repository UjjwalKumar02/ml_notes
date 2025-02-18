import React from 'react'

const Image = ({img}) => {
  return (
    <div className='mt-10'>
      <img src={img} alt="image" className='w-[50%] mx-auto rounded-lg'/>
    </div>
  )
}

export default Image