import React from 'react'
import Product from '../components/Product'

function Best() {
  return (
    <div className='p-3 h-[600px]  flex flex-col items-center justify-center'>
      <div className='flex items-center justify-between p-3'>
        <div></div>
        <div className='text-white'> <h1>Skincare That Brings Out
        Your Natural Radiance</h1></div>
        <div></div>
      </div>
      <div className='flex gap-10'>
        <Product Link={"/alyaskin.jpg"} title={"ALYA SKIN CLEANSER"} price={"$29.99"}/>
        <Product Link={"/ritual.jpg"} title={"RITUAL OF SAKURA."} price={"$27.99"}/>
        <Product Link={"/allwhite.jpg"} title={"THE BODY LOTION."} price={"$27.99"}/>
      </div>
    </div>
  )
}

export default Best
