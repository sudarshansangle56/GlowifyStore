import React from "react";

function Header() {
  return (
    <div className="w-full flex flex-wrap items-center justify-between sm:py-[50px]  min-h-[100px]">
      <div className="min-w-[280px] sm:w-[30%] flex items-center justify-center p-4">
        <p className="text-[16px] sm:w-[80%] indent-11 leading-[17px] text-center">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </p>
      </div>

      <div className="w-[100%] sm:w-[30%] flex justify-center items-center font-bold text-[60px] leading-[60px] text-center p-4">
        <h1 className="hidden sm:block text-[rgba(45,59,46,1)]">
          GLOW
          <br />
          NATUR-
          <br />
          ALLY
        </h1>

        {/* Mobile version */}
        <h1 className="block sm:hidden text-[rgba(45,59,46,1)]">
          GLOW
          <br />
          NATURALLY
        </h1>
      </div>

      <div className="hidden sm:flex min-w-[280px] sm:w-[30%] justify-center items-center p-4">
        <img
          src="plum.jpg"
          className="rounded-2xl h-[200px]"
          alt="Glow Skincare"
        />
      </div>
    </div>
  );
}

export default Header;
