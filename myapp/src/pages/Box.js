import React, { useState } from "react";
import Product from "../components/Product";

function Box() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Are your products safe for sensitive skin?",
      answer:
        "Yes, our products are formulated with gentle, non-irritating ingredients suitable for sensitive skin types.",
    },
    {
      question: "Are your products cruelty-free?",
      answer:
        "Absolutely! We never test on animals, and all our products are 100% cruelty-free.",
    },
    {
      question: "What’s your return policy?",
      answer:
        "We offer a 30-day hassle-free return policy. If you're not satisfied, contact our support.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping charges may vary.",
    },
    {
      question: "How do I choose the right product?",
      answer:
        "You can use our product quiz or reach out to our support team for personalized recommendations.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full my-8 flex items-center justify-center flex-col">
      <h1 className="sm:text-center mt-[30px] sm:text-[30px] text-[27px] leading-[35px]">
        Feel Beautiful Inside and Out <br />
        with Every Product
      </h1>

     
     
      <div className="gap-5 my-7 mx-11">
        <button className="border-[1px] border-black h-[35px] w-[140px] rounded-2xl mr-2 bg-black text-white">
          New ARRIVAL
        </button>
        <button className="border-[1px] border-black h-[35px] w-[140px] rounded-2xl mr-2 hover:bg-black hover:text-white">
          CLEANSING
        </button>
        <button className="border-[1px] border-black h-[35px] w-[140px] rounded-2xl mr-2 hover:bg-black hover:text-white">
          ACNE FIGHTER
        </button>
        <button className="border-[1px] mt-2 border-black h-[35px] w-[140px] rounded-2xl mr-2 hover:bg-black hover:text-white">
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

      <div className="flex sm:px-[90px] min-h-[550px] w-full mt-[120px] sm:gap-[100px] flex-wrap-reverse">
     
        <div className="sm:w-[45%] w-[100%] flex items-center justify-center">
          <img
            src="allwhite.jpg"
            className="rounded-xl h-[550px] w-[100%] mt-7 p-3"
            alt=""
          />
        </div>

        <div className="sm:w-[40%] w-[100%] p-5 bg-white rounded-3xl">
          <div className="sm:w-[230px] w-[250px] border-[1px] border-black h-[35px] rounded-3xl flex items-center justify-center gap-3 text-[15px]">
            <div className="bg-black h-[15px] w-[15px] rounded-full"></div>
            <h1>Frequently Asked Question</h1>
          </div>
          <div className="sm:text-[35px] text-[25px] leading-[30px] sm:leading-[40px] mt-10">
            <h1>
              Answers to Your <br /> Skincare Questions, All <br /> in One
              Place.
            </h1>
          </div>

          <div className="mt-9">
            {faqData.map((item, index) => (
              <div key={index} className="mb-2">
                <div
                  onClick={() => toggleFAQ(index)}
                  className="sm:w-[450px] min-h-[50px] cursor-pointer border-[1px] border-black rounded-md flex items-center justify-between px-4 text-[17px]"
                >
                  <h1>{item.question}</h1>
                  <h1>{openIndex === index ? "-" : "+"}</h1>
                </div>
                {openIndex === index && (
                  <div className="sm:w-[450px] text-[15px] bg-[#FEFFF4] p-3 border-x-[1px] border-b-[1px] border-black rounded-b-md">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
