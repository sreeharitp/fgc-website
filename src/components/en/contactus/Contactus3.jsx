import React from "react";
import check from "public/check.svg";
import Image from "next/image";
import ContactForm3 from "./ContactForm3";

const Contactus3 = () => {
  const benefits = [
    {
      id: 1,
      text: "Creative Thinking",
    },
    {
      id: 2,
      text: "Decision-Making",
    },
    {
      id: 3,
      text: "Communication",
    },
    {
      id: 4,
      text: "Customer Service",
    },
    {
      id: 5,
      text: "Time Management",
    },
    {
      id: 6,
      text: "Willingness to Learn",
    },
  ];

  return (
    <div className="lg:padding-x padding-y box-width">
      <div className="w-full h-[260px] 3xl:h-[315px] bg-[#000000] flex flex-col justify-between p-8  rounded-t-0 lg:rounded-t-[12px] relative">
        <div className="absolute right-10 top-20 z-20 hidden lg:block">
          <ContactForm3 />
        </div>
        <p className="text-white opacity-100 3xl:text-[20px]">Join FGC</p>
        <h2 className="text-[28px] font-semibold text-[#ffffff] leading-[40px] 3xl:text-[40px]">
          Bring your start-up thinking, skills
          <br className="hidden sm:block"/> curiosity, passion for learning
        </h2>
      </div>
      <div className="p-8 bg-[#f0f0f0] sm:bg-[#ffffff]  h-[550px] 3xl:h-[550px] flex flex-col justify-between  sm:rounded-b-[12px]">
        <div>
          <p className="mb-4 3xl:text-[20px]">
            From first steps to the final interview, learn everything there is
            <br className="hidden sm:block"/> to know about the EY hiring process and discover the best way
            <br className="hidden sm:block"/> to become part of an FGC team.
          </p>
          <h6 className="text-[18px] 3xl:text-[24px] font-medium mb-1">
            Call us at : 12345456677
          </h6>
          <h6 className="text-[18px] 3xl:text-[24px] font-medium">
            Email : jncjhsdfu@gmail.com
          </h6>
        </div>
        <div className="pb-10">
          <h6 className="text-[20px] font-semibold mb-4 3xl:text-[24px]">What we look for</h6>
          <div className="grid grid-cols-2 gap-2 lg:gap-4 w-full sm:w-1/2 lg:w-2/5">
            {benefits.map((items) => (
              <div className="flex items-center gap-2" key={items.id}>
                <Image src={check} height={20} width={20} alt="check" />
                <p className="3xl:text-[20px]">{items.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <ContactForm3 />
      </div>
    </div>
  );
};

export default Contactus3;
