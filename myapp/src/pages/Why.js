import React from "react";

function Why() {
  return (
    <div className="min-h-[700px] mt-[200px] px-10 flex flex-wrap justify-between ">
      <div className=" sm:w-[50%] h-[700px] sm:ml-[100px] p-2">
        <div className="border-2 border-[#1c1c1cc1] w-[240px] h-[50px] mb-5 flex items-center justify-center gap-3 px-2 rounded-3xl ">
          <div className="h-[20px] w-[20px] bg-[#1c1c1cc1] rounded-full text-center"></div>
          <p className="text-[#1c1c1cc1] py-1">Why Our Products</p>
        </div>
        <div className="text-[35px] text-[#2d4b3d] font-[450] leading-[35px] my-3">
          <h1>
            YOUR SKIN DESERVES <br /> THE BEST CARE.
          </h1>
        </div>
        <div className="text-[14px]">
          <p>
            Discover a curated collection of skincare products designed to
            rejuvenate, protect, and pamper your skin. Explore our rage crafted
            with love backed by science, and inspired by nature.
          </p>
        </div>
        <div className="">
          <div className=" flex items-center justify-center gap-9 mt-7">
            <div className="">
              <h1 className="text-[50px] bg-gradient-to-b from-[#293330] to-[#FEFFF4] bg-clip-text text-transparent">
                01
              </h1>
            </div>
            <div>
              <h1 className="text-[#2d3b34] text-[40px]">Bio Ingredients</h1>
              <p className="text-[15.5px] w-[80%] text-[#55564a] mt-2 ">
                Get naturally beautiful and transform with our bio ingredients
                creams for healthy, radiant skin.
              </p>
            </div>
          </div>

          <div className=" flex items-center justify-center gap-9 mt-7">
            <div className="">
              <h1 className="text-[50px] bg-gradient-to-b from-[#293330] to-[#FEFFF4] bg-clip-text text-transparent">
                02
              </h1>
            </div>
            <div>
              <h1 className="text-[#2d3b34] text-[40px]">Everything Natural</h1>
              <p className="text-[15.5px] w-[80%] text-[#55564a] mt-2 ">
                Made with love and care. Just for you. Give your skin the tender
                loving care it deserves.
              </p>
            </div>
          </div>

          <div className=" flex items-center justify-center gap-9 mt-7">
            <div className="">
              <h1 className="text-[50px] bg-gradient-to-b from-[#293330] to-[#FEFFF4] bg-clip-text text-transparent">
                03
              </h1>
            </div>
            <div>
              <h1 className="text-[#2d3b34] text-[40px]">All Handmade</h1>
              <p className="text-[15.5px] w-[80%] text-[#55564a] mt-2 ">
                Made with love and care. Just for you. Give your skin the tender
                loving care it deserves.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-[40%] flex items-center justify-center h-[700px]">
        <img
          src="eyelef.png"
          className="h-[600px]  rounded-2xl"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default Why;
