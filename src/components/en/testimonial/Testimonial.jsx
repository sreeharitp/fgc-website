import React from "react";
import Slider2 from "./Slider2";

const Testimonial = () => {
  return (
    <div className="padding-x padding-y">
      <div className="text-center">
        <h6 className="text-[20px] text-[#E4361A] font-medium mb-4">
          What they say
        </h6>
        <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold mb-5">
          Some feedbacks from honourable Clients
        </h2>
        <p className="3xl:text-[20px]">
          Here are some testimonials from our user after using FGC
        </p>
      </div>
      <div className="mt-28">
        <Slider2/>
      </div>
    </div>
  );
};

export default Testimonial;
