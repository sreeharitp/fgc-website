import React from "react";
import Slider3 from "./Slider3";

const Partners = () => {
  return (
    <div className="padding-x padding-y flex flex-col sm:flex-row justify-between items-center">
      <div className="max-w-[580px]">
        <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold mb-6">
          Connected Partners
        </h2>
        <p className="3xl:text-[20px] opacity-80">
          All of our technicians are trained to the highest level, with years of
          experience under their belts. They’re fully accredited, (MCC, ISO)
          covering all the technology you require across IT, and security, with
          the hands-on knowledge required to keep your business running
          smoothly.
        </p>
      </div>
      <div className="w-full sm:w-2/5 mt-10 sm:mt-0">
        <Slider3/>
      </div>
    </div>
  );
};

export default Partners;
