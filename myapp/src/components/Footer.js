import React from "react";

function Footer() {
  return (
    <div className="bg-[#35433E] w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start text-white sm:px-28 px-6 py-20">
        <div className="text-left mb-10 sm:mb-0">
          <h1 className="text-[28px] cursor-pointer sm:text-[32px] leading-[36px]">
            Join The Skincare <br /> Community Now.
          </h1>
        </div>
        <div className="text-left cursor-pointer">
          <p className="text-sm mb-1">Get in Touch</p>
          <p className="text-xl sm:text-2xl">contact.skincare.com</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-white sm:px-28 px-6 pb-10 gap-4 text-sm">
        <div className="flex cursor-pointer gap-8">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>YouTube</p>
        </div>
        <div className="flex cursor-pointer gap-8">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookies Policy</p>
        </div>
      </div>

      <div className="overflow-hidden w-full text-center">
        <h1 className="font-bold text-[#cdd4d145] text-[90px] sm:text-[300px] leading-none">
          SKINCARE
        </h1>
      </div>
    </div>
  );
}

export default Footer;
