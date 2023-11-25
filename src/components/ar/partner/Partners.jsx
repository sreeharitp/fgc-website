import React from "react";
import Slider3 from "./Slider3";

const Partners = () => {
  return (
    <div className="padding-x padding-y flex flex-col sm:flex-row justify-between items-center">
      <div className="max-w-[580px]">
        <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold mb-6">
        الشركاء المتصلون
        </h2>
        <p className="3xl:text-[20px] opacity-80">
        يتم تدريب جميع الفنيين لدينا على أعلى مستوى، مع سنوات من الخبرة تحت أحزمتهم. إنهم معتمدون بالكامل (MCC، ISO) ويغطيون جميع التكنولوجيا التي تحتاجها عبر تكنولوجيا المعلومات والأمن، مع المعرفة العملية المطلوبة للحفاظ على سير أعمالك بسلاسة.
        </p>
      </div>
      <div className="w-full sm:w-2/5 lg:w-1/2 mt-10 sm:mt-0">
        <Slider3/>
      </div>
    </div>
  );
};

export default Partners;
