import React from "react";
import Slider2 from "./Slider2";

const Testimonial = () => {
  return (
    <div className="padding-x padding-y">
      <div className="text-center ">
        <h6 className="text-[20px] text-[#D02102] font-medium mb-4">
          ماذا يقولون
        </h6>
        <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold mb-5">
          بعض ردود الفعل من العملاء الكرام
        </h2>
        <p className="3xl:text-[20px] opacity-80">فيما يلي بعض الشهادات من مستخدمنا بعد استخدام FGC</p>
      </div>
      <div className="mt-28">
        <Slider2 />
      </div>
    </div>
  );
};

export default Testimonial;
