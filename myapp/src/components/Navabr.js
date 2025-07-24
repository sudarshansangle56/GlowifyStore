import React from 'react';
import { ShoppingBag, Heart, User } from 'lucide-react';

function Navbar({ onAllProductsClick }) {
  return (
    <div className="h-[60px] px-6 w-full flex items-center justify-between bg-[#FEFFF4]">
     
      <div>
        <h1 className="font-bold text-lg text-[#2D3A2E]">SKINCARE</h1>
      </div>

  
      <div className="hidden md:flex gap-6 text-[#2D3A2E] text-sm">
        <p onClick={onAllProductsClick} className="cursor-pointer">All Products</p>
        <p onClick={onAllProductsClick} className="cursor-pointer">Serum</p>
        <p onClick={onAllProductsClick} className="cursor-pointer">Sunscreen</p>
        <p onClick={onAllProductsClick} className="cursor-pointer">Bundle</p>
      </div>

   
      <div className="flex gap-3 items-center">
        <div className="p-2 cursor-pointer rounded-full bg-[#eaf0e2]">
          <ShoppingBag size={18} className="text-[#2D3A2E]" />
        </div>
        cart(1)
        <div className="p-2 cursor-pointer rounded-full bg-[#eaf0e2]">
          <Heart size={18} className="text-[#2D3A2E]" />
        </div>
        <div className="p-2 cursor-pointer rounded-full bg-[#eaf0e2]">
          <User size={18} className="text-[#2D3A2E]" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
