import React from "react";

function Image() {
  return (
    <div className="hidden lg:block sm:mt-10 px-[110px] relative">
      <div className="relative w-fit">
        <img src="creamgreen.png" className="rounded-lg" alt="" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 rounded-b-lg bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="absolute bottom-[30px] w-[65%] left-[300px] right-0 bg-opacity-90 p-2 rounded-md flex flex-col text-[40px]">
        <h1 className="text-white text-center leading-[50px] mb-3">
          Feel Beautiful Inside and Out
          <br /> with Every Product.
        </h1>
        <button className="bg-white w-[130px] h-[40px] ml-[390px] rounded-3xl text-[17px]">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Image;
