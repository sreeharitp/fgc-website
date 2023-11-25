import React from "react";
import service from "/public/service-img2.png";
import Image from "next/image";

const ServiceContent3 = () => {
  return (
    <div className="padding-x padding-y flex flex-col-reverse sm:flex-row items-center justify-between gap-10 lg:gap-20 ">
      <div className=" w-full sm:w-1/2">
        <Image src={service} alt="service" />
      </div>
      <div className=" w-full sm:w-1/2">
        <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold mb-5 lg:mb-10">
          No hidden fees
        </h2>
        <p className="3xl:text-[20px] opacity-80">
          We’re always transparent about our prices. There are no hidden fees
          with our IT managed support, so you’ll never have any unpleasant
          surprises. You only pay for what you need, and our fixed fee pricing
          model helps your cash-flow and financial planning.
        </p>
      </div>
    </div>
  );
};

export default ServiceContent3;
