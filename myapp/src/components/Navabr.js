import React from 'react'
import { ShoppingBag, Heart, User } from 'lucide-react'

function Navbar() {
  return (
    <div className="h-[60px] px-6 w-full flex items-center justify-between bg-[#FEFFF4]">
      {/* Logo */}
      <div>
        <h1 className="font-bold text-lg text-[#2D3A2E]">SKINCARE</h1>
      </div>

      {/* Center Links (hidden on mobile) */}
      <div className="hidden md:flex gap-6 text-[#2D3A2E] text-sm">
        <p>All Products</p>
        <p>Serum</p>
        <p>Sunscreen</p>
        <p>Bundle</p>
      </div>

      {/* Icons */}
      <div className="flex gap-3 items-center">
        <div className="p-2 rounded-full bg-[#F6FBEF]">
          <ShoppingBag size={18} className="text-[#2D3A2E]" />
        </div>
        <div className="p-2 rounded-full bg-[#F6FBEF]">
          <Heart size={18} className="text-[#2D3A2E]" />
        </div>
        <div className="p-2 rounded-full bg-[#F6FBEF]">
          <User size={18} className="text-[#2D3A2E]" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
