import React from "react";

function Skin() {
  return (
    <div className="relative min-h-[370px] w-full flex items-center justify-center flex-col overflow-hidden">
        <button className="bg-[#35433E] text-white py-2 px-4 sm:mr-[1150px] sm:top-[40px] top-[420px] absolute font-thin rounded-3xl">Shop now</button>
      <h1 className="font-bold sm:text-[300px] text-[85px] w-full text-[#35433E]">SKINCARE</h1>
      <img
        className="h-[350px] rounded-lg sm:absolute sm:top-[200px] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2"
        src="image.png"
        alt="Centered Image"
      />
    </div>
  );
}

export default Skin;
