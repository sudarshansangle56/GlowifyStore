import React from 'react'

function Product({Link, title, desc,price}) {
  return (
    <div className='p-1'>
      <div className='relative w-[350px]'>
        <img src={Link} className='h-[450px] w-full rounded-xl' alt="" />
        <div className='absolute bottom-5 w-[95%] left-2 right-0 bg-white bg-opacity-90 p-2 rounded-md flex justify-between items-center text-[12px]'>
          <div>
            <h1>{title}</h1>
            <p>FROM {price}</p>
          </div>
          <div>
            ✈️
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
