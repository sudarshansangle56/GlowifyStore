import React from 'react'
import Product from '../components/Product'

function Best() {
  return (
    <div className='p-3 min-h-[600px]  flex flex-col items-center justify-center'>
      <div className='flex items-center justify-between p-3'>
        <div></div>
        <div className='text-black'> <h1 className="text-center mt-[30px] sm:text-[40px] text-[25px] leading-[50px] mb-5">Skincare That Brings Out <br />
        Your Natural Radiance</h1></div>
        <div></div>
      </div>
      <div className='flex gap-10 flex-wrap'>
        <Product Link={"/alyaskin.jpg"} title={"ALYA SKIN CLEANSER"} price={"$29.99"}/>
        <Product Link={"/ritual.jpg"} title={"RITUAL OF SAKURA."} price={"$27.99"}/>
        <Product Link={"/allwhite.jpg"} title={"THE BODY LOTION."} price={"$27.99"}/>
      </div>
    </div>
  )
}

export default Best
