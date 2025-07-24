import React from "react";

function Header() {
  return (
    <div className="flex justify-between py-[50px] px-5 items-center">
      <div className="w-[30%]">
        <p className="text-[14px] indent-11 leading-[15px]">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </p>
      </div>
      <div className="w-[30%] flex justify-center items-center font-bold text-[40px] leading-[35px]">
        <h1>
          GLOW
          <br />
          NATUR- <br />
          ALLY
        </h1>
      </div>

      <div className="w-[30%]">
        <img
          src="plum.jpg"
          className="rounded-2xl h-[200px] "
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default Header;
