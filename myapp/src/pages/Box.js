import React from "react";
import Product from "../components/Product";
function Box() {
  return (
    <div className="w-full my-8 flex items-center justify-center flex-col">
      <h1 className="text-center mt-[30px] text-[30px] leading-[35px]">
        Feel Beautiful Inside and Out <br />
        with Every Product
      </h1>
      <div className="gap-5 my-7">
        <button className="border-[1px] border-black h-[35px] w-[140px] rounded-2xl mr-2 hover:bg-black hover:text-white">
          New ARRIVAL
        </button>
        <button className="border-[1px] border-black h-[35px] w-[140px] rounded-2xl mr-2 hover:bg-black hover:text-white">
          CLEANSING
        </button>
        <button className="border-[1px] border-black h-[35px] w-[140px] rounded-2xl mr-2 hover:bg-black hover:text-white">
          ACNE FIGHTER
        </button>
        <button className="border-[1px] border-black h-[35px] w-[140px] rounded-2xl mr-2 hover:bg-black hover:text-white">
          ANTI AGGING
        </button>
      </div>
      <div>
        <div className="w-full flex gap-10 flex-wrap">
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
      <div className="flex px-[90px] h-[550px] w-full mt-[120px] gap-[100px]">
        <div className="sm:w-[45%] flex items-center justify-center">
          <img
            src="allwhite.jpg"
            className="rounded-xl h-[550px] w-[100%]"
            alt=""
            srcset=""
          />
        </div>
        <div className="sm:w-[55%] p-5 bg-white rounded-3xl">
          <div className="w-[230px] border-[1px] border-black h-[35px] rounded-3xl flex items-center justify-center gap-3 text-[15px]">
            <div className="bg-black h-[15px] w-[15px] rounded-full"></div>
            <h1>Frequently Asked Question</h1>
          </div>
          <div className="text-[35px] leading-[40px] mt-10">
            <h1>Answers to Your <br /> Skincare Questions, All <br /> in One Place.</h1>
          </div>
          <div className="mt-9">

            <div className="w-[450px] h-[50px] border-[1px] border-black rounded-md flex items-center justify-between px-4 text-[19px]">
               <h1>Are your products safe for sensitive skin?</h1>
               <h1>+</h1>
            </div>
            <div className="w-[450px] h-[50px] mt-2 border-[1px] border-black rounded-md flex items-center justify-between px-4 text-[19px]">
               <h1>Are your products cruelty-free?</h1>
               <h1>+</h1>
            </div>
            <div className="w-[450px] h-[50px] mt-2 border-[1px] border-black rounded-md flex items-center justify-between px-4 text-[19px]">
               <h1>What’s your return policy?</h1>
               <h1>+</h1>
            </div>
            <div className="w-[450px] h-[50px] mt-2 border-[1px] border-black rounded-md flex items-center justify-between px-4 text-[19px]">
               <h1>Do you ship internationally?</h1>
               <h1>+</h1>
            </div>
            <div className="w-[450px] h-[50px] mt-2 border-[1px] border-black rounded-md flex items-center justify-between px-4 text-[19px]">
               <h1>How do i choose the right product?</h1>
               <h1>+</h1>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
