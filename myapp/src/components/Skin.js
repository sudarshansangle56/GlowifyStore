import React from "react";

function Skin() {
  return (
    <div className="relative h-[350px]">
        <button className="bg-[#35433E] text-white py-2 px-4 ml-[120px] absolute font-thin rounded-3xl">Shop now</button>
      <h1 className="font-bold sm:text-[300px] w-full text-[#35433E]">SKINCARE</h1>
      <img
        className="h-[300px] rounded-lg absolute top-[230px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src="image.png"
        alt="Centered Image"
      />
    </div>
  );
}

export default Skin;
