import React from 'react'

function Image() {
  return (
    <div className='mt-10 px-[110px] relative'>
      <img src="creamgreen.png" className='rounded-lg' alt="" />
      <div className='absolute bottom-[50px] w-[65%] left-[300px] right-0 bg-opacity-90 p-2 rounded-md flex flex-col text-[40px]'>
          <h1 className='text-white text-center leading-[50px] mb-3'>Feel Beautiful Inside and Out
         <br /> with Every Product.</h1>
         <button className='bg-white w-[170px] h-[50px] ml-[350px] rounded-3xl text-[22px]'>Shop Now</button>
    </div>
    </div>
  )
}

export default Image
