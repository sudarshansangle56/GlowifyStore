import React from "react";

function Why() {
  return (
    <div className="min-h-[200px]  mt-[40px] sm:px-10 px-5 flex flex-wrap justify-between ">
      <div className=" sm:w-[50%] min-h-[700px] sm:ml-[100px] p-2">
        <div className="border-2 border-[#1c1c1cc1] sm:w-[240px] sm:h-[50px] w-[210px] h-[45px] mb-5 flex items-center justify-center gap-3 px-2 rounded-3xl ">
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
        <div className="min-h-[500px]">
          <div className=" flex items-center justify-center gap-9 mt-7">
            <div className="">
              <h1 className="text-[50px] bg-gradient-to-b from-[#293330] to-[#FEFFF4] bg-clip-text text-transparent">
                01
              </h1>
            </div>
            <div>
              <h1 className="text-[#2d3b34] sm:text-[40px] text-[32px]">Bio Ingredients</h1>
              <p className="text-[15.5px] sm:w-[80%] w-[90%] text-[#55564a] sm:mt-2 ">
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
              <h1 className="text-[#2d3b34] sm:text-[40px] text-[32px]">Everything Natural</h1>
              <p className="text-[15.5px] sm:w-[80%] w-[90%] text-[#55564a] sm:mt-2 ">
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
              <h1 className="text-[#2d3b34] sm:text-[40px] text-[32px]">All Handmade</h1>
              <p className="text-[15.5px] sm:w-[80%] w-[90%] text-[#55564a] sm:mt-2 ">
                Made with love and care. Just for you. Give your skin the tender
                loving care it deserves.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:min-w-[40%] mt-[1px] flex items-center justify-center sm:h-[700px]  flex-col">
        <img
          src="eyelef.png"
          className="sm:h-[600px]  rounded-2xl"
          alt=""
          srcset=""
        />
        <div className="flex justify-between bg text-[14px] mt-1 sm:w-[81%] w-[95%]">
          <h1>SINCE 2001</h1>
          <h1>LEARN MORE</h1>
        </div>
      </div>
    </div>
  );
}

export default Why;
