import Image from "next/image";
import solution from "/public/solution-img2.png";

import React from "react";

const SolutionContent2 = () => {
  return (
    <div className="padding-x padding-y flex flex-col-reverse  sm:flex-row justify-start items-start gap-10  ">
      <div className="w-full sm:w-1/2">
        <Image src={solution} alt="service" className="mr-auto" />
      </div>
      <div className="w-full sm:w-2/5 ">
        <h2 className="text-[25px] sm:text-[30px] lg:text-[30px] leading-[40px] sm:leading-[40px] lg:leading-[40px] font-semibold mb-6">
          Our managed IT Services let you
           concentrate on what matters
        </h2>
        <p className="3xl:text-[20px] opacity-80">
          FGC will act as a strategic IT partner and expert team, providing a
          bespoke service that is tailored to health Care needs. FGC will act as
          a strategic IT partner and expert team, providing a bespoke service
          that is tailored to health Care needs.
        </p>
      </div>
    </div>
  );
};

export default SolutionContent2;
