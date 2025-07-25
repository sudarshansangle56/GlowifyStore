import React from "react";
import { ShoppingCart } from "lucide-react";
function Product({ Link, title, desc, price }) {
  return (
    <div className="p-1">
      <div className="relative w-[350px] cursor-pointer">
        <img src={Link} className="h-[450px] w-full rounded-xl" alt="" />
        <div className="absolute bottom-5 w-[95%] left-2 right-0 bg-white bg-opacity-90 p-2 rounded-md flex justify-between items-center text-[12px]">
          <div>
            <h1 className="text-[#2D3B36] font-semibold uppercase">{title}</h1>
            <p className="text-gray-500">FROM {price}</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md">
            <ShoppingCart className="w-4 h-4 text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
