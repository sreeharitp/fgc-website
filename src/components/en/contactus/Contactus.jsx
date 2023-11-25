import React from "react";
import check from "public/check.svg";
import Image from "next/image";
import ContactForm from "./ContactForm";

const Contactus = () => {
  const benefits = [
    {
      id: 1,
      text: "Client-Oriented",
    },
    {
      id: 2,
      text: "Result Driven",
    },
    {
      id: 3,
      text: "Independent",
    },
    {
      id: 4,
      text: "Transparent",
    },
    {
      id: 5,
      text: "Competent",
    },
    {
      id: 6,
      text: "Problem Solving",
    },
  ];

  return (
    <div className="lg:padding-x padding-y ">
      <div className="w-full h-[280px] bg-[#2C1B1A] flex flex-col justify-between p-8  rounded-t-0 lg:rounded-t-[12px] relative">
        <div className="absolute right-12 top-20 z-20 hidden lg:block">
          <ContactForm />
        </div>
        <p className="text-white opacity-100 3xl:text-[20px]">Contact Us</p>
        <h2 className="text-[30px] font-semibold text-[#FFD3CC] leading-[40px] 3xl:text-[40px]">
          Partner with Us for
          <br /> Comprehensive IT
        </h2>
      </div>
      <div className="p-8 bg-[#F0F0F0] h-[550px] 3xl:h-[600px] flex flex-col justify-between  rounded-b-[12px]">
        <div>
          <p className="mb-4 3xl:text-[20px] opacity-90">
            We are happy to answer any questions you may have and help
            <br className="hidden sm:block" /> you determine which of our
            services best fit your needs.
          </p>
          <h6 className="text-[20px] font-medium mb-1 3xl:text-[24px]">
            Call us at : 12345456677
          </h6>
          <h6 className="text-[20px] font-medium 3xl:text-[24px]">
            Email : jncjhsdfu@gmail.com
          </h6>
        </div>
        <div className="pb-16">
          <h6 className="text-[20px] font-semibold mb-4 3xl:text-[24px]">
            Your Benefits
          </h6>
          <div className="grid grid-cols-2 gap-2 lg:gap-4 w-full sm:w-1/2 lg:w-1/3">
            {benefits.map((items) => (
              <div className="flex items-start gap-2" key={items.id}>
                <Image
                  src={check}
                  height={22}
                  width={22}
                  alt="check"
                  className="mt-1"
                />
                <p className="3xl:text-[20px]">{items.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contactus;
