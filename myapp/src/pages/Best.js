import React from "react";
import Product from "../components/Product";
import { ReactComponent as Vector1 } from "../components/VectorGroup";
import VectorGroup from "../components/VectorGroup";

function Best() {
  return (
    <div className="p-3 min-h-[600px]  flex flex-col items-center justify-center">
      <div className="w-[90%] flex sm:items-center sm:justify-between sm:p-3 sm:px-[50px] flex-wrap">
        <div className="border-2 border-[#1c1c1cc1] w-[240px] h-[50px] mb-5 flex items-center justify-center gap-3 sm:px-2 rounded-3xl ">
          <div className="h-[20px] w-[20px] bg-[#1c1c1cc1] rounded-full text-center"></div>
          <p className="text-[#1c1c1cc1] py-1">Best Selling Products</p>
        </div>
        <div className="text-black">
          {" "}
          <h1 className="sm:text-center sm:mt-[30px] sm:text-[40px] text-[30px] sm:leading-[50px] sm:mb-5 mb-3">
            Skincare That Brings Out <br />
            Your Natural Radiance
          </h1>
        </div>
        <div>
          <div className="hidden sm:flex h-full sm:w-[100px] items-center justify-center gap-[40px] sm:gap-[60px]">
            <div className="cursor-pointer">
              <svg
                width="60"
                height="60"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 79.5C61.8152 79.5 79.5 61.8152 79.5 40C79.5 18.1848 61.8152 0.5 40 0.5C18.1848 0.5 0.5 18.1848 0.5 40C0.5 61.8152 18.1848 79.5 40 79.5Z"
                  stroke="#2D3B36"
                />
                <path
                  d="M39.2929 39.2931C38.9024 39.6836 38.9024 40.3168 39.2929 40.7073L45.6569 47.0713C46.0474 47.4618 46.6805 47.4618 47.0711 47.0713C47.4616 46.6807 47.4616 46.0476 47.0711 45.6571L41.4142 40.0002L47.0711 34.3433C47.4616 33.9528 47.4616 33.3197 47.0711 32.9291C46.6805 32.5386 46.0474 32.5386 45.6569 32.9291L39.2929 39.2931ZM40 40.0002V41.0002H80V40.0002V39.0002H40V40.0002Z"
                  fill="#2D3B36"
                />
              </svg>
            </div>
            <div className="rotate-180 cursor-pointer">
              <svg
                width="60"
                height="60"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="39.5" fill="#293330" />
                <path
                  d="M39.2929 39.2931C38.9024 39.6836 38.9024 40.3168 39.2929 40.7073L45.6569 47.0713C46.0474 47.4618 46.6805 47.4618 47.0711 47.0713C47.4616 46.6807 47.4616 46.0476 47.0711 45.6571L41.4142 40.0002L47.0711 34.3433C47.4616 33.9528 47.4616 33.3197 47.0711 32.9291C46.6805 32.5386 46.0474 32.5386 45.6569 32.9291L39.2929 39.2931ZM40 40.0002V41.0002H80V40.0002V39.0002H40V40.0002Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 flex-wrap">
        <Product
          Link={"/alyaskin.jpg"}
          title={"ALYA SKIN CLEANSER"}
          price={"$29.99"}
        />
        <Product
          Link={"/ritual.jpg"}
          title={"RITUAL OF SAKURA."}
          price={"$27.99"}
        />
        <Product
          Link={"/allwhite.jpg"}
          title={"THE BODY LOTION."}
          price={"$27.99"}
        />
      </div>
    </div>
  );
}

export default Best;
